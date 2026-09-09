import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Fuerza en la menopausia',
  description: 'Cómo puede ayudar el entrenamiento de fuerza durante la menopausia.',
  alternates: { canonical: '/menopausia/fuerza' },
}

export default function MenopausiaFuerzaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Fuerza' }]}
      eyebrow="Movimiento funcional"
      title="Fuerza en la menopausia"
      intro="Mantener la fuerza muscular suele ser una estrategia muy útil durante la menopausia, porque ayuda a preservar la movilidad, la autonomía y la salud general a lo largo del tiempo."
      sections={[
        {
          title: 'Qué aporta',
          body: 'La fuerza muscular ayuda a mantener la capacidad funcional, la postura y la calidad de vida. También guarda relación con la salud ósea y con la sensación general de energía.',
          list: ['Más autonomía', 'Apoyo a huesos y músculos', 'Mejor sensación general'],
        },
        {
          title: 'Cómo realizarlo',
          body: 'El enfoque más útil suele ser progresivo y suave. Una rutina con varias sesiones a la semana y ejercicios funcionales puede ofrecer beneficios duraderos.',
          list: ['Progressive overload', 'Ejercicios funcionales', 'Recuperación adecuada'],
        },
        {
          title: 'Cuándo consultarlo',
          body: 'Si hay dolor intenso, fatiga marcada o motivaciones de salud muy concretas, es recomendable buscar orientación profesional para adaptar la práctica.',
          list: ['Dolor persistente', 'Objetivos específicos', 'Dudas sobre intensidad'],
        },
      ]}
      cta={{ label: 'Ver rutina de fuerza', href: '/movimiento/rutina-fuerza-menopausia' }}
    />
  )
}
