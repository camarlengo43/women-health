export interface SeoMetadata {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

export interface JsonLdArticle {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  author?: {
    '@type': 'Person'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo?: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': 'WebPage'
    '@id': string
  }
}

export interface JsonLdBreadcrumb {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }[]
}

export interface JsonLdWebSite {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  potentialAction?: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface JsonLdOrganization {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  description: string
  logo?: string
}
