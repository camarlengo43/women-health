import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Síntomas de la menopausia',
  description: 'Qué síntomas pueden aparecer en la menopausia y cómo entenderlos con más claridad.',
  alternates: { canonical: '/menopausia/sintomas' },
}

export default function MenopausiaSintomasPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Síntomas' }]}
      eyebrow="Qué puede aparecer"
      title="Síntomas de la menopausia"
      intro="La menopausia puede acompañarse de cambios físicos y emocionales muy distintos entre personas. Algunos síntomas son frecuentes; otros aparecen solo en algunos casos o con distinta intensidad."
      sections={[
        {
          title: 'Síntomas frecuentes',
          body: 'Los sofocos, alteraciones del sueño, cambios de humor, sequedad vaginal y cambios de energía pueden ser más habituales en este periodo. No todas las personas los tienen ni con la misma frecuencia.',
          list: ['Sofocos y sudores nocturnos', 'Cambios de sueño', 'Cambios de ánimo y energía'],
        },
        {
          title: 'Qué influye',
          body: 'Los cambios hormonales, el estrés, la calidad del sueño, la actividad física y la salud general pueden influir en la intensidad y la frecuencia de los síntomas.',
          list: ['Estrés y sueño', 'Actividad física', 'Salud general y hábitos'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los síntomas afectan mucho a la calidad de vida o si hay dudas específicas sobre la salud ósea, la menstruación o la salud cardiovascular, puede valer la pena hablar con un profesional sanitario.',
          list: ['Síntomas intensos o persistentes', 'Cambios importantes en el sueño', 'Dudas sobre salud ósea o cardiovascular'],
        },
      ]}
      cta={{ label: 'Ver sofocos y sueño', href: '/menopausia/sofocos' }}
    />
  )
}
