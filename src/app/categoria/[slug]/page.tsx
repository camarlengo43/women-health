import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, getAllCategories, siteConfig } from '@/config'
import { getPostsByCategory } from '@/services'
import { InfiniteArticleGrid } from '@/features/blog'
import { Breadcrumbs } from '@/components/layout'
import { JsonLd, ScrollReveal } from '@/components/shared'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import type { CategorySlug } from '@/types'
import { ArrowLeft } from 'lucide-react'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug as CategorySlug)
  if (!category) return {}

  const url = `${siteConfig.url}/categoria/${category.slug}`

  return {
    title: category.seo?.title || `${category.name} — Guías y Artículos`,
    description: category.seo?.description || category.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title: `${category.name} | ${siteConfig.name}`,
      description: category.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | ${siteConfig.name}`,
      description: category.description,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug as CategorySlug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.slug as CategorySlug)
  const categoryUrl = `${siteConfig.url}/categoria/${category.slug}`

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: categoryUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Categorías', url: `${siteConfig.url}/categorias` },
    { name: category.name, url: categoryUrl },
  ])

  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="py-10 sm:py-14">
        {/* Breadcrumbs */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumbs
            items={[
              { label: 'Categorías', href: '/categorias' },
              { label: category.name },
            ]}
          />
        </div>

        {/* Category Hero Banner */}
        <ScrollReveal>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div
              className="p-8 sm:p-12 rounded-3xl border border-border relative overflow-hidden"
              style={{
                background: `radial-gradient(ellipse at 80% 20%, color-mix(in srgb, ${category.color} 18%, transparent) 0%, var(--color-card) 70%)`,
              }}
            >
              <div className="max-w-3xl relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${category.color} 18%, transparent)`,
                    color: category.color,
                  }}
                >
                  Área de especialidad
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
                  {category.name}
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Topics tags */}
                {category.topics && category.topics.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
                      Temas abordados:
                    </span>
                    {category.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-md bg-background border border-border text-foreground/80 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Articles List */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={50}>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <h2 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground">
                Artículos en esta sección ({posts.length})
              </h2>
              <Link
                href="/categorias"
                className="inline-flex items-center gap-1 text-xs sm:text-sm text-accent hover:underline underline-offset-4"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ver otras categorías</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="mb-16">
            <InfiniteArticleGrid
              posts={posts}
              initialBatch={6}
              batchSize={6}
              emptyMessage="Próximamente publicaremos más artículos en esta sección."
            />
          </div>
        </div>
      </div>
    </>
  )
}
