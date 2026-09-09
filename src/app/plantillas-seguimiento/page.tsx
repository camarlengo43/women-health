import type { Metadata } from 'next'
import { Check, Download, Printer } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'
import { JsonLd, MedicalDisclaimer } from '@/components/shared'
import { TemplateDownloadButton } from '@/components/pdf/TemplateDownloadButton'
import { siteConfig } from '@/config'
import { buildPageMetadata } from '@/lib/page-seo'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import { BLANK_TEMPLATES, TRACKING_PACK } from '@/lib/pdf/templates-meta'

export const metadata: Metadata = buildPageMetadata({
  title: 'Plantillas de seguimiento para imprimir: ciclo, síntomas y perimenopausia',
  description:
    'Descarga gratis plantillas en PDF para llevar un registro manual del ciclo menstrual, calendario menstrual, diario de síntomas, diario de perimenopausia y actividad física. Sin registro.',
  path: '/plantillas-seguimiento',
})

export default function PlantillasSeguimientoPage() {
  const url = `${siteConfig.url}/plantillas-seguimiento`
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Plantillas de seguimiento para imprimir',
          description:
            'Registro del ciclo menstrual, calendario menstrual, diario de síntomas, diario de perimenopausia y registro de actividad física en PDF.',
          url,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: `${siteConfig.url}/logo.png`,
          },
        }}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Herramientas', url: `${siteConfig.url}/herramientas` },
          { name: 'Plantillas de seguimiento', url },
        ])}
      />

      <div className="mb-8">
        <Breadcrumbs
          items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Plantillas de seguimiento' }]}
        />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Recursos para imprimir
        </p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Plantillas de seguimiento
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Plantillas descargables en PDF para realizar el seguimiento manualmente: imprímelas
          y anota a mano tu ciclo, tus síntomas o tu actividad. Sin registro, sin cuentas
          y sin guardar ningún dato.
        </p>
      </header>

      <div className="mb-10 grid gap-4 rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
        <p className="flex items-start gap-2">
          <Printer className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          Diseñadas para papel A4, con espacio amplio para escribir a mano.
        </p>
        <p className="flex items-start gap-2">
          <Download className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          Descarga cada plantilla por separado o el pack completo en un solo archivo.
        </p>
        <p className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          Los PDF se generan en tu dispositivo: nada se envía ni se almacena.
        </p>
      </div>

      <section aria-labelledby="pack" className="mb-10 rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Recomendado
        </p>
        <h2 id="pack" className="text-2xl font-semibold text-foreground sm:text-3xl">
          {TRACKING_PACK.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {TRACKING_PACK.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {TRACKING_PACK.fields.map((field) => (
            <li
              key={field}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground"
            >
              {field}
            </li>
          ))}
        </ul>
        <div className="mt-6 max-w-sm">
          <TemplateDownloadButton id="trackingPack" />
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {BLANK_TEMPLATES.map((template) => (
          <article
            key={template.id}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <h2 className="mb-2 text-2xl font-semibold text-foreground">{template.title}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{template.description}</p>
            <ul className="mb-6 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {template.fields.map((field) => (
                <li key={field} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <TemplateDownloadButton id={template.id} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <MedicalDisclaimer />
      </div>
    </div>
  )
}
