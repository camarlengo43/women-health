import Link from 'next/link'
import { Search, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <span className="text-5xl sm:text-6xl font-serif font-bold text-accent mb-4 block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
          Página no encontrada
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          Lo sentimos, el artículo o sección que buscas no existe o ha sido reubicado. Te invitamos a buscar o volver a la página de inicio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <Link
            href="/buscar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors shadow-xs"
          >
            <Search className="w-4 h-4 text-accent" />
            <span>Ir al buscador</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
