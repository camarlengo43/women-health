import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout'
import { getGlossaryTerm, glossaryTerms } from '@/config/glossary'
import { siteConfig } from '@/config'
import {
  JsonLd,
  MedicalDisclaimer,
  RelatedTopics,
  RelatedArticles,
  ArticleMeta,
  AuthorCard,
} from '@/components/shared'
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const term = getGlossaryTerm(slug)
  if (!term) return {}
  return {
    title: `${term.term}: significado`,
    description: term.short,
    alternates: { canonical: `/glosario/${term.slug}` },
  }
}

export default async function GlosarioTermPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const term = getGlossaryTerm(slug)
  if (!term) notFound()

  const url = `${siteConfig.url}/glosario/${term.slug}`

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={generateArticleJsonLd({
          title: `${term.term}: significado`,
          description: term.short,
          datePublished: '2026-03-10',
          dateModified: '2026-08-15',
          authorName: 'Equipo Editorial VidaMujer',
          url,
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Glosario', url: `${siteConfig.url}/glosario` },
          { name: term.term, url },
        ])}
      />

      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Glosario', href: '/glosario' }, { label: term.term }]} />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0 max-w-[800px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Glosario
          </p>
          <h1 className="text-4xl font-semibold text-foreground">{term.term}: significado</h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">{term.short}</p>
          <div className="mt-4">
            <ArticleMeta publishedAt="2026-03-10" updatedAt="2026-08-15" category="Glosario" />
            <p className="mt-1 text-xs text-muted-foreground">
              Por <span className="font-medium text-foreground">Equipo Editorial VidaMujer</span>
            </p>
          </div>

          <section aria-label="Explicación" className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">Explicación sencilla</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{term.body}</p>
          </section>

          <section aria-label="Por qué es relevante" className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">Por qué es relevante</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{term.relevance}</p>
          </section>

          <section aria-label="Fuentes" className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="mb-3 text-xl font-semibold text-foreground">Fuentes</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Definiciones elaboradas a partir de fuentes médicas de referencia. Consulta nuestra{' '}
              <Link href="/fuentes-medicas" className="text-accent hover:underline underline-offset-4">
                política de fuentes médicas
              </Link>{' '}
              para saber cómo trabajamos.
            </p>
          </section>

          <div className="mt-6">
            <MedicalDisclaimer />
          </div>

          {term.related && (
            <RelatedArticles
              title="Conceptos relacionados"
              items={term.related.map((r) => ({ title: r.label, href: r.href }))}
            />
          )}
          <RelatedTopics
            items={glossaryTerms
              .filter((t) => t.slug !== term.slug)
              .slice(0, 6)
              .map((t) => ({ title: t.term, href: `/glosario/${t.slug}` }))}
          />

          <div className="mt-8">
            <Link href="/glosario" className="text-sm font-medium text-accent hover:underline">
              ← Volver al glosario
            </Link>
          </div>
        </article>

        <aside className="hidden space-y-6 lg:block">
          <AuthorCard
            name="Equipo Editorial VidaMujer"
            role="Equipo editorial"
            bio="Contenido elaborado con fuentes médicas y científicas de referencia y actualizado de forma periódica."
          />
        </aside>
      </div>
    </div>
  )
}
