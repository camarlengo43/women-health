import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Fuerza y salud femenina',
  description: 'Descubre cómo la fuerza puede apoyar la salud ósea, la movilidad y el bienestar durante distintas etapas de la vida.',
  alternates: { canonical: '/movimiento/fuerza' },
}

export default function MovimientoFuerzaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Fuerza' }]}
      eyebrow="Ejercicio funcional"
      title="Fuerza y salud femenina"
      intro="El entrenamiento de fuerza puede ser muy útil para mantener masa muscular, mejorar la movilidad y apoyar la densidad ósea. No requiere ser intenso ni extremo para aportar beneficios a la salud general."
      sections={[
        {
          title: 'Qué aporta',
          body: 'La fuerza ayuda a mantener el cuerpo funcional, favorece la independencia, la postura y la capacidad de realizar tareas cotidianas con mayor facilidad. También puede ser una herramienta útil para la salud ósea y la prevención del desgaste muscular.',
          list: ['Apoyo a la masa muscular', 'Mejora de la postura', 'Apoyo a la salud ósea'],
        },
        {
          title: 'Cómo aplicarlo',
          body: 'Una guía bien estructurada suele combinar fuerza, movilidad y recuperación. La progresión es más importante que la intensidad máxima, y la constancia suele aportar mejores resultados que entrenamientos muy exigentes y poco sostenibles.',
          list: ['Entrenamiento progresivo', 'Ejercicios funcionales', 'Recuperación suficiente'],
        },
        {
          title: 'Cuándo valorar apoyo profesional',
          body: 'Si hay dolor persistente, limitación importante en la movilidad o si se quiere un enfoque adaptado a una etapa concreta, un profesional puede ayudar a diseñar un plan seguro y útil.',
          list: ['Dolor persistente', 'Necesidad de adaptación individual', 'Objetivos concretos de fuerza'],
        },
      ]}
      cta={{ label: 'Ver más sobre movimiento', href: '/movimiento' }}
    />
  )
}
