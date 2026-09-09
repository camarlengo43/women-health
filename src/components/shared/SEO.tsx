/**
 * @deprecated No usar en App Router. Las páginas usan `export const metadata`
 * (title, description, canonical, openGraph, twitter) y los componentes
 * `JsonLd` + `generate*JsonLd` de `@/lib/seo` para datos estructurados.
 * Este archivo se conserva como stub para no romper imports históricos
 * y será eliminado. No renderiza nada.
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
