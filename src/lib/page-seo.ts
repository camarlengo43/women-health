import type { Metadata } from 'next'
import { siteConfig } from '@/config'

/**
 * Helper SEO reutilizable (App Router).
 *
 * Genera el objeto `Metadata` completo para una página indexable:
 * title único, description única, canonical (resuelto a absoluto vía
 * `metadataBase`) y Open Graph + Twitter Card coherentes con la página.
 *
 * Uso:
 * ```ts
 * export const metadata = buildPageMetadata({
 *   title: 'Calculadora del ciclo menstrual',
 *   description: '...',
 *   path: '/calculadora-ciclo-menstrual',
 *   type: 'website',
 * })
 * ```
 *
 * Notas de privacidad/YMYL:
 * - `path` debe ser la URL canónica sin query params: los datos de las
 *   herramientas nunca deben aparecer en URLs indexables.
 * - No genera schemas de Review/Rating/FAQ ni autores ficticios.
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
  /** Ruta canónica, p. ej. `/perimenopausia/sintomas` (sin query params). */
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
