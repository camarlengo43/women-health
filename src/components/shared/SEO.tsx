/**
 * @deprecated Do not use in App Router. Pages use `export const metadata`
 * (title, description, canonical, openGraph, twitter) and the
 * `JsonLd` + `generate*JsonLd` helpers from `@/lib/seo` for structured data.
 * This file is kept as a stub to avoid breaking historical imports
 * and will be removed. It renders nothing.
 */
export function SEO(args: {
  title: string
  description: string
  canonical: string
  image?: string
  type?: 'website' | 'article'
}) {
  void args
  return null
}
