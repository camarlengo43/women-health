import { Breadcrumbs } from '@/components/layout'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Equipo',
  description: 'La base editorial y de diseño de VidaMujer: rigor, claridad y enfoque de salud femenina.',
  path: '/equipo',
})

export default function EquipoPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Equipo' }]} />
      </div>

      <header className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sobre la plataforma</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Equipo</h1>
      </header>

      <div className="prose max-w-none">
        <p>En esta primera fase la organización de VidaMujer está preparada para incorporar perfiles reales de redacción, revisión médica y edición cuando estén disponibles.</p>
        <p>Mientras tanto, se mantiene un enfoque transparente: se prioriza la evidencia, el rigor editorial y la honestidad sobre la atribución profesional.</p>
      </div>
    </div>
  )
}
