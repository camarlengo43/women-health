import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Movimiento y ejercicio',
  description: 'Descubre ejercicio para fuerza, cardio, movilidad, salud ósea y equilibrio en cada etapa.',
  alternates: { canonical: '/movimiento' },
}

const topics = [
  { title: 'Fuerza', href: '/movimiento/fuerza' },
  { title: 'Cardio', href: '/movimiento/cardio' },
  { title: 'Movilidad', href: '/movimiento/movilidad' },
  { title: 'Equilibrio', href: '/movimiento/equilibrio' },
  { title: 'Salud ósea', href: '/movimiento/salud-osea' },
  { title: 'Ejercicio en perimenopausia', href: '/ejercicio-perimenopausia' },
  { title: 'Ejercicio en menopausia', href: '/ejercicio-menopausia' },
  { title: 'Rutina de fuerza', href: '/rutina-fuerza-menopausia' },
]

export default function MovimientoPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Movimiento' }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Movimiento</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Muévete según tu etapa</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          El ejercicio puede apoyar la salud ósea, la energía, el sueño y el bienestar general, siempre con una guía realista y adaptada a cada etapa.
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
