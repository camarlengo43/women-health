import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { RoutineGenerator } from '@/components/tools/RoutineGenerator'

export const metadata: Metadata = {
  title: 'Generador de rutinas',
  description: 'Genera una rutina orientativa según tu objetivo, nivel y disponibilidad para moverte mejor.',
  alternates: { canonical: '/generador-rutinas' },
}

export default function GeneradorRutinasPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Generador de rutinas' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Generador de rutinas</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta herramienta genera una propuesta general de actividad según el objetivo, la duración y la frecuencia elegidas. No sustituye una valoración individual ni una planificación adaptada a necesidades concretas.
      </div>

      <RoutineGenerator />
    </div>
  )
}
