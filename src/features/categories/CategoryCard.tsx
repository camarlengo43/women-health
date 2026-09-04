import Link from 'next/link'
import type { Category } from '@/types'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  category: Category
  postCount?: number
  variant?: 'default' | 'detailed' | 'compact'
}

export function CategoryCard({
  category,
  postCount,
  variant = 'default',
}: CategoryCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/categoria/${category.slug}`}
        className="flex items-center gap-3 p-3.5 rounded-xl border border-border bg-card hover:border-foreground/20 hover:shadow-xs transition-all duration-200 group"
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
          style={{
            backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)`,
            color: category.color,
          }}
        >
          <CategoryIcon name={category.icon} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">
            {category.name}
          </h3>
          {postCount !== undefined && (
            <p className="text-xs text-muted-foreground">
              {postCount} {postCount === 1 ? 'artículo' : 'artículos'}
            </p>
          )}
        </div>
      </Link>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className="flex flex-col h-full p-8 rounded-2xl border border-border bg-card shadow-card hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)`,
              color: category.color,
            }}
          >
            <CategoryIcon name={category.icon} size="lg" />
          </div>
          {postCount !== undefined && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
              {postCount} {postCount === 1 ? 'artículo' : 'artículos'}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
          {category.name}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {category.description}
        </p>

        {category.topics && category.topics.length > 0 && (
          <div className="mb-6 pt-4 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Temas clave
            </p>
            <div className="flex flex-wrap gap-1.5">
              {category.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground/80"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          href={`/categoria/${category.slug}`}
          className="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-border hover:bg-muted text-foreground transition-colors group"
        >
          <span>Ver artículos de {category.name}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    )
  }

  // Default variant
  return (
    <Link
      href={`/categoria/${category.slug}`}
      className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-foreground/20 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
    >
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)`,
          color: category.color,
        }}
      >
        <CategoryIcon name={category.icon} />
      </div>
      <h3 className="text-lg font-semibold font-[family-name:var(--font-family-heading)] text-foreground group-hover:text-accent transition-colors mb-2">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {category.excerpt}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs text-muted-foreground">
        <span>{postCount !== undefined ? `${postCount} artículos` : 'Explorar'}</span>
        <span className="flex items-center gap-1 text-foreground font-medium group-hover:text-accent transition-colors">
          Ver más
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

function CategoryIcon({ name, size = 'md' }: { name: string; size?: 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'text-2xl' : 'text-lg'
  switch (name) {
    case 'heart-pulse':
      return <span className={sizeClass} aria-hidden="true">♡</span>
    case 'sun-medium':
      return <span className={sizeClass} aria-hidden="true">☀</span>
    case 'moon':
      return <span className={sizeClass} aria-hidden="true">☽</span>
    case 'baby':
      return <span className={sizeClass} aria-hidden="true">❋</span>
    case 'leaf':
      return <span className={sizeClass} aria-hidden="true">🌿</span>
    default:
      return <span className={sizeClass} aria-hidden="true">✦</span>
  }
}
