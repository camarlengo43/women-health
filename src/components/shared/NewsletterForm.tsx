import { Mail } from 'lucide-react'

interface NewsletterFormProps {
  variant?: 'default' | 'compact'
  className?: string
}

/**
 * Newsletter (coming soon).
 *
 * There is no subscription backend in this phase and no email is
 * collected: this block is just an honest notice about the future channel.
 * Once a real provider exists (e.g. Brevo/Resend with double opt-in),
 * this component will be replaced by the final form. It does not
 * simulate subscriptions.
 */
export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
  return (
    <div className={`${className}`} role="status" aria-live="polite">
      {variant === 'default' && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-2">
            Recibe información útil sobre salud femenina
          </h3>
          <p className="text-sm text-muted-foreground">
            Artículos seleccionados directamente en tu email. Sin spam, cancela cuando quieras.
          </p>
        </div>
      )}

      <div className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-muted/40 px-4 py-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className="text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">Boletín próximamente.</strong>{' '}
          Estamos preparando el canal de suscripción; aún no recogemos direcciones de email.
        </p>
      </div>
    </div>
  )
}
