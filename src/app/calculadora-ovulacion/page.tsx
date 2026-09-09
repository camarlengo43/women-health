import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { OvulationCalculator } from '@/components/tools/OvulationCalculator'

export const metadata: Metadata = {
  title: 'Calculadora de ovulación',
  description: 'Estima de forma orientativa la ventana de fertilidad y la ovulación a partir del ciclo menstrual.',
  alternates: { canonical: '/calculadora-ovulacion' },
}

export default function CalculadoraOvulacionPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora de ovulación' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora de ovulación</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta estimación ayuda a identificar una ventana fértil posible y observar patrones del ciclo. Sin embargo, la ovulación puede variar de un ciclo a otro y no todos los cambios se reflejan exactamente en la calculadora.
      </div>

      <OvulationCalculator />
    </div>
  )
}
