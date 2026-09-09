import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Cuándo consultar en la perimenopausia',
  description: 'Cómo saber cuándo conviene hablar con un profesional durante la perimenopausia y qué síntomas merecen valoración.',
  path: '/perimenopausia/cuando-consultar',
  type: 'article',
})

export default function PerimenopausiaCuandoConsultarPage() {
  return (
    <InfoPageTemplate
      canonical="/perimenopausia/cuando-consultar"
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Cuándo consultar' }]}
      eyebrow="Valoración y apoyo"
      title="Cuándo consultar durante la perimenopausia"
      intro="La perimenopausia no siempre necesita un diagnóstico urgente, pero hay señales que justifican una valoración más profunda. La mejor guía es la intensidad, la duración y el impacto en la vida diaria."
      sections={[
        {
          title: 'Señales para valorar',
          body: 'Si aparecen sangrados abundantes, dolor intenso, ciclos que cambian muy bruscamente o síntomas muy molestos durante semanas o meses, una consulta puede ayudar a aclarar si hay otra causa o si hace falta un plan específico.',
          list: ['Sangrado muy abundante o prolongado', 'Dolor muy intenso o persistente', 'Síntomas que alteran el sueño o el día a día'],
        },
        {
          title: 'Qué puede considerarse una duda razonable',
          body: 'No hace falta esperar a que todo empeore para pedir orientación. Si tienes dudas sobre el patrón del ciclo, el sueño, los sofocos o la salud ósea, puede ser útil hablar con un profesional sanitario y comparar tu experiencia con la evidencia.',
          list: ['Cambios en el ciclo muy frecuentes', 'Aumento de ansiedad o preocupación', 'Efecto en el rendimiento o la calidad de vida'],
        },
        {
          title: 'Qué aportar a la consulta',
          body: 'Anotar cuándo aparecen los síntomas, cuántos días dura cada episodio y qué cambios hay en el ciclo puede ayudar mucho. También puede ser útil comentar tanto el dolor como el sueño, el humor y la energía.',
          list: ['Fechas de la regla', 'Intensidad y frecuencia de sofocos', 'Cambios de sueño, humor y energía'],
        },
      ]}
      cta={{ label: 'Explorar síntomas frecuentes', href: '/perimenopausia/sintomas' }}
    />
  )
}
