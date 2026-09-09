import { siteConfig } from '@/config'
import { JsonLd } from './JsonLd'

export function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
}: {
  title: string
  description: string
  canonical: string
  image?: string
  type?: 'website' | 'article'
}) {
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${siteConfig.url}${canonical}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`) : `${siteConfig.url}/icon.png`

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: `${siteConfig.url}/logo.png`,
    },
  }

  const schema = type === 'article'
    ? {
        ...baseSchema,
        headline: title,
        image: imageUrl,
        datePublished: new Date().toISOString(),
      }
    : baseSchema

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <JsonLd data={schema} />
    </>
  )
}
