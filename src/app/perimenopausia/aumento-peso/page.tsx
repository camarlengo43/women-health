import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Aumento de peso en perimenopausia',
  description:
    'Por qué puede cambiar el peso en perimenopausia y qué hábitos realistas ayudan: fuerza, movimiento, descanso y alimentación flexible.',
  alternates: { canonical: '/perimenopausia/aumento-peso' },
}

export default function AumentoPesoPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Aumento de peso' }]}
      eyebrow="Cambios corporales"
      title="Aumento de peso en perimenopausia"
      intro="Muchas personas notan cambios en el peso o en la distribución corporal en esta etapa. Suele relacionarse con cambios hormonales, menos masa muscular, descanso y hábitos, no con falta de voluntad."
      sections={[
        {
          title: 'Qué puede influir',
          body: 'La pérdida progresiva de masa muscular reduce el gasto energético, y el sueño fragmentado o el estrés pueden aumentar el apetito o los antojos. Los cambios son graduales y variables.',
          list: ['Menos masa muscular', 'Sueño y estrés', 'Cambios hormonales'],
        },
        {
          title: 'Qué hábitos ayudan',
          body: 'El entrenamiento de fuerza 2-3 veces por semana, caminar a diario, priorizar proteína y fibra, y dormir mejor suelen ser más útiles y sostenibles que dietas estrictas.',
          list: ['Fuerza regular', 'Movimiento diario', 'Descanso y alimentación flexible'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el cambio es brusco, hay mucha fatiga, o te preocupa tu salud metabólica u ósea, una valoración profesional puede orientar un plan personalizado y seguro.',
          list: ['Cambio brusco de peso', 'Fatiga marcada', 'Dudas sobre salud metabólica'],
        },
      ]}
      cta={{ label: 'Generar una rutina', href: '/generador-rutinas' }}
    />
  )
}
