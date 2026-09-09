import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Adolescencia y primeros ciclos',
  description:
    'Primeros ciclos irregulares, dolor menstrual y señales que merecen consulta en la adolescencia. Información clara y orientativa.',
  path: '/etapas/adolescencia',
  type: 'article',
})

export default function AdolescenciaPage() {
  return (
    <InfoPageTemplate
      canonical="/etapas/adolescencia"
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Adolescencia' }]}
      eyebrow="Etapa de la vida"
      title="Adolescencia y primeros ciclos"
      intro="Los primeros años de menstruación suelen tener ciclos irregulares mientras el sistema hormonal madura. Entender qué es habitual y qué merece consulta ayuda a vivir esta etapa con más tranquilidad."
      sections={[
        {
          title: 'Qué es habitual al principio',
          body: 'Durante los primeros 2-3 años es frecuente que los ciclos sean irregulares en duración y cantidad, y que haya manchados ocasionales. El cuerpo está ajustando su ritmo.',
          list: ['Ciclos de duración variable', 'Cantidad variable', 'Manchados ocasionales'],
        },
        {
          title: 'Dolor menstrual',
          body: 'Un dolor leve que cede con calor, descanso o analgésicos habituales puede ser frecuente. Si el dolor es intenso, te impide ir a clase o empeora con el tiempo, merece valoración.',
          list: ['Dolor leve ocasional', 'Dolor intenso o incapacitante = consultar', 'Dolor que empeora = consultar'],
        },
        {
          title: 'Hábitos que ayudan',
          body: 'Anotar las fechas en un calendario, llevar protección de repuesto, dormir suficiente y moverse a diario ayuda a conocer el propio patrón.',
          list: ['Calendario de ciclos', 'Protección de repuesto', 'Sueño y movimiento'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si no hay menstruación a partir de los 15-16 años, si hay ausencias muy prolongadas, sangrado muy abundante o dolor intenso, una valoración profesional orienta con tranquilidad.',
          list: ['Ausencias prolongadas', 'Sangrado muy abundante', 'Dolor intenso'],
        },
      ]}
      cta={{ label: 'Entender el ciclo', href: '/calculadora-ciclo-menstrual' }}
    />
  )
}
