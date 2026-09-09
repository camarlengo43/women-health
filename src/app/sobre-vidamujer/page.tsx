import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Sobre VidaMujer',
  description: 'Conoce la misión, la metodología editorial y la visión de VidaMujer como plataforma de salud femenina.',
  alternates: { canonical: '/sobre-vidamujer' },
}

export default function SobreVidaMujerPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Sobre VidaMujer' }]} />
      </div>

      <header className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Nuestra misión</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Sobre VidaMujer</h1>
      </header>

      <div className="prose max-w-none">
        <p>VidaMujer nació para acompañar a las personas en etapas clave de la salud femenina con información clara, útil y basada en evidencia.</p>
        <p>La plataforma combina contenido editorial, herramientas prácticas y recursos orientativos para entender mejor el cuerpo, el ciclo, la perimenopausia y la menopausia.</p>
      </div>
    </div>
  )
}
