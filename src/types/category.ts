import type { CategorySlug } from './post'

export interface Category {
  slug: CategorySlug
  name: string
  description: string
  excerpt: string
  icon: string
  color: string
  topics: string[]
  seo?: {
    title?: string
    description?: string
  }
}
