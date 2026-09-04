import type { Post } from '@/types'
import { getPosts } from './posts'

export async function searchPosts(query: string): Promise<Post[]> {
  if (!query || query.trim().length < 2) return []

  const normalizedQuery = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const posts = await getPosts()

  return posts.filter((post) => {
    const searchableText = [
      post.title,
      post.excerpt,
      post.category,
      post.tags?.join(' ') ?? '',
      post.content.replace(/<[^>]*>/g, ''),
    ]
      .join(' ')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return normalizedQuery
      .split(/\s+/)
      .every((term) => searchableText.includes(term))
  })
}

export async function searchPostsByCategory(
  query: string,
  category: string
): Promise<Post[]> {
  const results = await searchPosts(query)
  if (!category) return results
  return results.filter((p) => p.category === category)
}
