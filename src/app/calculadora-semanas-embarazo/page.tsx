import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { PregnancyCalculator } from '@/components/tools/PregnancyCalculator'

export const metadata: Metadata = {
  title: 'Calculadora de embarazo',
  description: 'Calcula de forma orientativa la semana de embarazo y la fecha estimada de parto.',
  alternates: { canonical: '/calculadora-semanas-embarazo' },
}

export default function CalculadoraEmbarazoPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora de embarazo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora de embarazo</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta calculadora ofrece una estimación útil para comprender aproximadamente la semana de gestación y la fecha probable de parto. La evolución real puede variar significativamente según la persona y la situación clínica.
      </div>

      <PregnancyCalculator />
    </div>
  )
}
