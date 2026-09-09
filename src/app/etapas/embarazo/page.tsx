import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Embarazo por trimestres',
  description:
    'Cambios por trimestres, seguimiento profesional y calculadoras orientativas de semanas y fecha de parto.',
  path: '/etapas/embarazo',
  type: 'article',
})

export default function EmbarazoEtapaPage() {
  return (
    <InfoPageTemplate
      canonical="/etapas/embarazo"
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Embarazo' }]}
      eyebrow="Etapa de la vida"
      title="Embarazo por trimestres"
      intro="El embarazo es una transformación profunda. Esta guía orienta por trimestres y con calculadoras estimativas, sin sustituir en ningún caso el seguimiento profesional."
      sections={[
        {
          title: 'Primer trimestre',
          body: 'Suelen aparecer cansancio, náuseas, sensibilidad mamaria y cambios de ánimo. Es el momento de iniciar el seguimiento y resolver dudas con el equipo sanitario.',
          list: ['Cansancio y náuseas', 'Inicio del seguimiento', 'Resolver dudas pronto'],
        },
        {
          title: 'Segundo trimestre',
          body: 'Muchas personas notan más energía. Aparecen cambios corporales visibles y movimientos del bebé. Siguen los controles programados.',
          list: ['Más energía habitual', 'Cambios corporales', 'Controles programados'],
        },
        {
          title: 'Tercer trimestre',
          body: 'Aumentan el peso, la presión pélvica y las interrupciones del sueño. Aparecen las señales de preparación al parto que conviene conocer.',
          list: ['Descanso fragmentado', 'Presión pélvica', 'Señales de parto'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Sangrado, dolor intenso, fiebre, ausencia de movimientos percibidos en etapas avanzadas o cualquier preocupación justifican contactar pronto con el equipo sanitario.',
          list: ['Sangrado o dolor intenso', 'Fiebre', 'Preocupación persistente'],
        },
      ]}
      cta={{ label: 'Calcular semanas de embarazo', href: '/calculadora-semanas-embarazo' }}
    />
  )
}
