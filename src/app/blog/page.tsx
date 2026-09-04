import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts } from '@/services'
import { getAllCategories } from '@/config'
import { InfiniteArticleGrid } from '@/features/blog'
import { Breadcrumbs } from '@/components/layout'
import { ScrollReveal } from '@/components/shared'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Artículos y Guías sobre Salud Femenina',
  description:
    'Explora nuestra biblioteca de artículos sobre salud menstrual, perimenopausia, menopausia, embarazo y bienestar femenino respaldados por evidencia científica.',
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = getAllCategories()

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs items={[{ label: 'Artículos', href: '/blog' }]} />
      </div>

      {/* Header */}
      <ScrollReveal>
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
            Artículos y Guías de Salud
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Información rigurosa, clara y basada en la evidencia científica para acompañarte en cada fase de tu vida. Sin mitos ni tabúes.
          </p>
        </div>
      </ScrollReveal>

      {/* Categories & Search Bar Row */}
      <ScrollReveal delay={80}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-border mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              Categorías:
            </span>
            <Link
              href="/blog"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-foreground text-background shadow-xs transition-colors"
            >
              Todas ({posts.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Quick Search Button */}
          <Link
            href="/buscar"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground transition-colors shrink-0"
          >
            <Search className="w-4 h-4 text-accent" />
            <span>Buscar artículos...</span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Articles Dynamic Infinite Grid */}
      <div className="mb-16">
        <InfiniteArticleGrid posts={posts} initialBatch={6} batchSize={6} />
      </div>
    </div>
  )
}
