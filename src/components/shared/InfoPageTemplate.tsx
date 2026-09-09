import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { JsonLd } from './JsonLd'
import { MedicalDisclaimer } from './MedicalDisclaimer'
import { RelatedArticles, RelatedTools, RelatedTopics, type RelatedLink } from './Related'
import { ArticleMeta, AuthorCard, ReviewerCard } from './Eeat'

export interface InfoPageSection {
  title: string
  body: string
  list?: string[]
}

export interface InfoPageSource {
  label: string
  href?: string
}

/**
 * Plantilla reutilizable de página-artículo SEO (YMYL salud).
 * Soporta: breadcrumb + JSON-LD (Article + BreadcrumbList), categoría,
 * H1, entradilla, fechas, autor editorial, índice, puntos clave,
 * contenido H2, FAQ, fuentes, disclaimer, relacionados y herramientas.
 * Todos los bloques salvo el contenido base son opcionales.
 */
export function InfoPageTemplate({
  breadcrumbItems,
  eyebrow,
  title,
  intro,
  description,
  canonical,
  sections,
  keyPoints,
  sources,
  faq,
  related,
  tools,
  topics,
  publishedAt = '2026-03-10',
  updatedAt = '2026-08-15',
  authorName = 'Equipo Editorial VidaMujer',
  cta,
}: {
  breadcrumbItems: { label: string; href?: string }[]
  eyebrow: string
  title: string
  intro: string
  description?: string
  canonical?: string
  sections: InfoPageSection[]
  keyPoints?: string[]
  sources?: InfoPageSource[]
  faq?: { question: string; answer: string }[]
  related?: RelatedLink[]
  tools?: RelatedLink[]
  topics?: RelatedLink[]
  publishedAt?: string
  updatedAt?: string
  authorName?: string
  cta?: { label: string; href: string }
}) {
  const pageUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteConfig.url}${canonical}`
    : undefined

  const showToc = sections.length + (faq?.length ?? 0) >= 3

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      {pageUrl && (
        <>
          <JsonLd
            data={generateArticleJsonLd({
              title,
              description: description ?? intro,
              datePublished: publishedAt,
              dateModified: updatedAt,
              authorName,
              url: pageUrl,
            })}
          />
          <JsonLd
            data={generateBreadcrumbJsonLd([
              { name: 'Inicio', url: siteConfig.url },
              ...breadcrumbItems.map((item) => ({
                name: item.label,
                url: item.href ? `${siteConfig.url}${item.href}` : pageUrl,
              })),
            ])}
          />
        </>
      )}

      <div className="mb-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <header className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
            <div className="mt-5">
              <ArticleMeta publishedAt={publishedAt} updatedAt={updatedAt} category={eyebrow} />
              <p className="mt-1 text-xs text-muted-foreground">
                Por <span className="font-medium text-foreground">{authorName}</span>
              </p>
            </div>
          </header>

          {showToc && (
            <nav aria-label="Índice de contenidos" className="mb-8 rounded-2xl border border-border bg-muted/40 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                En esta página
              </p>
              <ol className="space-y-1.5 text-sm">
                {keyPoints && keyPoints.length > 0 && (
                  <li>
                    <a href="#puntos-clave" className="text-accent hover:underline underline-offset-4">
                      Puntos clave
                    </a>
                  </li>
                )}
                {sections.map((section) => {
                  const id = section.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
                  return (
                    <li key={section.title}>
                      <a href={`#${id}`} className="text-accent hover:underline underline-offset-4">
                        {section.title}
                      </a>
                    </li>
                  )
                })}
                {faq && faq.length > 0 && (
                  <li>
                    <a href="#preguntas-frecuentes" className="text-accent hover:underline underline-offset-4">
                      Preguntas frecuentes
                    </a>
                  </li>
                )}
                {sources && sources.length > 0 && (
                  <li>
                    <a href="#fuentes" className="text-accent hover:underline underline-offset-4">
                      Fuentes
                    </a>
                  </li>
                )}
              </ol>
            </nav>
          )}

          {keyPoints && keyPoints.length > 0 && (
            <section id="puntos-clave" aria-label="Puntos clave" className="mb-6 scroll-mt-24 rounded-2xl border border-accent/25 bg-accent/5 p-6">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Puntos clave</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="space-y-6">
            {sections.map((section) => {
              const id = section.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
              return (
                <section key={section.title} id={id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h2 className="mb-3 text-2xl font-semibold text-foreground">{section.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{section.body}</p>
                  {section.list && section.list.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )
            })}
          </div>

          {faq && faq.length > 0 && (
            <section id="preguntas-frecuentes" aria-label="Preguntas frecuentes" className="mt-6 scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-2xl font-semibold text-foreground">Preguntas frecuentes</h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {sources && sources.length > 0 && (
            <section id="fuentes" aria-label="Fuentes" className="mt-6 scroll-mt-24 rounded-2xl border border-border bg-muted/40 p-6">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Fuentes</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {sources.map((source) => (
                  <li key={source.label}>
                    {source.href ? (
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-4"
                      >
                        {source.label}
                      </a>
                    ) : (
                      source.label
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-6">
            <MedicalDisclaimer />
          </div>

          {cta && (
            <div className="mt-8">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {related && related.length > 0 && <RelatedArticles items={related} />}
          {tools && tools.length > 0 && <RelatedTools items={tools} />}
          {topics && topics.length > 0 && <RelatedTopics items={topics} />}
        </article>

        <aside className="hidden space-y-6 lg:block">
          <AuthorCard
            name={authorName}
            role="Equipo editorial"
            bio="Contenido elaborado con fuentes médicas y científicas de referencia y actualizado de forma periódica."
          />
          <ReviewerCard />
        </aside>
      </div>
    </div>
  )
}
