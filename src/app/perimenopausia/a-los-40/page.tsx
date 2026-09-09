import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Perimenopausia a los 40',
  description:
    'Qué cambios pueden aparecer alrededor de los 40: ciclos, sofocos, sueño y cuándo consultar. Información orientativa basada en evidencia.',
  path: '/perimenopausia/a-los-40',
  type: 'article',
})

export default function PeriALos40Page() {
  return (
    <InfoPageTemplate
      canonical="/perimenopausia/a-los-40"
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'A los 40' }]}
      eyebrow="Etapa de transición"
      title="Perimenopausia a los 40"
      intro="Alrededor de los 40 muchas personas notan los primeros cambios: ciclos menos predecibles, sofocos ocasionales o sueño más ligero. No todas los experimentan igual ni al mismo ritmo."
      sections={[
        {
          title: 'Qué suele cambiar',
          body: 'La regularidad del ciclo puede variar, con reglas más cortas, más largas o con manchados. También pueden aparecer sofocos, sudores nocturnos y mayor sensibilidad al estrés o al cansancio.',
          list: ['Ciclos más irregulares', 'Sofocos o sudores nocturnos', 'Sueño más fragmentado'],
        },
        {
          title: 'Qué observar',
          body: 'Llevar un registro sencillo del ciclo, el sueño y los síntomas ayuda a detectar patrones y a preparar una consulta más útil si lo necesitas.',
          list: ['Fecha y duración de la regla', 'Frecuencia de sofocos', 'Calidad del sueño'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el sangrado es muy abundante, hay dolor intenso, los síntomas interfieren con tu vida diaria o tienes dudas, habla con un profesional sanitario.',
          list: ['Sangrado abundante o prolongado', 'Síntomas persistentes', 'Dudas sobre anticoncepción o salud ósea'],
        },
      ]}
      cta={{ label: 'Hacer el test orientativo', href: '/test-perimenopausia' }}
    />
  )
}
