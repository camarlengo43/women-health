import Link from 'next/link'
import { ArrowRight, Wrench } from 'lucide-react'

export interface RelatedLink {
  title: string
  href: string
  description?: string
}

export function RelatedArticles({
  title = 'Contenido relacionado',
  items,
}: {
  title?: string
  items: RelatedLink[]
}) {
  if (!items.length) return null
  return (
    <section aria-labelledby="related-articles" className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card">
      <h2 id="related-articles" className="mb-4 text-xl font-semibold text-foreground">
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start justify-between gap-3 rounded-xl p-2 transition hover:bg-muted/60"
            >
              <span>
                <span className="block text-sm font-medium text-foreground group-hover:text-accent">
                  {item.title}
                </span>
                {item.description && (
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function RelatedTools({ items }: { items: RelatedLink[] }) {
  if (!items.length) return null
  return (
    <section aria-labelledby="related-tools" className="mt-8 rounded-2xl border border-accent/25 bg-accent/5 p-6">
      <div className="mb-3 flex items-center gap-2">
        <Wrench className="h-4 w-4 text-accent" aria-hidden="true" />
        <h2 id="related-tools" className="text-lg font-semibold text-foreground">
          Herramientas relacionadas
        </h2>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
        Funcionan en tu navegador, sin registro. Los datos no salen de tu dispositivo.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl border border-border bg-card p-3 text-sm font-medium text-foreground transition hover:border-accent/40"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function RelatedTopics({ items }: { items: RelatedLink[] }) {
  if (!items.length) return null
  return (
    <nav aria-label="Temas relacionados" className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Seguir explorando
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
