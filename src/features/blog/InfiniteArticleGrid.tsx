'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import type { Post } from '@/types'
import { ArticleCard } from './ArticleCard'
import { Loader2, CheckCircle2 } from 'lucide-react'

interface InfiniteArticleGridProps {
  posts: Post[]
  initialBatch?: number
  batchSize?: number
  emptyMessage?: string
}

export function InfiniteArticleGrid({
  posts,
  initialBatch = 6,
  batchSize = 6,
  emptyMessage = 'No hay artículos disponibles en esta sección por el momento.',
}: InfiniteArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialBatch)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const total = posts.length
  const hasMore = visibleCount < total

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingMore) return

    setIsLoadingMore(true)
    // Small natural delay so the user perceives the progressive dynamic stream
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + batchSize, total))
      setIsLoadingMore(false)
    }, 280)
  }, [hasMore, isLoadingMore, batchSize, total])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          loadMore()
        }
      },
      {
        rootMargin: '250px 0px', // Trigger slightly before reaching the bottom
        threshold: 0.1,
      }
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [hasMore, loadMore])

  if (total === 0) {
    return (
      <div className="text-center py-16 bg-card rounded-2xl border border-border">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  const visiblePosts = posts.slice(0, visibleCount)

  return (
    <div>
      {/* Dynamic Grid for Interactive Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" id="articles-grid">
        {visiblePosts.map((post, idx) => (
          <div
            key={post.slug}
            className="animate-fade-in"
            style={{ animationDelay: `${(idx % batchSize) * 60}ms` }}
          >
            <ArticleCard post={post} />
          </div>
        ))}
      </div>

      {/* Sentinel & Dynamic Loading Indicator */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="py-10 flex flex-col items-center justify-center gap-3 text-center"
          aria-live="polite"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 text-muted-foreground text-xs font-medium border border-border">
            <Loader2 className="w-4 h-4 animate-spin text-accent" />
            <span>Cargando más artículos al descender…</span>
          </div>

          {/* Accessible fallback button for keyboard navigation or without scroll */}
          <button
            type="button"
            onClick={loadMore}
            disabled={isLoadingMore}
            className="mt-2 text-xs text-accent hover:underline font-medium underline-offset-4 focus:outline-none"
          >
            ¿No baja el scroll? Haz clic aquí para cargar más ({total - visibleCount} restantes)
          </button>
        </div>
      )}

      {/* All Loaded Message */}
      {!hasMore && total > initialBatch && (
        <div className="py-8 text-center border-t border-border/60 mt-10">
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted/40 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage" />
            Has visto los {total} artículos disponibles
          </p>
        </div>
      )}

      {/* SEO FALLBACK: Hidden from visual flow but 100% crawlable by Googlebot without JS scroll */}
      <noscript>
        <div className="mt-8 border-t border-border pt-6">
          <h2 className="text-lg font-semibold mb-4">Todos los artículos de esta sección</h2>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={`seo-${post.slug}`}>
                <Link href={`/blog/${post.slug}`} className="text-accent hover:underline">
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </noscript>
    </div>
  )
}
