import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/shared/JsonLd'
import { MedicalDisclaimer } from '@/components/shared/MedicalDisclaimer'
import { RelatedArticles } from '@/components/shared/Related'
import { ArticleMeta, AuthorCard, ReviewerCard } from '@/components/shared/Eeat'
import { PospartoInteractive } from '@/components/posparto/PospartoInteractive'

export const metadata: Metadata = {
  title: 'Posparto y recuperación',
  description:
    'Recuperación física, descanso fragmentado, apoyo emocional y retorno progresivo al movimiento tras el parto. Contenido general y contextual según parto vaginal o cesárea.',
  alternates: { canonical: '/etapas/posparto' },
}

const pageUrl = `${siteConfig.url}/etapas/posparto`

export default function PospartoPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={generateArticleJsonLd({
          title: 'Posparto y recuperación',
          description:
            'Recuperación física, descanso fragmentado, apoyo emocional y retorno progresivo al movimiento tras el parto.',
          datePublished: '2026-03-10',
          dateModified: '2026-08-15',
          authorName: 'Equipo Editorial VidaMujer',
          url: pageUrl,
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Etapas', url: `${siteConfig.url}/etapas` },
          { name: 'Posparto', url: pageUrl },
        ])}
      />

      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Etapas', href: '/etapas' }, { label: 'Posparto' }]} />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <header className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Etapa de la vida
            </p>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
              Posparto y recuperación
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              El posparto combina recuperación física, descanso interrumpido y adaptación
              emocional. Ir a tu ritmo, pedir apoyo y retomar el movimiento de forma progresiva
              ayuda más que exigirse.
            </p>
            <div className="mt-5">
              <ArticleMeta publishedAt="2026-03-10" updatedAt="2026-08-15" category="Etapa de la vida" />
              <p className="mt-1 text-xs text-muted-foreground">
                Por <span className="font-medium text-foreground">Equipo Editorial VidaMujer</span>
              </p>
            </div>
          </header>

          {/* Selector + contenido común + contextual + movimiento + cuándo consultar + fuentes.
              Todo el estado vive en memoria del navegador (useState): no se almacena,
              no se envía, no se usa para analytics. */}
          <PospartoInteractive />

          <div className="mt-6">
            <MedicalDisclaimer />
          </div>

          <div className="mt-8">
            <Link
              href="/movimiento"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
            >
              Movimiento suave adaptado
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <RelatedArticles
            items={[
              {
                title: 'Recuperación tras parto vaginal',
                href: '/etapas/posparto/parto-vaginal',
                description: 'Suelo pélvico, molestias frecuentes y progresión del movimiento.',
              },
              {
                title: 'Recuperación tras cesárea',
                href: '/etapas/posparto/cesarea',
                description: 'Incisión, movilidad progresiva y señales de alarma.',
              },
              {
                title: 'Suelo pélvico',
                href: '/movimiento/suelo-pelvico',
                description: 'Cuidado básico y cuándo pedir valoración.',
              },
            ]}
          />
        </article>

        <aside className="hidden space-y-6 lg:block">
          <AuthorCard
            name="Equipo Editorial VidaMujer"
            role="Equipo editorial"
            bio="Contenido elaborado con fuentes médicas y científicas de referencia y actualizado de forma periódica."
          />
          <ReviewerCard />
        </aside>
      </div>
    </div>
  )
}
