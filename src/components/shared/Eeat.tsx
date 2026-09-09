import { ShieldCheck } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export function ArticleMeta({
  publishedAt,
  updatedAt,
  category,
}: {
  publishedAt: string
  updatedAt?: string
  category?: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span>
        Publicado: <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </span>
      {updatedAt && (
        <span>
          Actualizado: <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
        </span>
      )}
      {category && <span>Categoría: {category}</span>}
    </div>
  )
}

export function AuthorCard({
  name,
  role,
  bio,
}: {
  name: string
  role?: string
  bio?: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Escrito por
      </p>
      <p className="text-sm font-semibold text-foreground">{name}</p>
      {role && <p className="text-xs font-medium text-accent">{role}</p>}
      {bio && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{bio}</p>}
    </div>
  )
}

export function ReviewerCard() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-5">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Revisión
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Contenido elaborado por el equipo editorial de VidaMujer con fuentes médicas de
        referencia. Cuando incorporemos revisión médica externa, aquí aparecerá el nombre,
        la credencial y la fecha de revisión.
      </p>
    </div>
  )
}

export function MedicalReviewBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cat-embarazo-light px-2.5 py-1 text-xs font-medium text-accent-sage">
      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
      <span>Información basada en evidencia</span>
    </span>
  )
}
