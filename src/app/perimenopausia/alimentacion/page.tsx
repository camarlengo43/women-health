import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Alimentación en perimenopausia',
  description:
    'Ideas realistas de alimentación en perimenopausia: proteína, fibra, calcio y hábitos flexibles sin dietas estrictas.',
  alternates: { canonical: '/perimenopausia/alimentacion' },
}

export default function AlimentacionPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Alimentación' }]}
      eyebrow="Hábitos"
      title="Alimentación en perimenopausia"
      intro="No necesitas una dieta estricta. Priorizar proteína, fibra, calcio y vitamina D, junto con horarios regulares y descanso, suele ser más útil y sostenible."
      sections={[
        {
          title: 'Qué priorizar',
          body: 'Incluir proteína en cada comida, verduras y legumbres, lácteos o alternativas con calcio, y grasas de calidad ayuda a mantener músculo, huesos y saciedad.',
          list: ['Proteína suficiente', 'Fibra y verduras', 'Calcio y vitamina D'],
        },
        {
          title: 'Hábitos realistas',
          body: 'Comer sin prisas, planificar compras sencillas, hidratarse y limitar alcohol puede mejorar energía y descanso sin prohibiciones rígidas.',
          list: ['Horarios regulares', 'Hidratación', 'Menos alcohol'],
        },
        {
          title: 'Cuándo pedir apoyo',
          body: 'Si hay cambios bruscos de peso, fatiga marcada, digestiones difíciles o relación complicada con la comida, busca acompañamiento profesional personalizado.',
          list: ['Cambio brusco', 'Fatiga persistente', 'Dudas nutricionales'],
        },
      ]}
      cta={{ label: 'Ver movimiento recomendado', href: '/perimenopausia/ejercicio' }}
    />
  )
}
