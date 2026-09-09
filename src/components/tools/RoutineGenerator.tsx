'use client'

import { useMemo, useState } from 'react'

const goals = {
  fuerza: 'Fuerza y tono muscular',
  energia: 'Energía y resistencia',
  movilidad: 'Movilidad y recuperación',
  bienestar: 'Bienestar general',
}

const dayMap = {
  2: '2 días/semana',
  3: '3 días/semana',
  4: '4 días/semana',
  5: '5 días/semana',
}

export function RoutineGenerator() {
  const [goal, setGoal] = useState<'fuerza' | 'energia' | 'movilidad' | 'bienestar'>('fuerza')
  const [weeks, setWeeks] = useState(3)
  const [minutes, setMinutes] = useState(30)

  const routine = useMemo(() => {
    const goalLabel = goals[goal]
    const base = [
      'Calentamiento de 5–10 minutos',
      'Trabajo principal con intensidad moderada',
      'Ejercicios de movilidad o recuperación',
      'Enfriamiento y estiramientos suaves',
    ]

    if (goal === 'fuerza') {
      return {
        title: 'Rutina de fuerza funcional',
        items: [
          'Sentadillas o peso corporal',
          'Peso muerto o remos suaves',
          'Flexiones de pared o press de hombros',
          'Plancha de core con pausas',
          'Movimiento de equilibrio y estabilidad',
        ],
        note: `${goalLabel} con enfoque en fuerza, estabilidad y resistencia.`,
      }
    }

    if (goal === 'energia') {
      return {
        title: 'Rutina de resistencia y energía',
        items: [
          'Marcha o bicicleta suave',
          'Intervalos cortos de esfuerzo moderado',
          'Trabajos de core o fuerza ligera',
          'Movilidad de cadera y espalda',
        ],
        note: `${goalLabel} con sesiones más dinámicas y de duración variable.`,
      }
    }

    if (goal === 'movilidad') {
      return {
        title: 'Rutina de movilidad',
        items: [
          'Movilidad de tobillo y cadera',
          'Rango de movimiento de hombros',
          'Estiramientos suaves de espalda y cadena posterior',
          'Respiración y relajación',
        ],
        note: `${goalLabel} orientada a recuperar libertad de movimiento y reducir rigidez.`,
      }
    }

    return {
      title: 'Rutina de bienestar general',
      items: [
        'Calentamiento general',
        'Trabajo de fuerza ligera',
        'Activación del core',
        'Cardio suave o caminata',
        'Relajación final',
      ],
      note: `${goalLabel} para mantener energía, descanso y sensación de bienestar.`,
    }
  }, [goal])

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
        <div className="space-y-5">
          <div>
            <label htmlFor="goal" className="mb-2 block text-sm font-medium text-foreground">Objetivo</label>
            <select
              id="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value as 'fuerza' | 'energia' | 'movilidad' | 'bienestar')}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            >
              <option value="fuerza">Fuerza</option>
              <option value="energia">Energía</option>
              <option value="movilidad">Movilidad</option>
              <option value="bienestar">Bienestar general</option>
            </select>
          </div>

          <div>
            <label htmlFor="weeks" className="mb-2 block text-sm font-medium text-foreground">Días por semana</label>
            <input
              id="weeks"
              type="number"
              min={2}
              max={5}
              value={weeks}
              onChange={(event) => setWeeks(Number(event.target.value || 3))}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="minutes" className="mb-2 block text-sm font-medium text-foreground">Duración estimada (minutos)</label>
            <input
              id="minutes"
              type="number"
              min={15}
              max={60}
              value={minutes}
              onChange={(event) => setMinutes(Number(event.target.value || 30))}
              className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      <aside className="rounded-2xl border border-border bg-muted/40 p-6">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Propuesta orientativa</p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">{routine.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{routine.note}</p>
        <p className="mt-4 text-sm text-accent font-medium">{dayMap[weeks as keyof typeof dayMap]} • {minutes} minutos</p>

        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {routine.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
