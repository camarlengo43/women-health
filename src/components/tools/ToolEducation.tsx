import { MedicalDisclaimer } from '@/components/shared/MedicalDisclaimer'
import { RelatedArticles, RelatedTools, type RelatedLink } from '@/components/shared/Related'

export interface ToolSource {
  label: string
  href?: string
}

/**
 * Educational section below each tool: how it works, what the
 * result means, limitations, FAQs, when to consult, sources, and
 * related content. Shared structure for all 6 tools.
 */
export function ToolEducation({
  howItWorks,
  whatItMeans,
  limitations,
  faq,
  whenToConsult,
  sources,
  related,
  relatedTools,
}: {
  howItWorks: string
  whatItMeans: string
  limitations: string[]
  faq: { question: string; answer: string }[]
  whenToConsult?: string[]
  sources: ToolSource[]
  related: RelatedLink[]
  relatedTools?: RelatedLink[]
}) {
  return (
    <div className="mt-12">
      <div className="grid gap-6 md:grid-cols-2">
        <section aria-label="Cómo funciona" className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Cómo funciona</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{howItWorks}</p>
        </section>
        <section aria-label="Qué significa el resultado" className="rounded-2xl border border-border bg-card p-6">
          <h2 className="mb-2 text-xl font-semibold text-foreground">Qué significa el resultado</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{whatItMeans}</p>
        </section>
      </div>

      <section aria-label="Limitaciones" className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Limitaciones</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {limitations.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Preguntas frecuentes" className="mt-6 rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {whenToConsult && whenToConsult.length > 0 && (
        <section aria-label="Cuándo consultar" className="mt-6 rounded-2xl border border-accent/25 bg-accent/5 p-6">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Cuándo consultar</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {whenToConsult.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-label="Fuentes" className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">Fuentes</h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {sources.map((source) => (
            <li key={source.label}>
              {source.href ? (
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                  {source.label}
                </a>
              ) : (
                source.label
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <MedicalDisclaimer />
      </div>

      {relatedTools && relatedTools.length > 0 && <RelatedTools items={relatedTools} />}
      {related.length > 0 && <RelatedArticles items={related} />}
    </div>
  )
}
