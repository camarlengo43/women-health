import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Suelo pélvico',
  description:
    'Qué es el suelo pélvico, por qué importa en cada etapa y hábitos básicos de cuidado. Información orientativa y práctica.',
  path: '/movimiento/suelo-pelvico',
  type: 'article',
})

export default function SueloPelvicoPage() {
  return (
    <InfoPageTemplate
      canonical="/movimiento/suelo-pelvico"
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Suelo pélvico' }]}
      eyebrow="Movimiento"
      title="Suelo pélvico"
      intro="El suelo pélvico sostiene órganos, participa en la continencia y en la función sexual. Cuidarlo con hábitos y movimiento adaptado es útil en embarazo, posparto, perimenopausia y más allá."
      sections={[
        {
          title: 'Qué es',
          body: 'Es un conjunto de músculos y tejidos en la base de la pelvis. Su tono, fuerza y coordinación influyen en el día a día más de lo que solemos pensar.',
          list: ['Sostén y continencia', 'Coordinación con respiración', 'Relación con postura'],
        },
        {
          title: 'Hábitos de cuidado',
          body: 'Evitar empujar en exceso al ir al baño, variar posturas, fortalecer de forma progresiva y respirar sin bloquear puede ayudar. La fuerza general y la movilidad también cuentan.',
          list: ['No empujar en exceso', 'Movimiento variado', 'Progresión suave'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay pérdidas de orina, sensación de peso, dolor pélvico o molestias persistentes, una valoración de fisioterapia de suelo pélvico puede orientar de forma personalizada.',
          list: ['Pérdidas o urgencia', 'Sensación de peso', 'Dolor persistente'],
        },
      ]}
      cta={{ label: 'Generar una rutina adaptada', href: '/generador-rutinas' }}
    />
  )
}
