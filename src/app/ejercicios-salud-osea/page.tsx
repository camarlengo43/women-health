import type { Metadata } from 'next'
import { InfoPageTemplate, RelatedTools } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicios para la salud ósea',
  description:
    'Cómo apoyar tus huesos con movimiento: fuerza, impacto moderado, equilibrio y hábitos. Guía orientativa por etapas.',
  alternates: { canonical: '/ejercicios-salud-osea' },
}

export default function SaludOseaEjPage() {
  return (
    <>
      <InfoPageTemplate
        breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Salud ósea' }]}
        eyebrow="Movimiento"
        title="Ejercicios para la salud ósea"
        intro="Los huesos responden a la carga: fuerza, impacto moderado y equilibrio ayudan a mantener densidad y a prevenir caídas. Caminar es buena base, pero conviene sumar más estímulos."
        sections={[
          {
            title: 'Qué tipo de ejercicio ayuda',
            body: 'La fuerza con carga progresiva, los impactos moderados como marcha rápida, baile o pequeños saltos adaptados, y el equilibrio reducen riesgo de caídas y apoyan la densidad ósea.',
            list: ['Fuerza 2-3 días', 'Impacto moderado adaptado', 'Equilibrio y movilidad'],
          },
          {
            title: 'Hábitos que suman',
            body: 'Suficiente proteína, calcio y vitamina D, no fumar, moderar alcohol y dormir bien complementan el movimiento. En menopausia la valoración médica es especialmente útil.',
            list: ['Proteína y calcio', 'Vitamina D y sol prudente', 'Descanso'],
          },
          {
            title: 'Precauciones',
            body: 'Si ya hay osteoporosis o fracturas previas, evita flexiones profundas de columna con carga, impactos altos y caídas. Pide un plan adaptado a un profesional.',
            list: ['Evitar impactos altos si hay fractura', 'Cuidar la postura con carga', 'Plan personalizado'],
          },
        ]}
        cta={{ label: 'Ver salud ósea en menopausia', href: '/menopausia/salud-osea' }}
      />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RelatedTools items={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]} />
      </div>
    </>
  )
}
