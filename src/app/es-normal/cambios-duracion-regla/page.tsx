import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: '¿Es normal que cambie la duración de la regla?',
  description: 'Por qué la regla puede durar más o menos días según la etapa, qué observar y cuándo consultar.',
  path: '/es-normal/cambios-duracion-regla',
  type: 'article',
})

export default function CambiosDuracionReglaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Cambios en la duración de la regla' }]}
      eyebrow="Duda frecuente"
      title="¿Es normal que cambie la duración de la regla?"
      intro="Sí, puede ser normal. La duración del sangrado y del ciclo completo puede fluctuar a lo largo de la vida, y de forma más marcada en la perimenopausia. Observar el patrón ayuda a saber cuándo es solo una variación y cuándo conviene consultar."
      description="Por qué la regla puede durar más o menos días según la etapa, qué observar y cuándo consultar."
      canonical="/es-normal/cambios-duracion-regla"
      keyPoints={[
        'Pequeñas variaciones de duración entre ciclos entran dentro de lo habitual.',
        'En perimenopausia, reglas más cortas, más largas o con manchados son frecuentes.',
        'Anotar fechas, días de sangrado y cantidad ayuda a detectar patrones.',
        'Sangrado muy prolongado o muy abundante merece valoración.',
      ]}
      sections={[
        {
          title: 'Respuesta breve',
          body: 'Sí, puede ser normal que la regla dure más o menos días de un ciclo a otro, sobre todo en la adolescencia, tras cambios de peso o estrés, y en la perimenopausia. Si el cambio es brusco o persistente, conviene observarlo con más atención.',
          list: ['Variaciones leves: habituales', 'Cambios bruscos: observar', 'Patrón persistente: valorar'],
        },
        {
          title: 'Qué puede significar',
          body: 'Una regla algo más corta o larga de forma ocasional suele reflejar fluctuaciones hormonales normales. Cuando los ciclos se acortan o alargan de forma sostenida durante meses, puede indicar la transición hacia la perimenopausia u otros factores como estrés, ejercicio intenso o cambios de peso.',
          list: ['Fluctuaciones hormonales', 'Estrés y estilo de vida', 'Transición perimenopáusica'],
        },
        {
          title: 'Qué observar',
          body: 'Lleva un registro sencillo: fecha de inicio, días de sangrado, cantidad aproximada (protecciones usadas) y síntomas asociados como dolor o manchados entre reglas. Con 2-3 ciclos registrados, una consulta es mucho más útil.',
          list: ['Fecha de inicio y días de sangrado', 'Cantidad aproximada', 'Dolor y manchados entre reglas'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Conviene consultar si el sangrado dura más de 7 días de forma repetida, si empapas una protección cada hora durante varias horas, si hay manchados frecuentes entre reglas o si el cambio se acompaña de dolor intenso, mareo o fatiga marcada.',
          list: ['Sangrado de más de 7 días repetido', 'Protección empapada cada hora', 'Mareo, fatiga o dolor intenso'],
        },
      ]}
      faq={[
        {
          question: '¿Una regla de 24 días es normal?',
          answer: 'Los ciclos de entre 21 y 35 días entran en rangos habituales en adultas. Si tus ciclos se acortan de forma sostenida respecto a tu patrón previo, coméntalo en tu próxima revisión.',
        },
      ]}
      sources={[
        { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
      ]}
      related={[
        { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares', description: 'Variaciones del ciclo y sus causas.' },
        { title: '¿Es normal tener sangrado abundante?', href: '/es-normal/sangrado-abundante', description: 'Cuándo merece consulta.' },
        { title: 'Cambios en la menstruación en perimenopausia', href: '/perimenopausia/cambios-menstruacion', description: 'Reglas más cortas, largas o con manchados.' },
        { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar', description: 'Señales que merecen valoración.' },
      ]}
      tools={[{ title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' }]}
      topics={[
        { title: 'Ovulación (glosario)', href: '/glosario/ovulacion' },
        { title: 'Cambios en la menstruación', href: '/perimenopausia/cambios-menstruacion' },
      ]}
      cta={{ label: 'Explorar la perimenopausia', href: '/perimenopausia' }}
    />
  )
}
