import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Perimenopausia',
  description: 'Guías útiles sobre qué es la perimenopausia, los síntomas frecuentes, los cambios menstruales y cuándo consultar.',
  alternates: { canonical: '/perimenopausia' },
}

const topics = [
  { title: 'Qué es la perimenopausia', href: '/perimenopausia/que-es' },
  { title: 'Síntomas', href: '/perimenopausia/sintomas' },
  { title: 'Primeros síntomas', href: '/perimenopausia/primeros-sintomas' },
  { title: 'Cambios en la menstruación', href: '/perimenopausia/cambios-menstruacion' },
  { title: 'Sofocos', href: '/perimenopausia/sofocos' },
  { title: 'Insomnio', href: '/perimenopausia/insomnio' },
  { title: 'Ejercicio', href: '/perimenopausia/ejercicio' },
  { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar' },
]

export default function PerimenopausePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Perimenopausia' }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Etapa de transición</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Perimenopausia</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          La perimenopausia es la etapa que precede a la menopausia y puede acompañarse de cambios en el ciclo, el sueño, los sofocos y el bienestar general.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic) => (
          <Link key={topic.title} href={topic.href} className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40">
            <h2 className="text-xl font-semibold text-foreground">{topic.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
