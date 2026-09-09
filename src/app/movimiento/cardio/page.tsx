import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Cardio y salud cardiovascular',
  description: 'Revisa cómo el cardio puede apoyar la salud cardiovascular, la energía y la resistencia en distintas etapas de la vida.',
  path: '/movimiento/cardio',
  type: 'article',
})

export default function MovimientoCardioPage() {
  return (
    <InfoPageTemplate
      canonical="/movimiento/cardio"
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Cardio' }]}
      eyebrow="Salud cardiovascular"
      title="Cardio y salud cardiovascular"
      intro="El cardio suele ser la base de la resistencia y la energía. En pequeñas dosis y con un enfoque sostenible, puede apoyar la salud del corazón, la respiración y el bienestar general."
      sections={[
        {
          title: 'Qué puede aportar',
          body: 'La actividad aeróbica regular puede mejorar la capacidad cardiopulmonar, favorecer la energía, apoyar la salud metabólica y contribuir a mantener un nivel de actividad útil en distintas etapas de la vida.',
          list: ['Aumento de resistencia', 'Apoyo cardiovascular', 'Mejora de la energía'],
        },
        {
          title: 'Cómo hacerlo sin sobrecargar',
          body: 'El cardio más útil suele ser el que se sostiene en el tiempo. Caminar, bicicletas suaves, ejercicio ligero o sesiones cortas pueden ser muy efectivos si se integran en una rutina realista.',
          list: ['Sesiones sostenibles', 'Intensidad adaptable', 'Variedad de modalidades'],
        },
        {
          title: 'Cuándo priorizar atención',
          body: 'Si aparecen mareos, dolor torácico, fatiga intensa o síntomas muy molestos durante el esfuerzo, es recomendable consultar con un profesional sanitario. La forma de entrenar siempre debe adaptarse al estado de salud actual.',
          list: ['Dolor o mareo durante el esfuerzo', 'Fatiga marcada', 'Dudas sobre la intensidad'],
        },
      ]}
      cta={{ label: 'Volver al hub de movimiento', href: '/movimiento' }}
    />
  )
}
