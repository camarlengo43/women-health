import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildRoutine, exerciseCountFor } from '../src/lib/routines.ts'

const names = (r: ReturnType<typeof buildRoutine>) =>
  r.days.flatMap((d) => d.exercises.map((e) => e.name))

describe('nivel modifica dificultad/volumen/complejidad', () => {
  it('inicial vs intermedio cambian título, ejercicios y dosis', () => {
    const ini = buildRoutine('inicial', 'fuerza', 2, 30)
    const inter = buildRoutine('intermedio', 'fuerza', 2, 30)
    assert.notEqual(ini.title, inter.title)
    assert.ok(ini.title.includes('inicial'))
    assert.ok(inter.title.includes('intermedio'))
    // Volume: intermediate adds one exercise per session over beginner.
    assert.ok(inter.days[0].exercises.length > ini.days[0].exercises.length)
    // Complexity: different exercises (e.g. wall vs floor).
    assert.notDeepEqual(names(ini), names(inter))
    assert.notEqual(ini.progression.join('|'), inter.progression.join('|'))
  })
})

describe('objetivo modifica ejercicios y estructura', () => {
  it('cada objetivo produce ejercicios y enfoques distintos', () => {
    const goals = ['fuerza', 'cardio', 'movilidad', 'equilibrio', 'osea', 'general'] as const
    const seen = new Set<string>()
    for (const goal of goals) {
      const r = buildRoutine('inicial', goal, 3, 30)
      const key = names(r).join('|')
      assert.ok(!seen.has(key), `objetivo ${goal} debe producir ejercicios distintos`)
      seen.add(key)
      assert.ok(r.title.toLowerCase().includes(goal === 'cardio' ? 'cardiovascular' : goal === 'osea' ? 'ósea' : goal))
    }
  })
})

describe('días modifica la distribución semanal', () => {
  it('2/3/4/5 días generan ese número de sesiones con enfoques progresivos', () => {
    for (const days of [2, 3, 4, 5]) {
      const r = buildRoutine('inicial', 'fuerza', days, 30)
      assert.equal(r.days.length, days)
      assert.ok(r.summary.includes(`${days} días por semana`))
    }
    const two = buildRoutine('inicial', 'fuerza', 2, 30)
    const four = buildRoutine('inicial', 'fuerza', 4, 30)
    assert.notDeepEqual(
      two.days.map((d) => d.focus),
      four.days.map((d) => d.focus),
    )
  })
})

describe('duración modifica el volumen de las sesiones', () => {
  it('15/30/45/60 min cambian el nº de ejercicios por sesión', () => {
    const counts = [15, 30, 45, 60].map(
      (m) => buildRoutine('inicial', 'fuerza', 3, m).days[0].exercises.length,
    )
    for (let i = 1; i < counts.length; i += 1) {
      assert.ok(counts[i] >= counts[i - 1], `volumen debe crecer con la duración (${counts.join(',')})`)
    }
    assert.ok(counts[0] < counts[counts.length - 1], '15 min debe dar menos ejercicios que 60 min')
    assert.equal(exerciseCountFor(15, 'inicial'), 3)
    assert.equal(exerciseCountFor(60, 'inicial'), 6)
  })
})

describe('combinaciones representativas (§16)', () => {
  const combos = [
    ['inicial', 'fuerza', 2, 30],
    ['intermedio', 'fuerza', 4, 60],
    ['inicial', 'movilidad', 3, 15],
    ['intermedio', 'cardio', 5, 45],
    ['inicial', 'equilibrio', 2, 30],
    ['intermedio', 'osea', 3, 45],
  ] as const

  it('las 6 combinaciones generan rutinas coherentes y distintas en contenido', () => {
    const routines = combos.map(([level, goal, days, minutes]) =>
      buildRoutine(level, goal, days, minutes),
    )
    const seen = new Set<string>()
    for (const [index, r] of routines.entries()) {
      const [level, goal, days, minutes] = combos[index]
      assert.equal(r.days.length, days, `${level}/${goal}: nº de días`)
      assert.ok(r.summary.includes(`${minutes} min`), `${level}/${goal}: duración en resumen`)
      assert.ok(r.days.every((d) => d.exercises.length > 0), 'cada día tiene ejercicios')
      // Title alone is not enough: the content (exercises) must differ.
      const key = names(r).join('|')
      assert.ok(!seen.has(key), `combinación ${level}/${goal}/${days}d/${minutes}min debe diferir en ejercicios`)
      seen.add(key)
    }
  })

  it('fuerza 2d/30 inicial vs 4d/60 intermedio: más días y más volumen', () => {
    const light = buildRoutine('inicial', 'fuerza', 2, 30)
    const heavy = buildRoutine('intermedio', 'fuerza', 4, 60)
    assert.ok(heavy.days.length > light.days.length)
    assert.ok(
      heavy.days[0].exercises.length >= light.days[0].exercises.length,
      'más duración + intermedio no debe reducir el volumen',
    )
    assert.notDeepEqual(names(light), names(heavy))
  })
})
