import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { PregnancyCalculator } from '@/components/tools/PregnancyCalculator'
import { RelatedArticles, RelatedTools } from '@/components/shared'
import { JsonLd } from '@/components/shared'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: 'Calculadora de fecha probable de parto',
  description:
    'Estima tu fecha probable de parto a partir de la última regla. Herramienta orientativa que funciona en tu navegador, sin registro.',
  alternates: { canonical: '/calculadora-fecha-parto' },
}

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

      <PregnancyCalculator />

      <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Información adicional">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold">Cómo funciona</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Se suma una estimación de 280 días al primer día de la última menstruación. Si
            tu ciclo es irregular o no recuerdas la fecha exacta, la estimación es menos
            precisa y la ecografía del primer trimestre suele ser la referencia clínica.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold">Cuándo consultar</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Ante sangrado, dolor intenso, ausencia de movimientos percibidos en etapas
            avanzadas o cualquier duda, consulta con tu profesional sanitario de referencia.
          </p>
        </div>
      </section>

      <RelatedTools
        items={[
          { title: 'Calculadora de semanas de embarazo', href: '/calculadora-semanas-embarazo' },
          { title: 'Calculadora del ciclo', href: '/calculadora-ciclo-menstrual' },
        ]}
      />
      <RelatedArticles
        items={[
          { title: 'Embarazo: guías por etapa', href: '/categoria/embarazo' },
          { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
        ]}
      />
    </div>
  )
}
