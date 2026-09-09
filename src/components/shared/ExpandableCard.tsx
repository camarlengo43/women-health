'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ExpandableCardItem {
  title: string
  description?: string
  /** Content revealed inline (no navigation) */
  content?: string
  /** Key points visible on expand */
  points?: string[]
  /** Optional SEO detail link (secondary, no forced navigation) */
  href?: string
  hrefLabel?: string
}

/**
 * Generic accessible accordion (occasional use inside content).
 * Category hubs use real navigation with HubLayout;
 * this component does not replace detail pages.
 */
export function ExpandableCard({ item }: { item: ExpandableCardItem }) {
  const [open, setOpen] = useState(false)
  const regionId = useId()
  const hasExpandable = Boolean(item.content || (item.points && item.points.length > 0))

  return (
    <article
      className={cn(
        'h-fit w-full self-start rounded-2xl border border-border bg-card p-5 shadow-card transition',
        open ? 'border-accent/40' : 'hover:border-accent/40'
      )}
    >
      <button
        type="button"
        onClick={() => hasExpandable && setOpen((v) => !v)}
        aria-expanded={hasExpandable ? open : undefined}
        aria-controls={hasExpandable ? regionId : undefined}
        disabled={!hasExpandable}
        className={cn(
          'flex w-full items-start justify-between gap-3 text-left rounded-lg',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
          hasExpandable ? 'cursor-pointer' : 'cursor-default'
        )}
      >
        <span>
          <span className="block text-xl font-semibold text-foreground">{item.title}</span>
          {item.description && (
            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </span>
          )}
        </span>
        {hasExpandable && (
          <span
            className={cn(
              'mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-accent transition-transform',
              open && 'rotate-180'
            )}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        )}
      </button>

      {hasExpandable && open && (
        <div id={regionId} role="region" className="mt-4 border-t border-border pt-4 animate-fade-in">
          {item.content && (
            <p className="text-sm leading-relaxed text-muted-foreground">{item.content}</p>
          )}
          {item.points && item.points.length > 0 && (
            <ul className="mt-3 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          {item.href && (
            <Link
              href={item.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              {item.hrefLabel ?? 'Ver detalle →'}
            </Link>
          )}
        </div>
      )}

      {/* No expandable content: keep classic link as fallback */}
      {!hasExpandable && item.href && (
        <Link
          href={item.href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          {item.hrefLabel ?? 'Ver detalle →'}
        </Link>
      )}
    </article>
  )
}

export function ExpandableGrid({ items }: { items: ExpandableCardItem[] }) {
  return (
    <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ExpandableCard key={item.title} item={item} />
      ))}
    </div>
  )
}
