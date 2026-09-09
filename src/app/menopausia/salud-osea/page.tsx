import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Salud ósea en la menopausia',
  description: 'Qué papel juega la salud ósea durante la menopausia y cómo puede apoyar el ejercicio y la prevención.',
  alternates: { canonical: '/menopausia/salud-osea' },
}

export default function MenopausiaSaludOseaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Salud ósea' }]}
      eyebrow="Huesos y fuerza"
      title="Salud ósea en la menopausia"
      intro="El paso a la menopausia puede coincidir con cambios en la densidad ósea debido a la reducción de ciertos estrógenos. Por ello, la salud ósea pasa a ser una prioridad relevante para mantener la calidad de vida."
      sections={[
        {
          title: 'Qué es importante',
          body: 'La fuerza, el movimiento y la nutrición se relacionan con la salud ósea. Mantener una rutina útil y prestar atención a la carga y la recuperación pueden apoyar este proceso.',
          list: ['Fuerza muscular', 'Movimiento regular', 'Nutrición y hábitos'],
        },
        {
          title: 'Qué puede ayudar',
          body: 'Elementos como fuerza, actividad física sostenible y seguimiento profesional pueden aportar orientación. La clave es el enfoque gradual y consistente.',
          list: ['Entrenamiento de fuerza', 'Movilidad y equilibrio', 'Atención a la salud general'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay fracturas previas, dolor óseo persistente o dudas sobre densidad mineral ósea, un profesional sanitario puede orientar la evaluación.',
          list: ['Fracturas previas', 'Dolor óseo persistente', 'Dudas sobre prevención'],
        },
      ]}
      cta={{ label: 'Ver ejercicio en la menopausia', href: '/ejercicio-menopausia' }}
    />
  )
}
