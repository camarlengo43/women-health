import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Cambios de humor en perimenopausia',
  description:
    'Irritabilidad, altibajos o ansiedad en perimenopausia: qué puede influir, qué observar y cuándo pedir apoyo profesional.',
  path: '/perimenopausia/cambios-humor',
  type: 'article',
})

export default function CambiosHumorPage() {
  return (
    <InfoPageTemplate
      canonical="/perimenopausia/cambios-humor"
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Cambios de humor' }]}
      eyebrow="Bienestar emocional"
      title="Cambios de humor en perimenopausia"
      intro="Los cambios hormonales, el mal descanso y el estrés acumulado pueden influir en el estado de ánimo. Sentir irritabilidad o altibajos en esta etapa es frecuente y merece comprensión, no culpa."
      sections={[
        {
          title: 'Qué puede influir',
          body: 'La fluctuación hormonal, el sueño fragmentado por sofocos o sudores nocturnos, y la carga vital de esta etapa pueden combinarse y afectar al ánimo, la paciencia y la concentración.',
          list: ['Fluctuaciones hormonales', 'Sueño interrumpido', 'Estrés y cansancio acumulado'],
        },
        {
          title: 'Qué puede ayudar',
          body: 'Mantener horarios regulares de sueño, movimiento diario moderado, exposición a luz natural y espacios de descanso puede apoyar el bienestar. No se trata de exigirse más, sino de cuidarse mejor.',
          list: ['Rutina de sueño estable', 'Movimiento regular y fuerza', 'Pausas y apoyo social'],
        },
        {
          title: 'Cuándo pedir apoyo',
          body: 'Si la tristeza, la ansiedad o la irritabilidad son intensas, persisten semanas o interfieren con tu vida, busca apoyo profesional. Pedir ayuda es una decisión de cuidado, no de debilidad.',
          list: ['Ánimo bajo persistente', 'Ansiedad que interfiere', 'Dificultad para el día a día'],
        },
      ]}
      cta={{ label: 'Ver ejercicio recomendado', href: '/perimenopausia/ejercicio' }}
    />
  )
}
