'use client'

import { useMemo, useState } from 'react'

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function PregnancyCalculator() {
  const [lastPeriod, setLastPeriod] = useState('2026-05-18')

  const result = useMemo(() => {
    const lmp = new Date(lastPeriod)
    const gestationStart = new Date(lmp)
    const dueDate = new Date(lmp)
    dueDate.setDate(lmp.getDate() + 280)

    const today = new Date()
    const weeks = Math.max(0, Math.floor((today.getTime() - gestationStart.getTime()) / (1000 * 60 * 60 * 24 * 7)))
    const days = Math.max(0, Math.floor((today.getTime() - gestationStart.getTime()) / (1000 * 60 * 60 * 24)) % 7)

    return { dueDate, weeks, days }
  }, [lastPeriod])

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <label htmlFor="pregnancy-last-period" className="mb-2 block text-sm font-medium text-foreground">
          Fecha de inicio de la última regla
        </label>
        <input
          id="pregnancy-last-period"
          type="date"
          value={lastPeriod}
          onChange={(event) => setLastPeriod(event.target.value)}
          className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
        />
      </div>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Resultado orientativo</h3>
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

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Estos cálculos son orientativos y se basan en un embarazo de 40 semanas. Las fechas reales pueden variar según la persona y la evolución individual.
        </p>
      </aside>
    </div>
  )
}
