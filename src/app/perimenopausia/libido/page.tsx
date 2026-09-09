import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Libido en perimenopausia',
  description:
    'Cambios en el deseo sexual durante la perimenopausia: causas frecuentes, sequedad vaginal y cuándo consultar. Información clara y respetuosa.',
  path: '/perimenopausia/libido',
  type: 'article',
})

export default function LibidoPage() {
  return (
    <InfoPageTemplate
      canonical="/perimenopausia/libido"
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Libido' }]}
      eyebrow="Salud sexual"
      title="Libido en perimenopausia"
      intro="El deseo sexual puede fluctuar en esta etapa por cambios hormonales, cansancio, sequedad vaginal o estrés. Es un tema frecuente, válido y del que se puede hablar en consulta con naturalidad."
      sections={[
        {
          title: 'Qué puede influir',
          body: 'La disminución de estrógenos puede asociarse a sequedad vaginal o molestias, y el cansancio o los cambios de ánimo también influyen en el deseo. La experiencia es muy personal.',
          list: ['Cambios hormonales', 'Sequedad o molestias', 'Cansancio y ánimo'],
        },
        {
          title: 'Qué puede ayudar',
          body: 'Hablar con la pareja, dedicar tiempo sin prisas, usar lubricación si hay sequedad y abordar el descanso y el estrés puede mejorar la experiencia. No hay una norma única.',
          list: ['Comunicación abierta', 'Lubricación si es necesaria', 'Descanso y autocuidado'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si hay dolor, sangrado, molestias persistentes o preocupación, un profesional sanitario puede valorar causas y opciones seguras con enfoque respetuoso.',
          list: ['Dolor o sangrado', 'Molestias persistentes', 'Preocupación o dudas'],
        },
      ]}
      cta={{ label: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar' }}
    />
  )
}
