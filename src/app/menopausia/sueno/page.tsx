import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Sueño y menopausia',
  description: 'Cómo puede afectar la menopausia al sueño y qué señales pueden ser útiles observar.',
  alternates: { canonical: '/menopausia/sueno' },
}

export default function MenopausiaSuenoPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Sueño' }]}
      eyebrow="Descanso y salud"
      title="Sueño y menopausia"
      intro="El sueño puede alterarse durante la menopausia por cambios hormonales, sofocos, ansiedad o estrés. Cuando el descanso se vuelve irregular, puede influir también en la energía y el estado de ánimo."
      sections={[
        {
          title: 'Qué suele aparecer',
          body: 'Es frecuente despertarse varias veces durante la noche, dormir más ligero o sentir que el descanso no es reparador. Esto puede empeorar con los sofocos o la ansiedad.',
          list: ['Despertares durante la noche', 'Sueño menos reparador', 'Más cansancio durante el día'],
        },
        {
          title: 'Qué ayuda',
          body: 'Un entorno más fresco, rutinas consistentes y atención al sueño pueden ayudar. Aunque no resuelven todo, pequeños cambios de hábitos suelen ser útiles.',
          list: ['Dormir en ambiente fresco', 'Rutina de descanso', 'Reducir el estrés antes de dormir'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el sueño se vuelve muy perjudicial para la vida diaria o si hay signos además de la menopausia, puede ser útil valorarlo con un profesional sanitario.',
          list: ['Insomnio frecuente', 'Síntomas muy molestos', 'Deterioro del bienestar'],
        },
      ]}
      cta={{ label: 'Ver guía de perimenopausia', href: '/perimenopausia/insomnio' }}
    />
  )
}
