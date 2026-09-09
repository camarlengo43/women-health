import { Breadcrumbs } from '@/components/layout'
import { PregnancyCalculator } from '@/components/tools/PregnancyCalculator'
import { ToolEducation } from '@/components/tools/ToolEducation'
import { JsonLd } from '@/components/shared'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import { buildPageMetadata } from '@/lib/page-seo'
import { siteConfig } from '@/config'

export const metadata = buildPageMetadata({
  title: 'Calculadora de fecha probable de parto (FPP)',
  description:
    'Estima tu fecha probable de parto a partir de la última regla con la regla de Naegele. Herramienta orientativa en tu navegador, sin registro.',
  path: '/calculadora-fecha-parto',
})

export default function FechaPartoPage() {
  const url = `${siteConfig.url}/calculadora-fecha-parto`
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Herramientas', url: `${siteConfig.url}/herramientas` },
          { name: 'Fecha probable de parto', url },
        ])}
      />
      <div className="mb-8">
        <Breadcrumbs
          items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Fecha probable de parto' }]}
        />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Herramienta orientativa
        </p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Calculadora de fecha probable de parto
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Introduce el primer día de tu última regla y obtén una estimación de semanas y
          fecha probable de parto. Todo se calcula en tu navegador, sin enviar datos a
          ningún servidor.
        </p>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta es una estimación basada en un embarazo medio de 40 semanas (280 días). La
        fecha real puede variar. No constituye un diagnóstico ni sustituye el seguimiento
        profesional del embarazo.
      </div>

      <PregnancyCalculator documentTitle="Calculadora de fecha probable de parto" />

      <ToolEducation
        howItWorks="Se suma una estimación de 280 días al primer día de la última menstruación (regla de Naegele). Si tu ciclo es irregular o no recuerdas la fecha exacta, la estimación es menos precisa y la ecografía del primer trimestre suele ser la referencia clínica."
        whatItMeans="Obtienes una fecha de referencia para organizar controles y preparativos. La mayoría de los partos ocurren en las dos semanas anteriores o posteriores a esta fecha, no exactamente ese día."
        limitations={[
          'Asume un ciclo medio de 28 días; con ciclos más largos o cortos, conviene ajustar con un profesional.',
          'No contempla embarazos múltiples ni situaciones clínicas particulares.',
          'No sustituye la datación por ecografía ni el seguimiento sanitario.',
        ]}
        faq={[
          {
            question: '¿Qué tan fiable es la fecha estimada?',
            answer: 'Es una referencia útil, no una predicción exacta. Solo una minoría de bebés nace justo ese día; el rango de término abarca varias semanas.',
          },
          {
            question: '¿Y si mis ciclos son irregulares?',
            answer: 'La estimación por fecha de regla es menos fiable. La ecografía precoz permite datar el embarazo con mayor precisión: consúltalo con tu profesional.',
          },
        ]}
        whenToConsult={[
          'Sangrado, dolor intenso o pérdida de líquido.',
          'Dudas sobre datación o sobre síntomas en cualquier momento.',
        ]}
        sources={[
          { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        ]}
        related={[
          { title: 'Embarazo por etapas', href: '/etapas/embarazo', description: 'Cambios por trimestres y señales.' },
          { title: 'Posparto', href: '/etapas/posparto', description: 'Recuperación, descanso y apoyo.' },
        ]}
        relatedTools={[
          { title: 'Calculadora de semanas de embarazo', href: '/calculadora-semanas-embarazo' },
          { title: 'Calculadora del ciclo', href: '/calculadora-ciclo-menstrual' },
          { title: 'Plantillas de seguimiento para imprimir', href: '/plantillas-seguimiento' },
        ]}
      />
    </div>
  )
}
