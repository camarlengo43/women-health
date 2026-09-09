import { Breadcrumbs } from '@/components/layout'
import { CycleCalculator } from '@/components/tools/CycleCalculator'
import { ToolEducation } from '@/components/tools/ToolEducation'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Calculadora del ciclo menstrual: próxima regla y ovulación',
  description:
    'Calcula de forma orientativa tu próxima regla, la ovulación y la ventana fértil a partir de la última menstruación. Funciona en tu navegador, sin guardar datos.',
  path: '/calculadora-ciclo-menstrual',
})

export default function CalculadoraCicloPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora del ciclo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora del ciclo menstrual</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta herramienta estima la fecha de la próxima regla, la ovulación y la fase fértil a partir de tus datos básicos. Es una referencia útil para observar patrones, pero no puede predecir con certeza cuándo ocurre la ovulación ni diagnosticar ninguna condición.
      </div>

      <CycleCalculator />

      <ToolEducation
        howItWorks="A partir del primer día de tu última regla y de la duración media de tu ciclo, la calculadora suma días para estimar la próxima menstruación y resta unos 14 días para situar la ovulación probable. La ventana fértil se estima en los 5 días previos más el día posterior. Todo el cálculo ocurre en tu navegador."
        whatItMeans="El resultado es una estimación de calendario: te ayuda a anticipar cuándo puede llegar la regla y a entender en qué fase del ciclo podrías estar. Sirve para llevar un registro y preparar consultas, no como prueba de nada."
        limitations={[
          'La ovulación real puede adelantarse o retrasarse varios días respecto a la estimación.',
          'En ciclos irregulares, la estimación es menos fiable.',
          'No detecta anovulación, embarazo ni ninguna condición médica.',
          'No debe usarse como método anticonceptivo ni para buscar embarazo sin orientación profesional.',
        ]}
        faq={[
          {
            question: '¿Qué duración de ciclo debo introducir?',
            answer: 'La media de tus últimos 3-6 ciclos: cuenta desde el primer día de sangrado de un ciclo hasta el día anterior al siguiente sangrado. El rango habitual en adultas está entre 21 y 35 días.',
          },
          {
            question: '¿Cómo puedo saber cuándo me bajará la regla si mi ciclo es irregular?',
            answer: 'Con ciclos irregulares ninguna calculadora puede predecir la fecha con precisión: la estimación usa tu media, pero la ovulación real puede adelantarse o retrasarse. Los ciclos pueden variar entre personas y a lo largo del tiempo. Anota cada regla durante 2-3 meses para conocer tu rango y, si tus ciclos son persistentemente muy cortos, muy largos o han cambiado de forma significativa, consulta con un profesional sanitario.',
          },
          {
            question: '¿Por qué el resultado cambia si cambio los datos?',
            answer: 'Porque es un cálculo directo sobre los datos que introduces. Al recargar la página los campos se vacían y no se muestra ningún resultado hasta que introduces datos válidos.',
          },
        ]}
        whenToConsult={[
          'Sangrado que dura más de 7 días de forma repetida.',
          'Ciclos persistentemente muy cortos, muy largos o que han cambiado de forma significativa respecto a tu patrón previo.',
          'Dolor intenso, mareos o fatiga marcada con la regla.',
        ]}
        sources={[
          { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        ]}
        related={[
          { title: 'Ovulación (glosario)', href: '/glosario/ovulacion', description: 'Qué es la ovulación en lenguaje sencillo.' },
          { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares', description: 'Variaciones del ciclo y sus causas.' },
          { title: 'Cambios en la menstruación en perimenopausia', href: '/perimenopausia/cambios-menstruacion', description: 'Reglas más cortas, largas o con manchados.' },
          { title: '¿Es normal que cambie la duración de la regla?', href: '/es-normal/cambios-duracion-regla', description: 'Fluctuaciones según la etapa.' },
        ]}
        relatedTools={[
          { title: 'Calculadora de ovulación', href: '/calculadora-ovulacion' },
          { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        ]}
      />
    </div>
  )
}
