import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { CycleCalculator } from '@/components/tools/CycleCalculator'

export const metadata: Metadata = {
  title: 'Calculadora del ciclo menstrual',
  description: 'Calcula de forma orientativa tu próxima regla, la ovulación y la ventana fértil sin almacenar datos.',
  alternates: { canonical: '/calculadora-ciclo-menstrual' },
}

export default function CalculadoraCicloPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora del ciclo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora del ciclo menstrual</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta herramienta estima la fecha de la próxima regla, la ovulación y la fase fértil a partir de tus datos básicos. Es una referencia útil para observar patrones, pero no puede predecir con certeza cuándo ocurre la ovulación ni diagnosticar ninguna condición.
      </div>

      <CycleCalculator />
    </div>
  )
}
