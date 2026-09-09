import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: '¿Es normal tener sofocos a los 40?',
  description: 'Los sofocos a los 40 pueden ser una señal frecuente de la perimenopausia y los cambios hormonales asociados.',
  alternates: { canonical: '/es-normal/sofocos-a-los-40' },
}

export default function SofocosPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Sofocos a los 40' }]}
      eyebrow="Duda frecuente"
      title="¿Es normal tener sofocos a los 40?"
      intro="Sí, puede ser normal. Muchos cambios hormonales de la perimenopausia se manifiestan con sofocos, sensación de calor, sudores nocturnos y cambios en la temperatura corporal."
      sections={[
        {
          title: 'Qué puede estar ocurriendo',
          body: 'Durante la perimenopausia, la regulación hormonal se vuelve más inestable y puede generar episodios de calor intenso, especialmente durante la noche o tras un esfuerzo. Si aparecen juntos con ciclos irregulares o cambios de sueño, pueden ser compatibles con esta etapa.',
          list: ['Cambios hormonales', 'Aumento de la sensibilidad corporal', 'Aparición en perimenopausia'],
        },
        {
          title: 'Qué observar',
          body: 'Es útil registrar cuándo aparecen, si se producen por la noche, si van acompañados de sudor o si coinciden con otros síntomas del ciclo. La información ayuda a valorar si son frecuentes y si merece la pena hablar con un profesional.',
          list: ['Frecuencia', 'Hora del día', 'Intensidad y molestias asociadas'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los sofocos son frecuentes, molestan mucho o tienen un impacto importante en la calidad del sueño o en la vida diaria, merece la pena valorar la situación con un profesional sanitario.',
          list: ['Interfieren con el sueño', 'Aparecen muy intensos', 'Acompañan a otros cambios relevantes'],
        },
      ]}
      cta={{ label: 'Ver síntomas de perimenopausia', href: '/perimenopausia/sintomas' }}
    />
  )
}
