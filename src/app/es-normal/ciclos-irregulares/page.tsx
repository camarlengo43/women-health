import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: '¿Es normal tener ciclos irregulares?',
  description: 'Puede ser normal tener ciclos más irregulares en la perimenopausia, con cambios hormonales, estrés, sueño y otros factores.',
  path: '/es-normal/ciclos-irregulares',
  type: 'article',
})

export default function CiclosIrregularesPage() {
  return (
    <InfoPageTemplate
      canonical="/es-normal/ciclos-irregulares"
      breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Ciclos irregulares' }]}
      eyebrow="Duda frecuente"
      title="¿Es normal tener ciclos irregulares?"
      intro="Sí, puede ser normal que los ciclos cambien, sobre todo a medida que se acerca la perimenopausia. El patrón puede volverse más irregular durante años antes de la menopausia, pero también puede deberse a otros factores."
      sections={[
        {
          title: 'Qué puede significar',
          body: 'Cambios como periodos más cortos, más largos, más abundantes o menos frecuentes pueden ser habituales en la transición hormonal. Sin embargo, también pueden aparecer por estrés, cambios de peso, actividad intensa o condiciones médicas.',
          list: ['Cambios hormonales', 'Estrés y sueño', 'Variación del peso o del ejercicio'],
        },
        {
          title: 'Qué observar',
          body: 'Es útil llevar un registro de la duración, la intensidad del flujo y los síntomas asociados. Si el cambio es brusco, muy intenso o está acompañado de otros síntomas, la valoración profesional puede ser útil.',
          list: ['Duración del ciclo', 'Cantidad de sangrado', 'Dolor o síntomas asociados'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los ciclos se vuelven muy irregulares, si el sangrado es muy abundante o si aparecen otros síntomas llamativos, conviene revisar la situación. La evaluación sirve para descartar otras causas y orientar un seguimiento útil.',
          list: ['Sangrado muy abundante', 'Ciclos muy desordenados', 'Síntomas que afectan al día a día'],
        },
      ]}
      cta={{ label: 'Explorar la perimenopausia', href: '/perimenopausia' }}
    />
  )
}
