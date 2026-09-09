import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Sofocos durante la menopausia',
  description: 'Qué son los sofocos durante la menopausia y qué factores pueden influir en su intensidad.',
  alternates: { canonical: '/menopausia/sofocos' },
}

export default function MenopausiaSofocosPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Sofocos' }]}
      eyebrow="Síntomas frecuentes"
      title="Sofocos durante la menopausia"
      intro="Los sofocos pueden continuar durante la menopausia o aparecer con mayor frecuencia. Se describen como calor repentino, enrojecimiento y sensación de malestar que pueden producirse en distintos momentos del día."
      sections={[
        {
          title: 'Qué son',
          body: 'Los cambios hormonales pueden alterar la regulación térmica del cuerpo. Eso puede producir episodios de calor intenso, a veces acompañados de sudoración y sensación de incomodidad.',
          list: ['Calor repentino', 'Sudoración', 'Mayores molestias durante la noche'],
        },
        {
          title: 'Qué puede influir',
          body: 'El estrés, la temperatura ambiental, el consumo de alcohol o ciertos alimentos y bebidas pueden aumentar la intensidad o la frecuencia de los sofocos en algunas personas.',
          list: ['Estrés y cansancio', 'Ambiente cálido', 'Alimentos o bebidas calientes'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los sofocos son intensos, interrumpen el sueño o afectan mucho a la calidad de vida, puede ser útil hablar con un profesional para valorar opciones de apoyo y descartar causes adicionales.',
          list: ['Sueño muy alterado', 'Impacto en la vida diaria', 'Dudas sobre manejo'],
        },
      ]}
      cta={{ label: 'Ver sueño y menopausia', href: '/menopausia/sueno' }}
    />
  )
}
