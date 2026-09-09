import { InfoPageTemplate, RelatedArticles, RelatedTools } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: '¿Es normal tener sangrado abundante?',
  description:
    'Respuesta clara sobre sangrado menstrual abundante: qué observar, causas frecuentes y cuándo consultar con un profesional.',
  path: '/es-normal/sangrado-abundante',
  type: 'article',
})

export default function SangradoAbundantePage() {
  return (
    <>
      <InfoPageTemplate
        canonical="/es-normal/sangrado-abundante"
        breadcrumbItems={[{ label: '¿Es normal?', href: '/es-normal' }, { label: 'Sangrado abundante' }]}
        eyebrow="Duda frecuente"
        title="¿Es normal tener sangrado abundante?"
        intro="Depende de la cantidad, la duración y cómo afecta a tu vida diaria. Un sangrado que empapa productos de higiene cada hora, dura más de 7 días o causa cansancio importante merece valoración profesional."
        sections={[
          {
            title: 'Respuesta breve',
            body: 'Un sangrado ocasionalmente más abundante puede ocurrir por cambios hormonales, estrés o etapas como la perimenopausia. Si se repite, es muy abundante o interfiere con tu día a día, conviene consultar.',
          },
          {
            title: 'Qué puede estar ocurriendo',
            body: 'El endometrio, los cambios hormonales y condiciones como miomas, pólipos o alteraciones de la ovulación pueden influir en la cantidad del sangrado. En perimenopausia las fluctuaciones son frecuentes.',
            list: ['Cambios hormonales', 'Miomas o pólipos', 'Ciclos sin ovulación'],
          },
          {
            title: 'Qué observar',
            body: 'Anota cuántos productos usas al día, si hay coágulos grandes, cuántos días dura y si aparecen mareos, fatiga o palidez. Esta información es muy útil en consulta.',
            list: ['Frecuencia de cambio de protección', 'Duración en días', 'Coágulos, dolor o cansancio'],
          },
          {
            title: 'Cuándo consultar',
            body: 'Busca atención pronto si empapas una compresa o tampón cada hora durante varias horas, si el sangrado dura más de 7 días, si hay mareo o desmayo, o si interfiere con tu trabajo o descanso.',
            list: ['Sangrado muy abundante o prolongado', 'Mareo, fatiga intensa o palidez', 'Dolor intenso o fiebre'],
          },
          {
            title: 'Fuentes',
            body: 'Contenido educativo basado en guías de sociedades de obstetricia y ginecología de referencia. No sustituye la valoración de un profesional sanitario.',
          },
        ]}
        cta={{ label: 'Cuándo consultar en perimenopausia', href: '/perimenopausia/cuando-consultar' }}
      />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RelatedTools
          items={[{ title: 'Calculadora del ciclo', href: '/calculadora-ciclo-menstrual' }]}
        />
        <RelatedArticles
          items={[
            { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
            { title: 'Cambios en la menstruación en perimenopausia', href: '/perimenopausia/cambios-menstruacion' },
          ]}
        />
      </div>
    </>
  )
}
