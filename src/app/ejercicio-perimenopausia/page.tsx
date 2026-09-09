import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio en la perimenopausia',
  description: 'Guía práctica sobre ejercicio, fuerza, sueño y bienestar durante la perimenopausia.',
  alternates: { canonical: '/ejercicio-perimenopausia' },
}

export default function EjercicioPerimenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Ejercicio en la perimenopausia' }]}
      eyebrow="Movimiento y transición"
      title="Ejercicio en la perimenopausia"
      intro="Durante la perimenopausia, la actividad física puede ayudar a mejorar la fuerza, la energía, la salud ósea y la calidad del sueño. Aun así, la mejor rutina es la que se adapta a la persona y a su momento actual."
      sections={[
        {
          title: 'Qué suele funcionar bien',
          body: 'La combinación de fuerza, cardio suave y movilidad suele ser una base útil para mantener el cuerpo activo y apoyar el bienestar general. Se trata más de constancia que de intensidad máxima.',
          list: ['Entrenamiento de fuerza', 'Cardio ligero o moderado', 'Movilidad y recuperación'],
        },
        {
          title: 'Qué observar',
          body: 'Es útil tener en cuenta la energía, el sueño, los sofocos y la tolerancia al esfuerzo. Si una rutina provoca fatiga intensa o empeora la calidad del descanso, puede ser buena idea ajustarla.',
          list: ['Energía y sueño', 'Tolerancia al esfuerzo', 'Aparición de síntomas'],
        },
        {
          title: 'Cuándo buscar apoyo',
          body: 'Si hay dolor persistente, mareos o dudas sobre cómo adaptar el ejercicio a una etapa concreta, la valoración profesional puede ayudar a diseñar una planificación útil y segura.',
          list: ['Dolor o mareo', 'Necesidad de una orientación individual', 'Dudas sobre intensidad y recuperación'],
        },
      ]}
      cta={{ label: 'Ver guía de perimenopausia', href: '/perimenopausia' }}
    />
  )
}
