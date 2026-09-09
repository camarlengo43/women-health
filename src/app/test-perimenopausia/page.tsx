import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { PerimenopauseTest } from '@/components/tools/PerimenopauseTest'

export const metadata: Metadata = {
  title: 'Test orientativo de perimenopausia',
  description: 'Explora síntomas frecuentes y recibe un resultado informativo sobre la perimenopausia sin diagnosticar.',
  alternates: { canonical: '/test-perimenopausia' },
}

export default function PerimenopauseTestPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Test orientativo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta informativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Test orientativo de perimenopausia</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Este cuestionario es una herramienta educativa para explorar si has notado síntomas frecuentes relacionados con la transición menopáusica. No diagnostica perimenopausia ni otra enfermedad; su única finalidad es orientarte y ayudarte a decidir si merece la pena consultar a un profesional.
      </div>

      <PerimenopauseTest />
    </div>
  )
}
