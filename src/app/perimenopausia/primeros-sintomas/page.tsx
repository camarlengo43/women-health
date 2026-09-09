import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Primeros síntomas de la perimenopausia',
  description: 'Conoce los primeros signos de la perimenopausia: ciclos irregulares, sofocos, sueño, cambios de humor y más.',
  alternates: { canonical: '/perimenopausia/primeros-sintomas' },
}

export default function PerimenopausiaPrimerosSintomasPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Primeros síntomas' }]}
      eyebrow="Detección temprana"
      title="Primeros síntomas de la perimenopausia"
      intro="Los primeros cambios suelen ser sutiles y pueden pasar desapercibidos. Muchas personas notan que el ciclo se vuelve menos predecible, el sueño se altera o aparecen sofocos y cambios de humor de forma gradual."
      sections={[
        {
          title: 'Qué suele cambiar primero',
          body: 'En la perimenopausia, el ovario empieza a producir hormonas con mayor irregularidad. Eso puede alterarse la frecuencia de la regla, la intensidad de los síntomas y la sensación general de bienestar.',
          list: ['Cambios en la regularidad menstrual', 'Sofocos o sensación de calor repentino', 'Sueño más ligero o más fragmentado'],
        },
        {
          title: 'Qué puedes observar en la rutina',
          body: 'Puede aparecer más cansancio, cambios en la tolerancia al ejercicio o un aumento de la sensibilidad emocional. No es necesario que todas las personas tengan los mismos síntomas ni con la misma intensidad.',
          list: ['Más irritabilidad o cambios de ánimo', 'Cambios en la libido', 'Más cansancio o sensación de fatiga'],
        },
        {
          title: 'Cuándo merece la pena consultar',
          body: 'Si los cambios empiezan a afectar mucho la calidad de vida o si los sangrados son abundantes, muy frecuentes o acompañados de dolor intenso, tiene sentido hablar con un profesional sanitario para descartar otras causas.',
          list: ['Sangrado abundante o muy prolongado', 'Síntomas persistentes y molestos', 'Dificultad para dormir o realizar la vida diaria'],
        },
      ]}
      cta={{ label: 'Ver síntomas de la perimenopausia', href: '/perimenopausia/sintomas' }}
    />
  )
}
