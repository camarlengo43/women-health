import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio en la menopausia',
  description: 'Guía orientativa sobre ejercicio, fuerza y bienestar durante la menopausia.',
  alternates: { canonical: '/ejercicio-menopausia' },
}

export default function EjercicioMenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Ejercicio en la menopausia' }]}
      eyebrow="Movimiento y salud"
      title="Ejercicio en la menopausia"
      intro="La menopausia no implica reducir la actividad física; al contrario, para muchas personas el ejercicio sigue siendo un apoyo muy útil para mantener fuerza, movilidad y calidad de vida."
      sections={[
        {
          title: 'Cuáles pueden ser los objetivos',
          body: 'Con frecuencia se prioriza mantener la masa muscular, apoyar la salud ósea, mejorar el equilibrio y favorecer la energía. La actividad física puede ser especialmente útil cuando el cuerpo cambia de forma más gradual.',
          list: ['Fuerza y salud ósea', 'Equilibrio y movilidad', 'Energía y bienestar'],
        },
        {
          title: 'Qué suele funcionar bien',
          body: 'La combinación de entrenamiento de fuerza, movimiento cardiovascular ligero y movilidad suele ser una base sólida. La intensidad debe adaptarse a la persona y a su nivel de recuperación.',
          list: ['Fuerza regular', 'Cardio moderado', 'Movilidad y recuperación'],
        },
        {
          title: 'Cuándo buscar orientación',
          body: 'Si existe dolor persistente, cambios importantes en la tolerancia al esfuerzo o necesidad de adaptar la práctica a una situación concreta, la valoración profesional puede aportar una guía más segura.',
          list: ['Dolor persistente', 'Mareo o fatiga intensa', 'Objetivos específicos o limitaciones'],
        },
      ]}
      cta={{ label: 'Ver guía de movimiento', href: '/movimiento' }}
    />
  )
}
