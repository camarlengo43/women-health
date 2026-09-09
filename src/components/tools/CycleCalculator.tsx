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
 * Calculadora del ciclo menstrual.
 * Estado inicial vacío: no muestra resultados hasta que la usuaria
 * introduce una fecha válida. No almacena ni envía ningún dato:
 * todo se calcula en el navegador.
 */
export function CycleCalculator() {
  const [lastPeriod, setLastPeriod] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [periodLength, setPeriodLength] = useState(5)
  const [touched, setTouched] = useState(false)

  const lastDate = useMemo(() => parseDateOnly(lastPeriod), [lastPeriod])
  const today = useMemo(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }, [])
  const isFuture = lastDate !== null && lastDate.getTime() > today.getTime()
  const isValid = lastDate !== null && !isFuture

  const result = useMemo(() => {
    if (!isValid || !lastDate) return null
    const nextPeriodDate = new Date(lastDate)
    nextPeriodDate.setDate(lastDate.getDate() + cycleLength)

    const ovulationDate = new Date(lastDate)
    ovulationDate.setDate(lastDate.getDate() + cycleLength - 14)

    const fertileStart = new Date(ovulationDate)
    fertileStart.setDate(ovulationDate.getDate() - 5)

    const fertileEnd = new Date(ovulationDate)
    fertileEnd.setDate(ovulationDate.getDate() + 1)

    return {
      nextPeriodDate,
      ovulationDate,
      fertileStart,
      fertileEnd,
      cycleAverage: cycleLength,
      periodAverage: periodLength,
    }
  }, [cycleLength, lastDate, periodLength, isValid])

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
            <label htmlFor="lastPeriod" className="mb-2 block text-sm font-medium text-foreground">
              Fecha de inicio de la última regla
            </label>
            <input
              id="lastPeriod"
              type="date"
              value={lastPeriod}
              max={today.toISOString().slice(0, 10)}
              onChange={(e) => setLastPeriod(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-describedby="lastPeriod-error"
              aria-invalid={touched && !isValid}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
            {touched && !isValid && (
              <p id="lastPeriod-error" role="alert" className="mt-2 text-xs text-red-600">
                {lastDate === null
                  ? 'Introduce la fecha de inicio de tu última regla para ver la estimación.'
                  : 'La fecha no puede ser futura. Revisa el dato introducido.'}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="cycleLength" className="mb-2 block text-sm font-medium text-foreground">
              Duración media del ciclo (días)
            </label>
            <input
              id="cycleLength"
              type="number"
              min={21}
              max={45}
              value={cycleLength}
              onChange={(e) => {
                const v = Number(e.target.value)
                if (!Number.isNaN(v)) setCycleLength(Math.min(45, Math.max(21, v)))
              }}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="periodLength" className="mb-2 block text-sm font-medium text-foreground">
              Duración media de la regla (días)
            </label>
            <input
              id="periodLength"
              type="number"
              min={2}
              max={10}
              value={periodLength}
              onChange={(e) => {
                const v = Number(e.target.value)
                if (!Number.isNaN(v)) setPeriodLength(Math.min(10, Math.max(2, v)))
              }}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
          </div>
        </div>
      </form>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6" aria-live="polite" aria-atomic="true">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Resultado orientativo</h3>

        {result ? (
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Próxima regla</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{formatDate(result.nextPeriodDate)}</p>
            </div>

            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Ventana de ovulación</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{formatDate(result.ovulationDate)}</p>
            </div>

            <div className="rounded-xl bg-card p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Fertilidad posible</p>
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
          Este cálculo es una estimación útil para entender patrones generales, pero no puede predecir con certeza la ovulación ni diagnosticar cambios hormonales.
        </p>
      </aside>
    </div>
  )
}
