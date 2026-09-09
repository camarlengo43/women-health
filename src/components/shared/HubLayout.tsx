import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import { JsonLd } from './JsonLd'
import { RelatedArticles, RelatedTools, type RelatedLink } from './Related'

export interface HubItem {
  title: string
  description?: string
  href: string
}

/**
 * Landing de categoría SEO: cada tarjeta es un enlace real
 * a una página hija indexable. El hub ofrece la visión general;
 * el contenido detallado vive en las páginas hijas.
 */
export function HubLayout({
  eyebrow,
  title,
  intro,
  description,
  canonical,
  items,
  breadcrumbLabel,
  relatedTools,
  relatedArticles,
}: {
  eyebrow: string
  title: string
  intro: string
  description?: string
  canonical?: string
  items: HubItem[]
  breadcrumbLabel: string
  relatedTools?: RelatedLink[]
  relatedArticles?: RelatedLink[]
}) {
  const pageUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteConfig.url}${canonical}`
    : undefined

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      {pageUrl && (
        <>
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: title,
              description: description ?? intro,
              url: pageUrl,
              isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
              publisher: {
                '@type': 'Organization',
                name: siteConfig.name,
                logo: `${siteConfig.url}/logo.png`,
              },
            }}
          />
          <JsonLd
            data={generateBreadcrumbJsonLd([
              { name: 'Inicio', url: siteConfig.url },
              { name: breadcrumbLabel, url: pageUrl },
            ])}
          />
        </>
      )}
      <div className="mb-8">
        <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </header>

      <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="block text-xl font-semibold text-foreground group-hover:text-accent">
              {item.title}
            </span>
            {item.description && (
              <span className="mt-1 block flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </span>
            )}
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
              Leer guía
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>

      {relatedTools && relatedTools.length > 0 && (
        <RelatedTools items={relatedTools} />
      )}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles items={relatedArticles} />
      )}
    </div>
  )
}
