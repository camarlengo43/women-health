import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Osteoporosis y menopausia',
  description: 'Qué es la osteoporosis y por qué puede ser especialmente relevante durante la menopausia.',
  path: '/menopausia/osteoporosis',
  type: 'article',
})

export default function MenopausiaOsteoporosisPage() {
  return (
    <InfoPageTemplate
      canonical="/menopausia/osteoporosis"
      breadcrumbItems={[{ label: 'Menopausia', href: '/menopausia' }, { label: 'Osteoporosis' }]}
      eyebrow="Salud ósea"
      title="Osteoporosis y menopausia"
      intro="La osteoporosis es una pérdida gradual de masa ósea que puede aparecer con mayor relevancia durante la menopausia. La prevención y la atención temprana son muy importantes para mantener la calidad de vida."
      sections={[
        {
          title: 'Qué es',
          body: 'Se trata de una disminución de la densidad ósea que puede dejar los huesos más frágiles. Esta situación puede influir en el riesgo de fracturas y en la capacidad funcional a largo plazo.',
          list: ['Densidad ósea más baja', 'Mayor riesgo de fractura', 'Impacto funcional'],
        },
        {
          title: 'Qué factores pueden influir',
          body: 'La edad, la hormonal, la alimentación, la actividad física y la historia previa de fracturas o enfermedades pueden influir en el riesgo. Es una cuestión compleja y no siempre uniforme entre personas.',
          list: ['Edad e historia previa', 'Actividad y nutrición', 'Factores hormonales'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay fracturas, dolor óseo persistente o dudas sobre la densidad ósea, la valoración profesional puede ser útil para orientar prevención y toma de decisiones.',
          list: ['Fracturas previas', 'Dolor óseo persistente', 'Dudas sobre densidad ósea'],
        },
      ]}
      cta={{ label: 'Ver salud ósea', href: '/menopausia/salud-osea' }}
    />
  )
}
