import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { OvulationCalculator } from '@/components/tools/OvulationCalculator'
import { ToolEducation } from '@/components/tools/ToolEducation'

export const metadata: Metadata = {
  title: 'Calculadora de ovulación',
  description: 'Estima de forma orientativa la ventana de fertilidad y la ovulación a partir del ciclo menstrual.',
  alternates: { canonical: '/calculadora-ovulacion' },
}

export default function CalculadoraOvulacionPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora de ovulación' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora de ovulación</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta estimación ayuda a identificar una ventana fértil posible y observar patrones del ciclo. Sin embargo, la ovulación puede variar de un ciclo a otro y no todos los cambios se reflejan exactamente en la calculadora.
      </div>

      <OvulationCalculator />

      <ToolEducation
        howItWorks="Con el primer día de tu última regla y la duración media de tu ciclo, la calculadora sitúa la ovulación unos 14 días antes de la próxima regla estimada y marca una ventana fértil de unos 6 días. Todo el cálculo ocurre en tu navegador."
        whatItMeans="El resultado orienta sobre qué días del ciclo suelen concentrar la fertilidad en ciclos regulares. Es útil para entender el ciclo y para conversar con un profesional, no para confirmar ni descartar fertilidad en un ciclo concreto."
        limitations={[
          'Es un método de calendario: no mide hormonas ni confirma que haya ovulación.',
          'El estrés, la enfermedad o los viajes pueden desplazar la ovulación.',
          'En ciclos irregulares o en perimenopausia, la fiabilidad disminuye.',
          'No es un método anticonceptivo ni un test de fertilidad.',
        ]}
        faq={[
          {
            question: '¿La ventana fértil es exacta?',
            answer: 'No. Es una estimación basada en promedios. La ovulación puede variar varios días y los espermatozoides pueden sobrevivir varios días, por eso se habla de ventana y no de un día exacto.',
          },
          {
            question: '¿Puedo usarla para evitar un embarazo?',
            answer: 'No. El método del calendario por sí solo no es un anticonceptivo fiable. Si buscas evitar o lograr un embarazo, consulta a un profesional sanitario.',
          },
        ]}
        whenToConsult={[
          'Llevas tiempo buscando embarazo sin conseguirlo y tienes dudas.',
          'Tus ciclos son muy irregulares o desaparecen durante meses.',
          'Dolor pélvico intenso o sangrados anómalos.',
        ]}
        sources={[
          { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        ]}
        related={[
          { title: 'Ovulación (glosario)', href: '/glosario/ovulacion', description: 'Qué es la ovulación en lenguaje sencillo.' },
          { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares', description: 'Variaciones del ciclo y sus causas.' },
          { title: 'Cambios en la menstruación en perimenopausia', href: '/perimenopausia/cambios-menstruacion', description: 'Reglas más cortas, largas o con manchados.' },
        ]}
        relatedTools={[
          { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
          { title: 'Calculadora de embarazo', href: '/calculadora-semanas-embarazo' },
        ]}
      />
    </div>
  )
}
