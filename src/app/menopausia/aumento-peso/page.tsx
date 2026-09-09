import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Aumento de peso y menopausia',
  description: 'Qué puede explicar un cambio en el peso durante la menopausia y cómo entenderlo con claridad.',
  alternates: { canonical: '/menopausia/aumento-peso' },
}

export default function MenopausiaAumentoPesoPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Aumento de peso' }]}
      eyebrow="Cambios metabólicos"
      title="Aumento de peso y menopausia"
      intro="El aumento de peso o los cambios en la distribución del tejido corporal pueden aparecer con más frecuencia durante la menopausia. Esto no depende solo del peso, sino también del metabolismo, el sueño, el estrés y los cambios hormonales."
      sections={[
        {
          title: 'Qué puede influir',
          body: 'Las fluctuaciones hormonales, la reducción de la actividad física o los cambios de sueño pueden influir en la sensación de aumento de peso. La distribución corporal también puede cambiar sin que se trate de un problema aislado.',
          list: ['Cambios hormonales', 'Sueño y estrés', 'Metabolismo y hábitos'],
        },
        {
          title: 'Qué ayuda',
          body: 'La estrategia más útil suele ser la sostenibilidad: una dieta con sentido, movimiento constante y un enfoque en el bienestar general. El foco no debe estar solo en el número del peso.',
          list: ['Hábitos sostenibles', 'Movimiento regular', 'Bienestar general'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el cambio de peso es brusco, te afecta mucho físicamente o sospechas de otras causas, una valoración profesional puede aportar orientación y no dejarlo como una simple casualidad.',
          list: ['Cambio brusco', 'Impacto en la salud', 'Dudas concretas'],
        },
      ]}
      cta={{ label: 'Ver salud cardiovascular', href: '/menopausia/salud-cardiovascular' }}
    />
  )
}
