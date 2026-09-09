'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  GOAL_LABELS,
  buildRoutine,
  type RoutineGoal,
  type RoutineLevel,
  type RoutinePlan,
} from '@/lib/routines'

type Level = RoutineLevel
type Goal = RoutineGoal
type Routine = RoutinePlan

/**
 * Advisory routine generator.
 * General proposal based on level, goal, days, and duration.
 * Not an individual prescription. Everything runs in the browser,
 * with no registration or data storage.
 */
export function RoutineGenerator() {
  const [level, setLevel] = useState<Level>('inicial')
  const [goal, setGoal] = useState<Goal>('fuerza')
  const [days, setDays] = useState(2)
  const [minutes, setMinutes] = useState(30)

  const routine: Routine = useMemo(
    () => buildRoutine(level, goal, days, minutes),
    [level, goal, days, minutes],
  )

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="space-y-6">
          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-foreground">Nivel</legend>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Nivel">
              {(['inicial', 'intermedio'] as Level[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  role="radio"
                  aria-checked={level === l}
                  onClick={() => setLevel(l)}
                  className={cn(
                    'rounded-xl border px-3 py-2.5 text-sm font-medium capitalize transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    level === l
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/40'
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-foreground">Objetivo</legend>
            <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Objetivo">
              {(Object.keys(GOAL_LABELS) as Goal[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  role="radio"
                  aria-checked={goal === g}
                  onClick={() => setGoal(g)}
                  className={cn(
                    'rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    goal === g
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/40'
                  )}
                >
                  {GOAL_LABELS[g]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-foreground">Días por semana</legend>
            <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Días por semana">
              {[2, 3, 4, 5].map((d) => (
                <button
                  key={d}
                  type="button"
                  role="radio"
                  aria-checked={days === d}
                  onClick={() => setDays(d)}
                  className={cn(
                    'rounded-xl border px-3 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    days === d
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/40'
                  )}
                >
                  {d}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-foreground">Duración por sesión</legend>
            <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Duración por sesión">
              {[15, 30, 45, 60].map((m) => (
                <button
                  key={m}
                  type="button"
                  role="radio"
                  aria-checked={minutes === m}
                  onClick={() => setMinutes(m)}
                  className={cn(
                    'rounded-xl border px-2 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    minutes === m
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-accent/40'
                  )}
                >
                  {m} min
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6" aria-live="polite" aria-atomic="true">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Propuesta general (no es una prescripción individual)</p>
        <h3 className="mt-2 text-2xl font-semibold capitalize text-foreground">{routine.title}</h3>
        <p className="mt-2 text-sm text-accent font-medium">{routine.summary}</p>

        <h4 className="mt-6 text-sm font-semibold text-foreground">Calentamiento (5–10 min)</h4>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          {routine.warmup.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {routine.days.map((day) => (
          <div key={day.day} className="mt-5 rounded-xl bg-card p-4">
            <p className="text-sm font-semibold text-foreground">
              {day.day} · <span className="font-normal text-muted-foreground">{day.focus}</span>
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {day.exercises.map((ex) => (
                <li key={`${day.day}-${ex.name}`} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-foreground">{ex.name}.</strong> {ex.dose}. {ex.rest}.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h4 className="mt-6 text-sm font-semibold text-foreground">Vuelta a la calma</h4>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          {routine.cooldown.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold text-foreground">Cómo progresar</h4>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          {routine.progression.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Propuesta general orientativa. No sustituye una valoración profesional ni constituye una prescripción individual.
          Con fines educativos: no sustituye la valoración de un profesional del ejercicio o de la salud, especialmente si hay
          lesiones, dolor persistente o enfermedades crónicas.
        </p>
      </aside>
    </div>
  )
}
