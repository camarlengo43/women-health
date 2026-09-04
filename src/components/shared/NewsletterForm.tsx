'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

interface NewsletterFormProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function NewsletterForm({ variant = 'default', className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMessage('')

    if (!validateEmail(email)) {
      setState('error')
      setErrorMessage('Introduce una dirección de email válida.')
      return
    }

    setState('loading')

    // Simulated subscription — replace with actual API call (Brevo, Mailchimp, Resend)
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setState('success')
    setEmail('')
  }

  if (state === 'success') {
    return (
      <div className={`text-center py-6 ${className}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-sage/10 mb-4">
          <CheckCircle className="w-6 h-6 text-accent-sage" />
        </div>
        <p className="text-lg font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-1">
          ¡Gracias por suscribirte!
        </p>
        <p className="text-sm text-muted-foreground">
          Te enviaremos contenido útil sobre salud femenina.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className}`}
      aria-label="Suscripción al boletín"
    >
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

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <label htmlFor="newsletter-email" className="sr-only">
            Tu email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (state === 'error') setState('idle')
            }}
            placeholder="tu@email.com"
            required
            disabled={state === 'loading'}
            className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={state === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          {state === 'loading' ? (
            <>
              <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Suscribirme
            </>
          )}
        </button>
      </div>

      {state === 'error' && errorMessage && (
        <div className="mt-2 flex items-center gap-2 text-sm text-red-600" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="mt-3 text-xs text-muted-foreground/60">
        Al suscribirte aceptas nuestra{' '}
        <a href="/legal/privacidad" className="underline hover:text-muted-foreground transition-colors">
          política de privacidad
        </a>
        .
      </p>
    </form>
  )
}
