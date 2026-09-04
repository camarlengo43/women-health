export interface PostImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Source {
  name: string
  url?: string
  accessedAt?: string
}

export interface Author {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  credentials?: string
}

export interface MedicalReview {
  reviewer: string
  reviewedAt: string
  status: 'pending' | 'reviewed' | 'verified'
}

export type CategorySlug =
  | 'salud-menstrual'
  | 'perimenopausia'
  | 'menopausia'
  | 'embarazo'
  | 'bienestar'

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  category: CategorySlug
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  image: PostImage
  author?: Author
  reviewer?: MedicalReview
  sources?: Source[]
  medicalDisclaimer: boolean
  tags?: string[]
  relatedSlugs?: string[]
}
