import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Síntomas de la perimenopausia',
  description: 'Conoce los síntomas más habituales de la perimenopausia: sofocos, sueño, cambios de humor, ciclos irregulares y más.',
  alternates: { canonical: '/perimenopausia/sintomas' },
}

export default function PerimenopausiaSintomasPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Síntomas' }]}
      eyebrow="Qué puedes notar"
      title="Síntomas de la perimenopausia"
      intro="Los síntomas de la perimenopausia pueden aparecer de forma gradual y variar mucho entre personas. Algunos son muy habituales, otros son menos frecuentes y muchos pueden tener causas que no están relacionadas con esta etapa."
      sections={[
        {
          title: 'Síntomas más frecuentes',
          body: 'Los cambios hormonales pueden acompañarse de sofocos, sudores nocturnos, cambios en el ciclo menstrual, insomnio y cambios de humor. También pueden aparecer sequedad vaginal, cambios en la libido o sensación de más cansancio.',
          list: ['Sofocos y calor repentino', 'Cambios en la regularidad menstrual', 'Sueño más fragmentado', 'Irritabilidad o cambios de ánimo'],
        },
        {
          title: 'Qué puede ayudar a identificar un patrón',
          body: 'Anotar cuándo aparecen los síntomas y si coinciden con cambios en el ciclo puede resultar útil para entender mejor lo que ocurre. Aun así, si los síntomas son intensos o duran demasiado, una valoración médica puede aportar claridad.',
          list: ['Registrar intensidad y frecuencia', 'Observar si coinciden con la regla', 'Tener en cuenta estrés, sueño y hábitos'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los síntomas afectan mucho a tu calidad de vida o si tienes sangrados abundantes o muy frecuentes, conviene valorar si hay causas adicionales. La prioridad es entender tu caso con rigor y no asumir que todo es solo perimenopausia.',
          list: ['Sangrado muy abundante', 'Dolor intenso', 'Síntomas funcionales persistentes'],
        },
      ]}
      cta={{ label: 'Conoce los cambios hormonales', href: '/perimenopausia/que-es' }}
    />
  )
}
