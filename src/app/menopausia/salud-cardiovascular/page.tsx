import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Salud cardiovascular y menopausia',
  description: 'Cómo puede relacionarse la menopausia con la salud del corazón y la salud cardiovascular.',
  path: '/menopausia/salud-cardiovascular',
  type: 'article',
})

export default function MenopausiaSaludCardiovascularPage() {
  return (
    <InfoPageTemplate
      canonical="/menopausia/salud-cardiovascular"
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Salud cardiovascular' }]}
      eyebrow="Corazón y bienestar"
      title="Salud cardiovascular y menopausia"
      intro="La menopausia puede coincidir con cambios en los factores de riesgo cardiovascular. Por eso, el cuidado del corazón pasa a ser especialmente relevante en esta etapa, tanto por la salud general como por la prevención."
      sections={[
        {
          title: 'Qué suele estar relacionado',
          body: 'Los cambios hormonales, la distribución corporal, el sueño, la presión arterial y la actividad física pueden influir en la salud cardiovascular. La prevención se fortalece con hábitos sostenibles y con atención a los síntomas.',
          list: ['Actividad física', 'Hábitos de sueño', 'Presión arterial y metabolismo'],
        },
        {
          title: 'Qué puede ayudar',
          body: 'La práctica regular de ejercicio, una dieta equilibrada, la atención al sueño y la vigilancia de los síntomas pueden ser pasos útiles. No hay un único enfoque, pero sí hábitos que suelen marcar diferencia.',
          list: ['Ejercicio regular', 'Dieta equilibrada', 'Atención a sueño y estrés'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay dolor torácico, mareos frecuentes o cambios importantes en la salud del corazón, merece la pena valorar la situación con un profesional sanitario para una evaluación ajustada.',
          list: ['Dolor torácico persistente', 'Mareos o fatiga intensa', 'Dudas sobre salud cardiovascular'],
        },
      ]}
      cta={{ label: 'Volver a menopausia', href: '/menopausia' }}
    />
  )
}
