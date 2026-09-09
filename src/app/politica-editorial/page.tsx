import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Política editorial',
  description: 'Cómo seleccionamos fuentes, revisamos contenido y actualizamos la información en VidaMujer.',
  alternates: { canonical: '/politica-editorial' },
}

export default function PoliticaEditorialPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Política editorial' }]} />
      </div>

      <header className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Confianza y rigor</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Política editorial</h1>
      </header>

      <div className="prose max-w-none">
        <p>En VidaMujer priorizamos contenido que sea útil, claro, basado en evidencia y respetuoso con la experiencia real de la mujer.</p>
        <h2>Cómo seleccionamos las fuentes</h2>
        <p>Se priorizan guías, sociedades científicas, organismos sanitarios y publicaciones revisadas por pares. La información se compara, se contextualiza y se explica con un enfoque divulgativo sin simplificar en exceso.</p>
        <h2>Cómo revisamos el contenido</h2>
        <p>Los artículos se revisan para comprobar rigor, claridad, fuentes y coherencia con la evidencia disponible. Cuando una publicación se actualiza o se corrige, se indica la fecha de revisión.</p>
        <h2>Cómo se actualiza</h2>
        <p>El contenido se revisa periódicamente para incorporar nuevos datos, guías y cambios relevantes en la evidencia. La precisión y la transparencia son prioritarias.</p>
        <h2>Cómo se corrigen errores</h2>
        <p>Si detectamos una inexactitud, se corrige de forma puntual y se documenta la actualización relevante. La comunicación con la comunidad es un valor editorial importante.</p>
        <h2>Qué significa “revisado”</h2>
        <p>“Revisado” significa que el texto ha sido contrastado frente a fuentes de referencia y que el contenido ha sido revisado por criterios de calidad editorial, no que una persona concreta ha avalado un tratamiento individual.</p>
        <h2>Fuentes prioritarias</h2>
        <p>Se priorizan guías clínicas y societarias de referencia, así como publicaciones de organismos sanitarios de reconocido prestigio.</p>
      </div>
    </div>
  )
}
