import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio y perimenopausia',
  description: 'Cómo usar el ejercicio para apoyar la energía, la salud ósea, el sueño y el bienestar durante la perimenopausia.',
  alternates: { canonical: '/perimenopausia/ejercicio' },
}

export default function PerimenopausiaEjercicioPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Ejercicio' }]}
      eyebrow="Movimiento y bienestar"
      title="Ejercicio y perimenopausia"
      intro="El ejercicio puede ser un apoyo útil durante la perimenopausia, especialmente para mantener la fuerza, la salud ósea, la energía y la calidad del sueño. La clave está en elegir un enfoque realista y sostenible."
      sections={[
        {
          title: 'Qué puede aportar',
          body: 'La actividad física regular ayuda a mantener masa muscular, mejorar el equilibrio, apoyar el estado de ánimo y favorecer la sensibilidad a la insulina. También puede contribuir a combatir la sensación de cansancio y a mejorar la calidad de vida.',
          list: ['Apoyo a fuerza y masa muscular', 'Mejora del sueño y la energía', 'Ayuda general a la salud ósea'],
        },
        {
          title: 'Cómo empezar de forma segura',
          body: 'Una combinación de fuerza, movilidad y cardio suave suele ser una base útil. Lo importante es adaptar la intensidad a como se sienta la persona, evitar el exceso y mantener una combinación constante.',
          list: ['Fuerza 2-3 veces por semana', 'Cardio ligero o moderado', 'Movilidad y recuperación'],
        },
        {
          title: 'Cuando consultar',
          body: 'Si hay dolor intenso, un cambio brusco en la capacidad de ejercicio, mareos, síntomas inusuales o si se quiere una guía más personalizada, la valoración profesional puede aportar orientación.',
          list: ['Dolor persistente', 'Síntomas de fatiga o mareo', 'Consulta con un profesional si hay dudas'],
        },
      ]}
      cta={{ label: 'Ir a movimiento y ejercicio', href: '/movimiento' }}
    />
  )
}
