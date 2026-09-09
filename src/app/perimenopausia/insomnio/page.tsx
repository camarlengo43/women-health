import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Insomnio y sueño en la perimenopausia',
  description: 'Entiende por qué puede aparecer el insomnio en la perimenopausia y qué factores suelen influir en el sueño.',
  path: '/perimenopausia/insomnio',
  type: 'article',
})

export default function InsomnioPage() {
  return (
    <InfoPageTemplate
      canonical="/perimenopausia/insomnio"
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Insomnio' }]}
      eyebrow="Sueño y bienestar"
      title="Insomnio y cambios de sueño"
      intro="El sueño puede volverse más ligero o fragmentado durante la perimenopausia. Esto no siempre se debe solo a una hormona, pero sí es un síntoma frecuente que merece atención si afecta al bienestar diario."
      sections={[
        {
          title: 'Qué suele ocurrir',
          body: 'Los cambios hormonales, los sofocos, el estrés y la ansiedad pueden alterar la calidad del descanso. Muchas personas reportan despertarse por la noche, tener más dificultades para conciliar el sueño o sentirse cansadas al día siguiente.',
          list: ['Despertares nocturnos', 'Sueño superficial', 'Más cansancio diurno'],
        },
        {
          title: 'Qué puede ayudar',
          body: 'Mantener hábitos regulares de sueño, cuidar la temperatura del dormitorio, limitar cafeína por la tarde y llevar un registro del descanso puede ayudar a detectar patrones. También tiene sentido revisar si hay otros factores que empeoran el sueño.',
          list: ['Rutina regular', 'Temperatura del dormitorio', 'Menor estimulación por la tarde'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el sueño se convierte en un problema persistente, afecta a la concentración, al humor o a la energía, es razonable consultar con un profesional que pueda valorar si hay otras causas y proponer opciones útiles.',
          list: ['Insomnio duradero', 'Sueño muy fragmentado', 'Impacto en la calidad de vida'],
        },
      ]}
      cta={{ label: 'Ver síntomas de perimenopausia', href: '/perimenopausia/sintomas' }}
    />
  )
}
