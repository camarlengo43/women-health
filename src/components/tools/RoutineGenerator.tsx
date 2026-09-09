'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type Level = 'inicial' | 'intermedio'
type Goal = 'fuerza' | 'cardio' | 'movilidad' | 'equilibrio' | 'osea' | 'general'

const GOAL_LABELS: Record<Goal, string> = {
  fuerza: 'Fuerza',
  cardio: 'Salud cardiovascular',
  movilidad: 'Movilidad',
  equilibrio: 'Equilibrio',
  osea: 'Salud ósea',
  general: 'General',
}

interface Exercise {
  name: string
  dose: string
  rest: string
}

interface DayPlan {
  day: string
  focus: string
  exercises: Exercise[]
}

interface Routine {
  title: string
  summary: string
  warmup: string[]
  days: DayPlan[]
  cooldown: string[]
  progression: string[]
}

const WARMUPS: Record<Goal, { inicial: string[]; intermedio: string[] }> = {
  fuerza: {
    inicial: ['Marcha en el sitio 2 min', 'Círculos de hombros y cadera 1 min', 'Sentadillas sin peso 8 repeticiones'],
    intermedio: ['Marcha con rodillas altas 2 min', 'Sentadillas con peso corporal 12 repeticiones', 'Plancha de antebrazos 20 s'],
  },
  cardio: {
    inicial: ['Caminata suave 3 min aumentando el ritmo', 'Movilidad de tobillos y cadera 1 min'],
    intermedio: ['Caminata enérgica 3 min', 'Saltos suaves o step 30 s + pausa 30 s (x2)'],
  },
  movilidad: {
    inicial: ['Respiración diafragmática 1 min', 'Caminata suave 2 min'],
    intermedio: ['Respiración diafragmática 1 min', 'Gato-vaca 8 repeticiones'],
  },
  equilibrio: {
    inicial: ['Marcha en el sitio 2 min', 'Círculos de tobillo 30 s por pie'],
    intermedio: ['Marcha con talones y puntas 2 min', 'Apoyo monopodal 15 s por pierna'],
  },
  osea: {
    inicial: ['Caminata suave 3 min', 'Sentadillas sin peso 8 repeticiones'],
    intermedio: ['Caminata enérgica 3 min', 'Sentadillas 12 repeticiones + talones elevados 10 repeticiones'],
  },
  general: {
    inicial: ['Marcha en el sitio 2 min', 'Círculos de hombros y cadera 1 min'],
    intermedio: ['Caminata enérgica 2 min', 'Sentadillas 10 repeticiones + plancha 20 s'],
  },
}

const EXERCISES: Record<Goal, { inicial: Exercise[]; intermedio: Exercise[] }> = {
  fuerza: {
    inicial: [
      { name: 'Sentadilla con peso corporal o silla', dose: '2 series × 8–10 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Flexiones de pared', dose: '2 series × 8–12 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Remo con banda elástica', dose: '2 series × 10–12 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Peso muerto con mancuerna ligera o mochila', dose: '2 series × 8–10 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Plancha de rodillas', dose: '2 series × 15–20 s', rest: 'Descanso 45 s' },
      { name: 'Zancada estática asistida (mano en pared)', dose: '2 series × 6 por pierna', rest: 'Descanso 60 s' },
      { name: 'Press de hombros con banda ligera', dose: '2 series × 10 repeticiones', rest: 'Descanso 60 s' },
    ],
    intermedio: [
      { name: 'Sentadilla goblet con mancuerna', dose: '3–4 series × 8–12 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Flexiones de suelo (o rodillas)', dose: '3 series × 8–15 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Remo a una mano con mancuerna', dose: '3 series × 10 por lado', rest: 'Descanso 45–60 s' },
      { name: 'Peso muerto rumano con mancuernas', dose: '3 series × 10–12 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Plancha frontal', dose: '3 series × 25–40 s', rest: 'Descanso 45 s' },
      { name: 'Zancadas caminando', dose: '3 series × 8 por pierna', rest: 'Descanso 60 s' },
      { name: 'Press militar con mancuernas', dose: '3 series × 8–10 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Hip thrust en silla', dose: '3 series × 12–15 repeticiones', rest: 'Descanso 60 s' },
    ],
  },
  cardio: {
    inicial: [
      { name: 'Caminata enérgica', dose: 'Intervalos de 3 min suaves + 1 min enérgico', rest: 'Sin pausas largas; ritmo conversacional' },
      { name: 'Step o escalones bajos', dose: '3 bloques × 2 min', rest: 'Pausa 1 min entre bloques' },
      { name: 'Bicicleta estática suave', dose: '10–15 min a ritmo cómodo', rest: 'Hidratación al terminar cada bloque' },
      { name: 'Baile o marcha con brazos', dose: '2 bloques × 3 min', rest: 'Pausa 1 min entre bloques' },
    ],
    intermedio: [
      { name: 'Caminata rápida con cuestas', dose: 'Intervalos 2 min enérgico + 1 min suave (x6–8)', rest: 'Recuperación activa caminando' },
      { name: 'Bicicleta con cambios de ritmo', dose: '20–30 min con 6 aceleraciones de 30 s', rest: 'Pedaleo suave entre aceleraciones' },
      { name: 'Circuito cardio-fuerza ligera', dose: '4 estaciones × 40 s de trabajo / 20 s pausa (x3 vueltas)', rest: '1–2 min entre vueltas' },
      { name: 'Subir escaleras', dose: '5–8 subidas a ritmo constante', rest: 'Bajada caminando como recuperación' },
    ],
  },
  movilidad: {
    inicial: [
      { name: 'Gato-vaca de columna', dose: '2 series × 8 repeticiones lentas', rest: 'Respiración tranquila entre series' },
      { name: 'Apertura de cadera tumbada (90/90 suave)', dose: '2 series × 30 s por lado', rest: 'Sin dolor; rango cómodo' },
      { name: 'Estiramiento de pectoral en marco de puerta', dose: '2 series × 25 s por lado', rest: 'Respiración profunda' },
      { name: 'Movilidad de tobillo contra pared', dose: '2 series × 8 por pie', rest: 'Apoyo estable' },
    ],
    intermedio: [
      { name: 'Secuencia gato-vaca + hilo-aguja', dose: '3 rondas × 6 repeticiones por movimiento', rest: 'Respiración nasal lenta' },
      { name: 'Sentadilla profunda asistida', dose: '3 series × 30–45 s', rest: 'Agarrada a puerta o TRX' },
      { name: 'Apertura torácica en suelo', dose: '3 series × 6 por lado', rest: 'Movimiento controlado' },
      { name: 'Zancada con rotación', dose: '3 series × 6 por lado', rest: 'Sin forzar la rodilla' },
      { name: 'Puente de glúteos con pausa', dose: '3 series × 10 con 3 s de pausa', rest: 'Descanso 45 s' },
    ],
  },
  equilibrio: {
    inicial: [
      { name: 'Apoyo monopodal con mano en pared', dose: '3 series × 15–20 s por pierna', rest: 'Descanso 30 s' },
      { name: 'Caminata en tándem (talón-punta)', dose: '4 recorridos × 5 pasos', rest: 'Cerca de un apoyo seguro' },
      { name: 'Elevación de talones con apoyo', dose: '3 series × 10 repeticiones', rest: 'Descanso 30 s' },
      { name: 'Marcha lateral con apoyo visual', dose: '3 series × 8 pasos por lado', rest: 'Superficie estable y despejada' },
    ],
    intermedio: [
      { name: 'Apoyo monopodal sin manos + giro de cabeza', dose: '3 series × 20–30 s por pierna', rest: 'Descanso 30 s' },
      { name: 'Tándem con ojos semicerrados (solo si es seguro)', dose: '4 series × 10 pasos', rest: 'Junto a pared o barandilla' },
      { name: 'Sentadilla a una pierna asistida (cajón)', dose: '3 series × 6 por pierna', rest: 'Descanso 45 s' },
      { name: 'Caminata hacia atrás en línea', dose: '4 recorridos × 8 pasos', rest: 'Espacio despejado y con apoyo cercano' },
      { name: 'Elevación de talones a una pierna', dose: '3 series × 8 por pierna', rest: 'Descanso 30 s' },
    ],
  },
  osea: {
    inicial: [
      { name: 'Sentadilla con peso corporal', dose: '2 series × 8–10 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Marcha enérgica con impacto leve', dose: '10–15 min acumulados', rest: 'Calzado con amortiguación' },
      { name: 'Remo con banda elástica', dose: '2 series × 10–12 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Apoyo monopodal con apoyo', dose: '3 series × 15 s por pierna', rest: 'Descanso 30 s' },
      { name: 'Puente de glúteos', dose: '2 series × 10 repeticiones', rest: 'Descanso 45 s' },
    ],
    intermedio: [
      { name: 'Sentadilla goblet', dose: '3 series × 8–12 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Marcha con cuestas o pequeños saltos (si procede)', dose: '8–12 min acumulados', rest: 'Superficie estable; sin dolor articular' },
      { name: 'Peso muerto rumano', dose: '3 series × 10 repeticiones', rest: 'Descanso 60–90 s' },
      { name: 'Zancadas', dose: '3 series × 8 por pierna', rest: 'Descanso 60 s' },
      { name: 'Plancha frontal', dose: '3 series × 25–40 s', rest: 'Descanso 45 s' },
      { name: 'Elevación de talones con peso', dose: '3 series × 12 repeticiones', rest: 'Descanso 45 s' },
    ],
  },
  general: {
    inicial: [
      { name: 'Caminata enérgica', dose: '10–15 min a ritmo conversacional', rest: 'Hidratación al terminar' },
      { name: 'Sentadilla con peso corporal', dose: '2 series × 8–10 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Flexiones de pared', dose: '2 series × 8–10 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Gato-vaca de columna', dose: '1 serie × 8 repeticiones', rest: 'Respiración tranquila' },
      { name: 'Apoyo monopodal con apoyo', dose: '2 series × 15 s por pierna', rest: 'Descanso 30 s' },
    ],
    intermedio: [
      { name: 'Caminata rápida o bici suave', dose: '15–20 min con 4 aceleraciones cortas', rest: 'Recuperación activa' },
      { name: 'Sentadilla goblet', dose: '3 series × 10 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Flexiones de suelo o rodillas', dose: '3 series × 8–12 repeticiones', rest: 'Descanso 60 s' },
      { name: 'Remo con banda o mancuerna', dose: '3 series × 10 repeticiones', rest: 'Descanso 45 s' },
      { name: 'Plancha frontal', dose: '2 series × 25–30 s', rest: 'Descanso 45 s' },
      { name: 'Movilidad de cadera y hombros', dose: '5 min de secuencia suave', rest: 'Sin dolor' },
    ],
  },
}

const DAY_FOCUS: Record<Goal, string[]> = {
  fuerza: ['Tren inferior + core', 'Tren superior + core', 'Cuerpo completo', 'Tren inferior + tren superior'],
  cardio: ['Base aeróbica', 'Intervalos suaves', 'Sesión continua', 'Mixta cardio + movilidad'],
  movilidad: ['Columna y cadera', 'Hombros y zona torácica', 'Cuerpo completo', 'Cadera y tobillos'],
  equilibrio: ['Base monopodal', 'Marcha y coordinación', 'Fuerza de apoyo', 'Integración y confianza'],
  osea: ['Carga de tren inferior', 'Carga de tren superior + equilibrio', 'Impacto moderado + fuerza', 'Cuerpo completo'],
  general: ['Fuerza suave + caminata', 'Cardio + movilidad', 'Fuerza + equilibrio', 'Sesión completa'],
}

const COOLDOWN = [
  'Caminata suave 2–3 min para bajar pulsaciones',
  'Estiramientos suaves de piernas, espalda y hombros (20–30 s cada uno)',
  'Respiración lenta 1 min',
]

const PROGRESSION: Record<Level, string[]> = {
  inicial: [
    'Aumenta primero las repeticiones o el tiempo antes de añadir peso o impacto.',
    'Cuando completes todas las series con buena técnica dos sesiones seguidas, sube un escalón (una serie más o un poco más de carga).',
    'Deja al menos un día de descanso entre sesiones de fuerza del mismo grupo muscular.',
  ],
  intermedio: [
    'Progresa añadiendo una serie, un poco más de carga o reduciendo ligeramente los descansos, no todo a la vez.',
    'Cada 3–4 semanas incluye una semana más suave para recuperarte.',
    'Si aparece dolor articular o muy localizado, reduce la carga y consulta a un profesional si persiste.',
  ],
}

function exerciseCountFor(minutes: number, level: Level): number {
  const base = minutes <= 15 ? 3 : minutes <= 30 ? 4 : minutes <= 45 ? 5 : 6
  return level === 'intermedio' ? base + 1 : base
}

/**
 * Generador de rutinas orientativas.
 * Propuesta general según nivel, objetivo, días y duración.
 * No es una prescripción individual. Todo funciona en el navegador,
 * sin registro ni almacenamiento de datos.
 */
export function RoutineGenerator() {
  const [level, setLevel] = useState<Level>('inicial')
  const [goal, setGoal] = useState<Goal>('fuerza')
  const [days, setDays] = useState(2)
  const [minutes, setMinutes] = useState(30)

  const routine: Routine = useMemo(() => {
    const pool = EXERCISES[goal][level]
    const count = Math.min(exerciseCountFor(minutes, level), pool.length)
    const focusList = DAY_FOCUS[goal]

    const dayPlans: DayPlan[] = Array.from({ length: days }, (_, i) => {
      const focus = focusList[i % focusList.length]
      // Rotar el punto de partida para que cada día combine ejercicios distintos
      const start = (i * 2) % pool.length
      const rotated = [...pool.slice(start), ...pool.slice(0, start)]
      return {
        day: `Día ${i + 1}`,
        focus,
        exercises: rotated.slice(0, count),
      }
    })

    return {
      title: `Rutina ${GOAL_LABELS[goal].toLowerCase()} · nivel ${level}`,
      summary: `${days} días por semana · sesiones de unos ${minutes} min · enfoque: ${focusList.slice(0, days).join(' / ')}.`,
      warmup: WARMUPS[goal][level],
      days: dayPlans,
      cooldown: COOLDOWN,
      progression: PROGRESSION[level],
    }
  }, [level, goal, days, minutes])

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
