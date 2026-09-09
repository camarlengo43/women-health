import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Rutina de fuerza para la menopausia',
  description: 'Propuesta orientativa de fuerza para la menopausia, pensada para apoyar fuerza, salud ósea y bienestar.',
  alternates: { canonical: '/rutina-fuerza-menopausia' },
}

export default function RutinaFuerzaMenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Rutina de fuerza' }]}
      eyebrow="Plan de apoyo"
      title="Rutina de fuerza para la menopausia"
      intro="Una rutina de fuerza bien pensada puede aportar beneficios al cuerpo y a la sensación general de bienestar. La idea no es hacer mucho, sino mantener la práctica constante y adaptar la intensidad a la persona."
      sections={[
        {
          title: 'Base recomendada',
          body: 'Muchas personas encuentran útil entrenar fuerza dos o tres días por semana, combinándolo con cardio suave y movilidad. La clave está en elegir ejercicios que resulten sostenibles en el tiempo y que permitan progresar sin excesiva fatiga.',
          list: ['2-3 sesiones de fuerza a la semana', 'Entrenamiento progresivo', 'Recuperación como parte del plan'],
        },
        {
          title: 'Ejemplos de enfoque',
          body: 'La rutina puede incluir sentadillas, peso muerto, empuje de peso corporal, remos con bandas o ejercicios de estabilidad. El objetivo es trabajar la fuerza funcional y la movilidad en conjunto.',
          list: ['Sentadilla o variante segura', 'Peso muerto o elevación de glúteos', 'Estabilidad y postura'],
        },
        {
          title: 'Cuando adaptar o consultar',
          body: 'Si hay dolor persistente, limitación importante o si se quiere un plan más individualizado, un profesional puede ayudar a ajustar la carga, la forma y la frecuencia.',
          list: ['Dolor o molestias persistentes', 'Necesidad de adaptación individual', 'Dudas sobre progresión'],
        },
      ]}
      cta={{ label: 'Volver a movimiento', href: '/movimiento' }}
    />
  )
}
