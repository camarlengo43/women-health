'use client'

import { useMemo, useState } from 'react'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function CycleCalculator() {
  const [lastPeriod, setLastPeriod] = useState('2026-07-06')
  const [cycleLength, setCycleLength] = useState(28)
  const [periodLength, setPeriodLength] = useState(5)

  const result = useMemo(() => {
    const lastDate = new Date(lastPeriod)
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
  }, [cycleLength, lastPeriod, periodLength])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="space-y-5">
          <div>
            <label htmlFor="lastPeriod" className="mb-2 block text-sm font-medium text-foreground">
              Fecha de inicio de la última regla
            </label>
            <input
              id="lastPeriod"
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
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
              onChange={(e) => setCycleLength(Number(e.target.value || 28))}
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
              onChange={(e) => setPeriodLength(Number(e.target.value || 5))}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
            />
          </div>
        </div>
      </form>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Resultado orientativo</h3>

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

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Este cálculo es una estimación útil para entender patrones generales, pero no puede predecir con certeza la ovulación ni diagnosticar cambios hormonales.
        </p>
      </aside>
    </div>
  )
}
