import type { Metadata } from 'next'
import { searchPosts, searchPostsByCategory } from '@/services/search'
import { getPosts } from '@/services/posts'
import { SearchInput, SearchFilters } from '@/features/search'
import { ArticleCard } from '@/features/blog'
import { Breadcrumbs } from '@/components/layout'
import { JsonLd } from '@/components/shared'
import { siteConfig } from '@/config'
import type { Post } from '@/types'
import { Search, Sparkles } from 'lucide-react'

interface SearchPageProps {
  searchParams: Promise<{ q?: string; categoria?: string }>
}

export const metadata: Metadata = {
  title: 'Buscador de Artículos y Temas de Salud',
  description:
    'Encuentra respuestas, guías clínicas y artículos rigurosos sobre cualquier síntoma o etapa de la salud femenina.',
  alternates: {
    canonical: '/buscar',
  },
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const query = params.q?.trim() || ''
  const category = params.categoria?.trim() || ''

  let results: Post[] = []
  let isSearching = false

  if (query) {
    isSearching = true
    if (category) {
      results = await searchPostsByCategory(query, category)
    } else {
      results = await searchPosts(query)
    }
  } else if (category) {
    isSearching = true
    const all = await getPosts()
    results = all.filter((p) => p.category === category)
  }

  const allPosts = await getPosts()

  const searchJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: 'Buscador VidaMujer',
    url: `${siteConfig.url}/buscar`,
    description: 'Búsqueda especializada en salud femenina',
  }

  return (
    <>
      <JsonLd data={searchJsonLd} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Buscar', href: '/buscar' }]} />
        </div>

        {/* Search Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
            Buscador de Salud Femenina
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
            Encuentra respuestas basadas en evidencia sobre síntomas, fases del ciclo, perimenopausia, fertilidad y bienestar.
          </p>

          {/* Search Input Box */}
          <div className="mb-6">
            <SearchInput />
          </div>

          {/* Search Filters */}
          <div className="flex justify-center">
            <SearchFilters currentCategory={category} currentQuery={query} />
          </div>
        </div>

        {/* Search Results / Content Area */}
        <div className="mt-12">
          {isSearching ? (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border mb-8">
                <p className="text-sm text-muted-foreground">
                  {results.length === 0 ? (
                    'No se encontraron artículos'
                  ) : (
                    <>
                      Se han encontrado{' '}
                      <span className="font-semibold text-foreground">
                        {results.length}
                      </span>{' '}
                      {results.length === 1 ? 'resultado' : 'resultados'}
                      {query && (
                        <>
                          {' '}
                          para &ldquo;<span className="text-foreground">{query}</span>&rdquo;
                        </>
                      )}
                    </>
                  )}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="max-w-md mx-auto text-center py-16 px-4 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                    <Search className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Sin resultados directos
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    No encontramos artículos que coincidan exactamente con tu criterio. Prueba con términos más generales como &ldquo;ciclo&rdquo;, &ldquo;sofocos&rdquo; o &ldquo;sueño&rdquo;.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-border mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Artículos recomendados para empezar
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.slice(0, 6).map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
