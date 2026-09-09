import { Breadcrumbs } from '@/components/layout'
import { PregnancyCalculator } from '@/components/tools/PregnancyCalculator'
import { ToolEducation } from '@/components/tools/ToolEducation'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Calculadora de semanas de embarazo: ¿de cuántas semanas estoy?',
  description:
    'Calcula de forma orientativa cuántas semanas de embarazo tienes y tu fecha probable de parto desde la última regla. Sin registro, en tu navegador.',
  path: '/calculadora-semanas-embarazo',
})

export default function CalculadoraEmbarazoPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Calculadora de embarazo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Calculadora de embarazo</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta calculadora ofrece una estimación útil para comprender aproximadamente la semana de gestación y la fecha probable de parto. La evolución real puede variar significativamente según la persona y la situación clínica.
      </div>

      <PregnancyCalculator />

      <ToolEducation
        howItWorks="A partir del primer día de tu última regla, la calculadora aplica la regla de Naegele: suma 280 días (40 semanas) para estimar la fecha probable de parto y calcula las semanas y días transcurridos hasta hoy. Todo ocurre en tu navegador."
        whatItMeans="El resultado te sitúa de forma aproximada en la semana de gestación y te da una fecha de referencia para organizar el seguimiento. Solo alrededor de una minoría de partos ocurre exactamente en la fecha estimada."
        limitations={[
          'Asume ciclos regulares de 28 días y ovulación el día 14; si no es tu caso, la estimación es menos precisa.',
          'La ecografía del primer trimestre suele ser una referencia clínica más fiable.',
          'No valora la salud del embarazo ni sustituye ningún control.',
        ]}
        faq={[
          {
            question: '¿Cómo se calculan las semanas de embarazo?',
            answer: 'Por convención clínica se cuentan desde el primer día de tu última regla, no desde la concepción: se suman 280 días (40 semanas) para estimar la fecha probable de parto y se calculan las semanas y días transcurridos hasta hoy. La ecografía del primer trimestre suele afinar esta datación.',
          },
          {
            question: '¿Por qué se cuenta desde la última regla y no desde la concepción?',
            answer: 'Por convención clínica: la fecha de la última regla es un dato conocido, mientras que la concepción rara vez se conoce con exactitud. Por eso las 40 semanas incluyen unas dos semanas previas a la concepción.',
          },
          {
            question: '¿Qué pasa si no recuerdo la fecha exacta?',
            answer: 'La estimación pierde precisión. Anota una fecha aproximada solo como orientación y confirma la datación con tu profesional sanitario, idealmente con ecografía precoz.',
          },
        ]}
        whenToConsult={[
          'Sangrado, dolor abdominal intenso o pérdida de líquido.',
          'Ausencia de movimientos percibidos en etapas avanzadas.',
          'Cualquier duda sobre síntomas o evolución: consulta pronto.',
        ]}
        sources={[
          { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
          { label: 'Organización Mundial de la Salud (OMS) — atención prenatal', href: 'https://www.who.int/es' },
        ]}
        related={[
          { title: 'Embarazo por etapas', href: '/etapas/embarazo', description: 'Cambios por trimestres y señales.' },
          { title: 'Fecha probable de parto', href: '/calculadora-fecha-parto', description: 'Estimación detallada de la FPP.' },
          { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares', description: 'Cuando la fecha de la regla no es clara.' },
        ]}
        relatedTools={[
          { title: 'Calculadora de fecha probable de parto', href: '/calculadora-fecha-parto' },
          { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
        ]}
      />
    </div>
  )
}
