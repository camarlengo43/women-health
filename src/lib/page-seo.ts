import type { Metadata } from 'next'
import { siteConfig } from '@/config'

/**
 * Reusable SEO helper (App Router).
 *
 * Builds the full `Metadata` object for an indexable page:
 * unique title, unique description, canonical (resolved to absolute via
 * `metadataBase`) and Open Graph + Twitter Card consistent with the page.
 *
 * Usage:
 * ```ts
 * export const metadata = buildPageMetadata({
 *   title: 'Calculadora del ciclo menstrual',
 *   description: '...',
 *   path: '/calculadora-ciclo-menstrual',
 *   type: 'website',
 * })
 * ```
 *
 * Privacy/YMYL notes:
 * - `path` must be the canonical URL without query params: tool data
 *   must never appear in indexable URLs.
 * - Does not generate Review/Rating/FAQ schemas or fictitious authors.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  type = 'website',
  image,
  noindex = false,
}: {
  title: string
  description: string
  /** Canonical path, e.g. `/perimenopausia/sintomas` (no query params). */
  path: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
}): Metadata {
  const url = path.startsWith('http') ? path : path
  const imageUrl = image ?? siteConfig.ogImage

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}
