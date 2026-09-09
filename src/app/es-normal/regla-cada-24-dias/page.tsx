import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: '¿Es normal que la regla venga cada 24 días?',
  description: 'Busca entender si una regla cada 24 días es normal, cómo puede variar y cuándo merece la pena revisarlo.',
  alternates: { canonical: '/es-normal/regla-cada-24-dias' },
}

export default function ReglaCada24DiasPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Regla cada 24 días' }]}
      eyebrow="Duda frecuente"
      title="¿Es normal que la regla venga cada 24 días?"
      intro="Un ciclo de 24 días no es raro. En la gente con ciclos regulares, la duración puede variar un poco, pero también puede ser indicativo de cambios hormonales, estrés, cambios de peso o incluso otros factores que vale la pena observar."
      sections={[
        {
          title: 'Respuesta rápida',
          body: 'Sí, puede ser totalmente normal, especialmente si se trata de una variación puntual de tu patrón habitual. Sin embargo, si el cambio es frecuente o se acompaña de otros síntomas, vale la pena valorar la situación con calma.',
          list: ['Ciclo corto pero estable', 'Variedad normal entre personas', 'Puede relacionarse con cambios hormonales'],
        },
        {
          title: 'Qué puede influir',
          body: 'La alimentación, el peso, la actividad física, el estrés, el sueño y la fase reproductiva pueden influir en la regularidad menstrual. En la perimenopausia, la variabilidad puede aumentarse con mayor frecuencia.',
          list: ['Estrés y sueño', 'Cambio de peso o ejercicio', 'Transición hormonal'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el ciclo se vuelve muy irregular, si el flujo es muy abundante o si aparecen otros síntomas intensos, una valoración profesional puede ayudarte a identificar si hay causas adicionales.',
          list: ['Ciclos muy cambiantes', 'Flujo muy abundante', 'Dolor intenso o síntomas persistentes'],
        },
      ]}
      cta={{ label: 'Ver cambios en la menstruación', href: '/perimenopausia/cambios-menstruacion' }}
    />
  )
}
