import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: '¿Es normal despertarse por la noche en la menopausia?',
  description: 'El sueño fragmentado y los despertares nocturnos pueden ser frecuentes en la menopausia y la perimenopausia.',
  path: '/es-normal/despertarse-por-la-noche-menopausia',
  type: 'article',
})

export default function DespertarsePorLaNochePage() {
  return (
    <InfoPageTemplate
      canonical="/es-normal/despertarse-por-la-noche-menopausia"
      breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Despertarse por la noche' }]}
      eyebrow="Duda frecuente"
      title="¿Es normal despertarse por la noche en la menopausia?"
      intro="Sí, puede ser normal que el sueño se vuelva más fragmentado y que aparezcan despertares nocturnos durante la perimenopausia o la menopausia. Esto puede relacionarse con cambios hormonales, sofocos o ansiedad y suele mejorar con una estrategia adaptada."
      sections={[
        {
          title: 'Qué puede estar ocurriendo',
          body: 'Los cambios en el sueño pueden aparecer por la variación hormonal, por molestias térmicas, por estrés o por cambios en la calidad del descanso. No siempre se debe a un problema grave, pero tampoco debe ignorarse si afecta mucho al bienestar.',
          list: ['Sofocos y sudores nocturnos', 'Sueño más ligero', 'Estrés o nerviosismo'],
        },
        {
          title: 'Qué observar',
          body: 'Es útil llevar un registro del horario, la frecuencia y si aparecen antes del sueño o durante la noche. Si se vuelven recurrentes, puede valer la pena hablar con un profesional para valorar si hay otras causas.',
          list: ['Frecuencia de despertares', 'Relación con calor o sudor', 'Impacto sobre energía y humor'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si el sueño se ha vuelto muy pobre durante semanas o meses, o si además aparece dolor, sangrado o mucha fatiga, merece la pena buscar ayuda. A veces hace falta orientar la valoración para descartar otras causas.',
          list: ['Insomnio persistente', 'Mucho cansancio', 'Síntomas que afectan a la rutina'],
        },
      ]}
      cta={{ label: 'Ver guía de sueño y menopausia', href: '/perimenopausia/insomnio' }}
    />
  )
}
