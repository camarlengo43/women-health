import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'

export interface HubItem {
  title: string
  description?: string
  href: string
}

export function HubLayout({
  eyebrow,
  title,
  intro,
  items,
  breadcrumbLabel,
}: {
  eyebrow: string
  title: string
  intro: string
  items: HubItem[]
  breadcrumbLabel: string
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
              <ArrowRight className="h-4 w-4 text-accent transition group-hover:translate-x-1" />
            </div>
            {item.description ? (
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  )
}
