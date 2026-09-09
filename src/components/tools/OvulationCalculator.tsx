'use client'

import { useMemo, useState } from 'react'
import { calcOvulationEstimate, parseDateOnly } from '@/lib/health-calculations'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Calculadora de ovulación.
 * Estado inicial vacío: sin resultados hasta que la usuaria introduce
 * una fecha válida. Todo se calcula en el navegador, sin almacenar
 * ni enviar datos.
 */
export function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [touched, setTouched] = useState(false)

  const lastDate = useMemo(() => parseDateOnly(lastPeriod), [lastPeriod])
  const today = useMemo(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }, [])
  const isFuture = lastDate !== null && lastDate.getTime() > today.getTime()
  const isValid = lastDate !== null && !isFuture

  const result = useMemo(
    () => calcOvulationEstimate(lastPeriod, cycleLength, today),
    [cycleLength, lastPeriod, today],
  )

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="rounded-2xl border border-border bg-card p-6 shadow-card"
        onSubmit={(e) => {
          e.preventDefault()
          setTouched(true)
        }}
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="ovulation-last-period" className="mb-2 block text-sm font-medium text-foreground">
              Fecha de inicio de la última regla
            </label>
            <input
              id="ovulation-last-period"
              type="date"
              value={lastPeriod}
              max={today.toISOString().slice(0, 10)}
              onChange={(event) => setLastPeriod(event.target.value)}
              onBlur={() => setTouched(true)}
              aria-describedby="ovulation-last-period-error"
              aria-invalid={touched && !isValid}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
            {touched && !isValid && (
              <p id="ovulation-last-period-error" role="alert" className="mt-2 text-xs text-red-600">
                {lastDate === null
                  ? 'Introduce la fecha de inicio de tu última regla para ver la estimación.'
                  : 'La fecha no puede ser futura. Revisa el dato introducido.'}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="ovulation-cycle-length" className="mb-2 block text-sm font-medium text-foreground">
              Duración media del ciclo (días)
            </label>
            <input
              id="ovulation-cycle-length"
              type="number"
              min={21}
              max={45}
              value={cycleLength}
              onChange={(event) => {
                const v = Number(event.target.value)
                if (!Number.isNaN(v)) setCycleLength(Math.min(45, Math.max(21, v)))
              }}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
          </div>
        </div>
      </form>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6" aria-live="polite" aria-atomic="true">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Estimación orientativa</h3>
        {result ? (
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Ovulación estimada</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{formatDate(result.ovulationDate)}</p>
            </div>
            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Ventana fértil posible</p>
              <p className="mt-2 text-base font-medium text-foreground">
                {formatDate(result.fertileStart)} – {formatDate(result.fertileEnd)}
              </p>
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
          La ovulación puede variar según cada persona y según el ciclo. Esta estimación es útil para observar patrones, pero no asegura que la ovulación ocurra exactamente en esa fecha.
        </p>
      </aside>
    </div>
  )
}
