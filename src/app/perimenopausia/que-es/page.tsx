import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Qué es la perimenopausia',
  description: 'Descubre qué es la perimenopausia, cómo se manifiesta y qué cambios hormonales pueden aparecer antes de la menopausia.',
  alternates: { canonical: '/perimenopausia/que-es' },
}

export default function PerimenopausiaQueEsPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Qué es' }]}
      eyebrow="Etapa de transición"
      title="Qué es la perimenopausia"
      intro="La perimenopausia es el periodo que precede a la menopausia y suele durar varios años. Durante esta etapa, el cuerpo se va adaptando a cambios hormonales progresivos que pueden afectar el ciclo, el sueño, los sofocos y el bienestar general."
      sections={[
        {
          title: 'Qué significa',
          body: 'La perimenopausia no es una enfermedad ni un diagnóstico único. Se trata de una etapa natural del envejecimiento reproductivo, en la que los ovarios empiezan a producir menos estrógeno y progesterona de forma más irregular.',
          list: ['Se produce gradualmente', 'A menudo empieza a los 40 o 50 años', 'El ciclo puede volverse más irregular'],
        },
        {
          title: 'Qué cambios suelen aparecer',
          body: 'Muchas personas notan variaciones en la regularidad de la menstruación, más cambios de humor, sueño más fragmentado, sofocos y cambios de energía. No todas las personas experimentan los mismos síntomas ni con la misma intensidad.',
          list: ['Menstruaciones más irregulares', 'Sofocos y sudores nocturnos', 'Cambios de sueño o estado de ánimo'],
        },
        {
          title: 'Cuándo puede valer la pena consultar',
          body: 'Si hay sangrados muy abundantes, dolor intenso, cambios bruscos de humor o síntomas que interfieren con tu calidad de vida, merece la pena hablar con un profesional sanitario. La revisión puede ayudar a descartar otras causas y proponer un plan útil y seguro.',
          list: ['Sangrado muy abundante', 'Síntomas persistentes o intensos', 'Dudas sobre su evolución'],
        },
      ]}
      cta={{ label: 'Ver síntomas frecuentes', href: '/perimenopausia/sintomas' }}
    />
  )
}
