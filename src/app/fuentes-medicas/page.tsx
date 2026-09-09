import { Breadcrumbs } from '@/components/layout'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Fuentes médicas',
  description: 'Organismos, guías y fuentes de referencia que sustentan la información publicada en VidaMujer.',
  path: '/fuentes-medicas',
})

const sources = [
  'Organización Mundial de la Salud (OMS)',
  'NHS / National Health Service',
  'Mayo Clinic',
  'Sociedad Española de Ginecología y Obstetricia (SEGO)',
  'Asociación Española para el Estudio de la Menopausia (AEEM)',
  'The Menopause Society',
  'NICE',
]

export default function FuentesMedicasPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Fuentes médicas' }]} />
      </div>

      <header className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Rigor y transparencia</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Fuentes médicas</h1>
      </header>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {sources.map((source) => (
            <li key={source} className="flex gap-3">
              <span className="mt-1 text-accent">•</span>
              <span>{source}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
