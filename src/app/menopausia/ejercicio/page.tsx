import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio en la menopausia',
  description: 'Cómo apoyar la fuerza, la salud ósea y el bienestar mediante ejercicio en la menopausia.',
  alternates: { canonical: '/menopausia/ejercicio' },
}

export default function MenopausiaEjercicioPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Ejercicio' }]}
      eyebrow="Movimiento y salud"
      title="Ejercicio en la menopausia"
      intro="El ejercicio puede seguir siendo un gran apoyo durante la menopausia para mantener la fuerza, la energía, la salud ósea y la calidad del movimiento. Lo más útil suele ser una práctica regular y adaptada a la persona."
      sections={[
        {
          title: 'Qué suele aportar',
          body: 'La fuerza, la calidad muscular, la movilidad y el bienestar general pueden mejorar con una rutina bien planteada. La actividad física sostenida suele ir mejor que las estrategias intensas y poco razonables.',
          list: ['Mejora de la fuerza', 'Apoyo a la salud ósea', 'Bienestar general'],
        },
        {
          title: 'Qué combinación funciona bien',
          body: 'En muchos casos, conviene combinar entrenamiento de fuerza, cardio ligero y movilidad. Eso ayuda a mantener la capacidad funcional sin imponer una carga excesiva.',
          list: ['Entrenamiento de fuerza', 'Cardio suave', 'Movilidad y equilibrio'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si aparecen síntomas persistentes, dolor o restricciones en el movimiento, puede ser útil hablar con un profesional para adaptar la rutina a la realidad de cada persona.',
          list: ['Dolor o fatiga persistente', 'Dificultad de movimiento', 'Dudas sobre intensidad'],
        },
      ]}
      cta={{ label: 'Ver fuerza y salud ósea', href: '/movimiento/fuerza' }}
    />
  )
}
