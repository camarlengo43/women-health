'use client'

import { useMemo, useState } from 'react'
import {
  MAX_CYCLE_LENGTH,
  MIN_CYCLE_LENGTH,
  calcOvulationEstimate,
  getCycleLengthError,
  parseDateOnly,
  parseNumericInput,
  validateCycleLength,
} from '@/lib/health-calculations'
import { NumericComboField } from './NumericComboField'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Ovulation calculator.
 * - Empty initial state: no results until the user enters
 *   valid data and presses "Calculate".
 * - Numeric field with manual entry + picker: typing, clearing,
 *   pasting, or picking update the same text state.
 * Everything is computed in the browser, without storing or sending data.
 */
export function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState('')
  const [cycleLengthRaw, setCycleLengthRaw] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Any change after calculating invalidates the previous result:
  // the user must press "Calculate" again. The initial state is
  // empty (result = null) until the first explicit calculation.

  const lastDate = useMemo(() => parseDateOnly(lastPeriod), [lastPeriod])
  const today = useMemo(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }, [])
  const isFuture = lastDate !== null && lastDate.getTime() > today.getTime()
  const isDateValid = lastDate !== null && !isFuture

  const cycleValue = parseNumericInput(cycleLengthRaw)
  const isCycleValid = validateCycleLength(cycleValue)
  const isValid = isDateValid && isCycleValid
  const cycleError = getCycleLengthError(cycleLengthRaw)
  const showErrors = submitted

  const result = useMemo(() => {
    if (!submitted || !isValid) return null
    return calcOvulationEstimate(lastPeriod, cycleValue as number, today)
  }, [submitted, isValid, lastPeriod, cycleValue, today])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        className="rounded-2xl border border-border bg-card p-6 shadow-card"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
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
              onChange={(event) => {
                setSubmitted(false)
                setLastPeriod(event.target.value)
              }}
              aria-describedby="ovulation-last-period-error"
              aria-invalid={showErrors && !isDateValid}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
            {showErrors && !isDateValid && (
              <p id="ovulation-last-period-error" role="alert" className="mt-2 text-xs text-red-600">
                {lastDate === null
                  ? 'Introduce la fecha de inicio de tu última regla para ver la estimación.'
                  : 'La fecha no puede ser futura. Revisa el dato introducido.'}
              </p>
            )}
          </div>

          <NumericComboField
            id="ovulation-cycle-length"
            label="Duración media del ciclo (días)"
            value={cycleLengthRaw}
            onChange={(value) => {
              setSubmitted(false)
              setCycleLengthRaw(value)
            }}
            min={MIN_CYCLE_LENGTH}
            max={MAX_CYCLE_LENGTH}
            placeholder="Ej.: 28"
            hint={`Entre ${MIN_CYCLE_LENGTH} y ${MAX_CYCLE_LENGTH} días. Puedes escribir el valor, pegarlo o elegirlo en la lista.`}
            error={showErrors ? cycleError : null}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Calcular estimación
          </button>
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
              {showErrors && !isValid
                ? 'Revisa los datos marcados: hay valores vacíos o fuera del rango válido y no se puede calcular.'
                : 'Todavía no hay resultados. Introduce la fecha de inicio de tu última regla y la duración del ciclo, y pulsa «Calcular estimación». Tus datos no se guardan ni se envían a ningún servidor.'}
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
