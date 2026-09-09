import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Movilidad y bienestar',
  description: 'Qué aporta la movilidad para la postura, la flexibilidad y la sensación corporal en distintos momentos de la vida.',
  path: '/movimiento/movilidad',
  type: 'article',
})

export default function MovimientoMovilidadPage() {
  return (
    <InfoPageTemplate
      canonical="/movimiento/movilidad"
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Movilidad' }]}
      eyebrow="Bienestar funcional"
      title="Movilidad y bienestar"
      intro="La movilidad no tiene que significar una práctica compleja ni exigente. A menudo, trabaja sobre la capacidad de mover el cuerpo con comodidad, reducir la rigidez y mejorar la sensación general de bienestar."
      sections={[
        {
          title: 'Qué aporta',
          body: 'La movilidad puede favorecer la postura, la respiración, la comodidad en el movimiento y la sensación corporal. Es especialmente útil para quien pasa mucho tiempo sentada o con rutinas que no incluyen estiramientos o trabajo de amplitud.',
          list: ['Mejora de la postura', 'Menos rigidez', 'Más comodidad en el día a día'],
        },
        {
          title: 'Cómo integrarla',
          body: 'La movilidad suele combinarse muy bien con fuerza y cardio. Se puede realizar en momentos cortos del día o como parte de la rutina, sin necesidad de dedicar horas al entrenamiento.',
          list: ['Rutinas cortas', 'Sesiones suaves y sostenibles', 'Adaptación a cada nivel'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay dolor persistente, limitación importante de movilidad o sensación de rigidez con impacto funcional, una valoración profesional puede ayudar a orientar la práctica y evitar sobrecargas.',
          list: ['Dolor persistente', 'Limitación funcional', 'Duden sobre la intensidad'],
        },
      ]}
      cta={{ label: 'Volver a movimiento', href: '/movimiento' }}
    />
  )
}
