import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/layout'
import { getGlossaryTerm, glossaryTerms } from '@/config/glossary'
import { RelatedTopics } from '@/components/shared'

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const term = getGlossaryTerm(slug)
  if (!term) return {}
  return {
    title: `${term.term}: significado`,
    description: term.short,
    alternates: { canonical: `/glosario/${term.slug}` },
  }
}

export default async function GlosarioTermPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const term = getGlossaryTerm(slug)
  if (!term) notFound()

  return (
    <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Glosario', href: '/glosario' }, { label: term.term }]} />
      </div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Glosario
      </p>
      <h1 className="text-4xl font-semibold text-foreground">{term.term}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{term.body}</p>
      {term.related && (
        <RelatedTopics
          items={term.related.map((r) => ({ title: r.label, href: r.href }))}
        />
      )}
      <div className="mt-8">
        <Link href="/glosario" className="text-sm font-medium text-accent hover:underline">
          ← Volver al glosario
        </Link>
      </div>
    </div>
  )
}
