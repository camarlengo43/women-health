import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { calculateReadingTime, slugify } from '@/lib/utils'
import type { Post, CategorySlug } from '@/types'

const contentDirectory = path.join(process.cwd(), 'content', 'blog')

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])>(.*?)<\/h[2-3]>/g,
    (_match, level, text) => {
      const id = slugify(text.replace(/<[^>]*>/g, ''))
      return `<h${level} id="${id}">${text}</h${level}>`
    }
  )
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html).process(content)
  return addHeadingIds(result.toString())
}

function getMarkdownFiles(dir: string): string[] {
  const files: string[] = []
  if (!fs.existsSync(dir)) return files

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath))
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }
  return files
}

export async function getPosts(): Promise<Post[]> {
  const files = getMarkdownFiles(contentDirectory)
  const posts = await Promise.all(files.map(parsePostFile))
  return posts
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find((p) => p.slug === slug) ?? null
}

export async function getPostsByCategory(
  categorySlug: CategorySlug
): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter((p) => p.category === categorySlug)
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts()
  return posts.filter((p) => p.featured)
}

export async function getLatestPosts(limit: number = 6): Promise<Post[]> {
  const posts = await getPosts()
  return posts.slice(0, limit)
}

export async function getRelatedPosts(
  currentSlug: string,
  category: CategorySlug,
  limit: number = 3
): Promise<Post[]> {
  const posts = await getPostsByCategory(category)
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts()
  return posts.map((p) => p.slug)
}

async function parsePostFile(filePath: string): Promise<Post | null> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const htmlContent = await processMarkdown(content)
    const slug =
      data.slug || path.basename(filePath).replace(/\.mdx?$/, '')

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: htmlContent,
      category: data.category as CategorySlug,
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      readingTime: calculateReadingTime(content),
      featured: data.featured || false,
      image: data.image || {
        src: `/images/blog/${slug}.jpg`,
        alt: data.title || '',
        width: 1200,
        height: 630,
      },
      author: data.author,
      reviewer: data.reviewer,
      sources: data.sources,
      medicalDisclaimer: data.medicalDisclaimer ?? true,
      tags: data.tags,
      relatedSlugs: data.relatedSlugs,
    }
  } catch {
    console.error(`Error parsing ${filePath}`)
    return null
  }
}
