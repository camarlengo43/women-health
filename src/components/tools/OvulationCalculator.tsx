'use client'

import { useMemo, useState } from 'react'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState('2026-08-12')
  const [cycleLength, setCycleLength] = useState(28)

  const result = useMemo(() => {
    const lastDate = new Date(lastPeriod)
    const ovulationDate = new Date(lastDate)
    ovulationDate.setDate(lastDate.getDate() + cycleLength - 14)

    const fertileStart = new Date(ovulationDate)
    fertileStart.setDate(ovulationDate.getDate() - 5)

    const fertileEnd = new Date(ovulationDate)
    fertileEnd.setDate(ovulationDate.getDate() + 1)

    return { ovulationDate, fertileStart, fertileEnd }
  }, [cycleLength, lastPeriod])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="space-y-5">
          <div>
            <label htmlFor="ovulation-last-period" className="mb-2 block text-sm font-medium text-foreground">
              Fecha de inicio de la última regla
            </label>
            <input
              id="ovulation-last-period"
              type="date"
              value={lastPeriod}
              onChange={(event) => setLastPeriod(event.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
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
              onChange={(event) => setCycleLength(Number(event.target.value || 28))}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Estimación orientativa</h3>
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

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          La ovulación puede variar según cada persona y según el ciclo. Esta estimación es útil para observar patrones, pero no asegura que la ovulación ocurra exactamente en esa fecha.
        </p>
      </aside>
    </div>
  )
}
