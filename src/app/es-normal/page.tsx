import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: '¿Es normal?',
  description: 'Respuestas breves, claras y útiles sobre cambios frecuentes del ciclo, la menopausia y la salud femenina.',
  alternates: { canonical: '/es-normal' },
}

const items = [
  {
    title: '¿Es normal tener ciclos irregulares?',
    href: '/es-normal/ciclos-irregulares',
    description: 'Varían con edad, estrés y hormonas.',
  },
  {
    title: '¿Es normal tener sofocos a los 40?',
    href: '/es-normal/sofocos-a-los-40',
    description: 'Pueden aparecer en perimenopausia.',
  },
  {
    title: '¿Es normal despertarse por la noche?',
    href: '/es-normal/despertarse-por-la-noche-menopausia',
    description: 'Sueño fragmentado en la transición.',
  },
  {
    title: '¿Es normal que cambie la duración de la regla?',
    href: '/es-normal/cambios-duracion-regla',
    description: 'Fluctuaciones según la etapa.',
  },
  {
    title: '¿Es normal tener sangrado abundante?',
    href: '/es-normal/sangrado-abundante',
    description: 'Cuándo merece consulta.',
  },
]

export default function EsNormalPage() {
  return (
    <HubLayout
      eyebrow="Información útil"
      title="¿Es normal?"
      intro="Respuestas sencillas para dudas habituales. Elige una pregunta para ver la respuesta completa, qué observar y cuándo consultar."
      items={items}
      breadcrumbLabel="¿Es normal?"
      relatedTools={[
        { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
      ]}
      relatedArticles={[
        { title: 'Cambios en la menstruación en perimenopausia', href: '/perimenopausia/cambios-menstruacion' },
        { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar' },
        { title: 'Glosario de salud femenina', href: '/glosario' },
      ]}
    />
  )
}
