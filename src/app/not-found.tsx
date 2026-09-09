import Link from 'next/link'
import { Search, Home, ArrowRight, Stethoscope } from 'lucide-react'

const suggestedLinks = [
  { label: 'Perimenopausia', href: '/perimenopausia' },
  { label: 'Menopausia', href: '/menopausia' },
  { label: '¿Es normal?', href: '/es-normal' },
  { label: 'Herramientas', href: '/herramientas' },
]

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-card">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              <Stethoscope className="h-3.5 w-3.5" />
              VidaMujer
            </div>

            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Página no encontrada</h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              La ruta que buscas no existe o ha cambiado. Aquí tienes algunas páginas útiles para seguir explorando salud femenina, etapa por etapa, síntomas y herramientas prácticas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                <Home className="h-4 w-4" />
                Volver al inicio
              </Link>
              <Link
                href="/buscar"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-muted"
              >
                <Search className="h-4 w-4 text-accent" />
                Buscar contenido
              </Link>
            </div>
          </div>

          <aside className="border-t border-border bg-muted/50 p-8 lg:border-l lg:border-t-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Secciones útiles</p>
            <ul className="space-y-3">
              {suggestedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:bg-background">
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 text-accent transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
