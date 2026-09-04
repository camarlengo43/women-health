import Image from 'next/image'
import Link from 'next/link'
import { CategoryBadge } from '@/components/shared'
import { formatDate } from '@/lib/utils'
import { Clock } from 'lucide-react'
import type { Post } from '@/types'

interface ArticleCardProps {
  post: Post
  variant?: 'default' | 'featured' | 'compact'
}

export function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  const imageSrc = post.image?.src || `/images/blog/${post.slug}.jpg`
  const imageAlt = post.image?.alt || post.title

  if (variant === 'featured') {
    return (
      <article className="group relative bg-card rounded-2xl border border-border/80 overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={post.featured}
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="shadow-xs backdrop-blur-xs">
              <CategoryBadge category={post.category} linked={false} />
            </span>
          </div>
        </Link>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl lg:text-2xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground group-hover:text-accent transition-colors mb-3 leading-snug">
                {post.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              {post.readingTime} min de lectura
            </span>
          </div>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="group flex gap-4 items-start p-3 rounded-xl hover:bg-muted/40 transition-colors">
        <Link href={`/blog/${post.slug}`} className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-muted shrink-0 border border-border/60">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="96px"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="mb-1.5">
            <CategoryBadge category={post.category} size="sm" />
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-sm sm:text-base font-semibold font-[family-name:var(--font-family-heading)] text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h3>
          </Link>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-accent" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </article>
    )
  }

  // Default variant
  return (
    <article className="group bg-card rounded-2xl border border-border/80 overflow-hidden shadow-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 z-10">
          <CategoryBadge category={post.category} linked={false} />
        </div>
      </Link>
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="text-base sm:text-lg font-semibold font-[family-name:var(--font-family-heading)] text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
              {post.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            {post.readingTime} min
          </span>
        </div>
      </div>
    </article>
  )
}

