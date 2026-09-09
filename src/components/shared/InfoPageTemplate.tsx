import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'

export interface InfoPageSection {
  title: string
  body: string
  list?: string[]
}

export function InfoPageTemplate({
  breadcrumbItems,
  eyebrow,
  title,
  intro,
  sections,
  cta,
}: {
  breadcrumbItems: { label: string; href?: string }[]
  eyebrow: string
  title: string
  intro: string
  sections: InfoPageSection[]
  cta?: { label: string; href: string }
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </header>

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">{section.title}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{section.body}</p>
            {section.list && section.list.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {cta && (
        <div className="mt-8">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}
