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
    description: 'También puede variar con la edad, el estrés y los cambios hormonales.',
    href: '/es-normal/ciclos-irregulares',
  },
  {
    title: '¿Es normal tener sofocos a los 40?',
    description: 'Los sofocos pueden aparecer durante la perimenopausia y suelen asociarse a cambios hormonales.',
    href: '/es-normal/sofocos-a-los-40',
  },
  {
    title: '¿Es normal despertarse por la noche?',
    description: 'El sueño fragmentado es frecuente en la transición menopáusica y puede tener varias causas.',
    href: '/es-normal/despertarse-por-la-noche-menopausia',
  },
  {
    title: '¿Es normal que cambie la duración de la regla?',
    description: 'Sí; las fluctuaciones en la duración y la regularidad pueden ser habituales según la etapa.',
    href: '/es-normal/regla-cada-24-dias',
  },
]

export default function EsNormalPage() {
  return (
    <HubLayout
      eyebrow="Información útil"
      title="¿Es normal?"
      intro="Respuestas sencillas para dudas habituales sobre el ciclo, la perimenopausia, la menopausia y la salud femenina."
      items={items}
      breadcrumbLabel="¿Es normal?"
    />
  )
}
