'use client'

import { useMemo, useState } from 'react'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function parseDateOnly(value: string): Date | null {
  if (!value) return null
  const [y, m, d] = value.split('-').map(Number)
  if (!y || !m || !d) return null
  const date = new Date(y, m - 1, d)
  if (Number.isNaN(date.getTime())) return null
  return date
}

/**
 * Calculadora de embarazo / fecha probable de parto (regla de Naegele:
 * FUR + 280 días).
 * Estado inicial vacío: sin resultados hasta que la usuaria introduce
 * una fecha válida. Todo se calcula en el navegador, sin almacenar
 * ni enviar datos.
 */
export function PregnancyCalculator() {
  const [lastPeriod, setLastPeriod] = useState('')
  const [touched, setTouched] = useState(false)

  const lmp = useMemo(() => parseDateOnly(lastPeriod), [lastPeriod])
  const today = useMemo(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }, [])
  const isFuture = lmp !== null && lmp.getTime() > today.getTime()
  const isValid = lmp !== null && !isFuture

  const result = useMemo(() => {
    if (!isValid || !lmp) return null
    const gestationStart = new Date(lmp)
    const dueDate = new Date(lmp)
    dueDate.setDate(lmp.getDate() + 280)

    const diffDays = Math.floor((today.getTime() - gestationStart.getTime()) / (1000 * 60 * 60 * 24))
    const weeks = Math.max(0, Math.floor(diffDays / 7))
    const days = Math.max(0, diffDays % 7)

    return { dueDate, weeks, days }
  }, [lmp, today, isValid])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="rounded-2xl border border-border bg-card p-6 shadow-card"
        onSubmit={(e) => {
          e.preventDefault()
          setTouched(true)
        }}
      >
        <label htmlFor="pregnancy-last-period" className="mb-2 block text-sm font-medium text-foreground">
          Fecha de inicio de la última regla
        </label>
        <input
          id="pregnancy-last-period"
          type="date"
          value={lastPeriod}
          max={today.toISOString().slice(0, 10)}
          onChange={(event) => setLastPeriod(event.target.value)}
          onBlur={() => setTouched(true)}
          aria-describedby="pregnancy-last-period-error"
          aria-invalid={touched && !isValid}
          className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
        />
        {touched && !isValid && (
          <p id="pregnancy-last-period-error" role="alert" className="mt-2 text-xs text-red-600">
            {lmp === null
              ? 'Introduce la fecha de inicio de tu última regla para ver la estimación.'
              : 'La fecha no puede ser futura. Revisa el dato introducido.'}
          </p>
        )}
      </form>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6" aria-live="polite" aria-atomic="true">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Resultado orientativo</h3>
        {result ? (
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Semana actual estimada</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{result.weeks} semanas y {result.days} días</p>
            </div>
            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Fecha estimada de parto</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{formatDate(result.dueDate)}</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-card p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Todavía no hay resultados. Introduce la fecha de inicio de tu última regla y
              verás aquí la estimación. Tus datos no se guardan ni se envían a ningún servidor.
            </p>
          </div>
        )}

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Estos cálculos son orientativos y se basan en un embarazo de 40 semanas. Las fechas reales pueden variar según la persona y la evolución individual.
        </p>
      </aside>
    </div>
  )
}
