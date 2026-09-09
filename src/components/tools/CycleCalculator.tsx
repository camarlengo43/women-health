'use client'

import { useMemo, useState } from 'react'
import {
  MAX_CYCLE_LENGTH,
  MAX_PERIOD_LENGTH,
  MIN_CYCLE_LENGTH,
  MIN_PERIOD_LENGTH,
  calcCycleEstimate,
  getCycleLengthError,
  getPeriodLengthError,
  parseDateOnly,
  parseNumericInput,
  validateCycleLength,
  validatePeriodLength,
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
 * Menstrual cycle calculator.
 * - Empty initial state: no numeric field has a default value
 *   and no result is shown until the user enters valid
 *   data and presses "Calculate".
 * - Numeric fields with manual entry + picker (datalist): typing,
 *   clearing, pasting, or picking update the same text state.
 * - Centralized validation in `@/lib/health-calculations`, not just in HTML.
 * Everything is computed in the browser, without storing or sending data.
 */
export function CycleCalculator() {
  const [lastPeriod, setLastPeriod] = useState('')
  const [cycleLengthRaw, setCycleLengthRaw] = useState('')
  const [periodLengthRaw, setPeriodLengthRaw] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Any change after calculating invalidates the previous result:
  // the user must press "Calculate" again.
  const handleLastPeriodChange = (value: string) => {
    setSubmitted(false)
    setLastPeriod(value)
  }
  const handleCycleChange = (value: string) => {
    setSubmitted(false)
    setCycleLengthRaw(value)
  }
  const handlePeriodChange = (value: string) => {
    setSubmitted(false)
    setPeriodLengthRaw(value)
  }

  const lastDate = useMemo(() => parseDateOnly(lastPeriod), [lastPeriod])
  const today = useMemo(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }, [])
  const isFuture = lastDate !== null && lastDate.getTime() > today.getTime()
  const isDateValid = lastDate !== null && !isFuture

  const cycleValue = parseNumericInput(cycleLengthRaw)
  const periodValue = parseNumericInput(periodLengthRaw)
  const isCycleValid = validateCycleLength(cycleValue)
  const isPeriodValid = validatePeriodLength(periodValue)
  const isValid = isDateValid && isCycleValid && isPeriodValid

  const cycleError = getCycleLengthError(cycleLengthRaw)
  const periodError = getPeriodLengthError(periodLengthRaw)
  const showErrors = submitted

  const result = useMemo(() => {
    if (!submitted || !isValid) return null
    const estimate = calcCycleEstimate(lastPeriod, cycleValue as number, today)
    if (!estimate) return null
    return {
      nextPeriodDate: estimate.nextPeriodDate,
      ovulationDate: estimate.ovulationDate,
      fertileStart: estimate.fertileStart,
      fertileEnd: estimate.fertileEnd,
      cycleAverage: cycleValue as number,
      periodAverage: periodValue as number,
    }
  }, [submitted, isValid, lastPeriod, cycleValue, periodValue, today])

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
            <label htmlFor="lastPeriod" className="mb-2 block text-sm font-medium text-foreground">
              Fecha de inicio de la última regla
            </label>
            <input
              id="lastPeriod"
              type="date"
              value={lastPeriod}
              max={today.toISOString().slice(0, 10)}
              onChange={(e) => handleLastPeriodChange(e.target.value)}
              aria-describedby="lastPeriod-error"
              aria-invalid={showErrors && !isDateValid}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
            {showErrors && !isDateValid && (
              <p id="lastPeriod-error" role="alert" className="mt-2 text-xs text-red-600">
                {lastDate === null
                  ? 'Introduce la fecha de inicio de tu última regla para ver la estimación.'
                  : 'La fecha no puede ser futura. Revisa el dato introducido.'}
              </p>
            )}
          </div>

          <NumericComboField
            id="cycleLength"
            label="Duración media del ciclo (días)"
            value={cycleLengthRaw}
            onChange={handleCycleChange}
            min={MIN_CYCLE_LENGTH}
            max={MAX_CYCLE_LENGTH}
            placeholder="Ej.: 28"
            hint={`Entre ${MIN_CYCLE_LENGTH} y ${MAX_CYCLE_LENGTH} días. Puedes escribir el valor, pegarlo o elegirlo en la lista.`}
            error={showErrors ? cycleError : null}
          />

          <NumericComboField
            id="periodLength"
            label="Duración media de la regla (días)"
            value={periodLengthRaw}
            onChange={handlePeriodChange}
            min={MIN_PERIOD_LENGTH}
            max={MAX_PERIOD_LENGTH}
            placeholder="Ej.: 5"
            hint={`Entre ${MIN_PERIOD_LENGTH} y ${MAX_PERIOD_LENGTH} días. Puedes escribir el valor, pegarlo o elegirlo en la lista.`}
            error={showErrors ? periodError : null}
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
              {showErrors && !isValid
                ? 'Revisa los datos marcados: hay valores vacíos o fuera del rango válido y no se puede calcular.'
                : 'Todavía no hay resultados. Introduce la fecha de inicio de tu última regla y las duraciones, y pulsa «Calcular estimación». Tus datos no se guardan ni se envían a ningún servidor.'}
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
