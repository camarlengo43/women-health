import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  MAX_CYCLE_LENGTH,
  MAX_PERIOD_LENGTH,
  MIN_CYCLE_LENGTH,
  MIN_PERIOD_LENGTH,
  calcCycleEstimate,
  getCycleLengthError,
  getNumericFieldStatus,
  getPeriodLengthError,
  parseNumericInput,
  validateCycleLength,
  validatePeriodLength,
} from '../src/lib/health-calculations.ts'

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d)

/**
 * Tests obligatorios: campos numéricos con input manual + selector.
 * Ambas vías escriben el mismo estado en texto; la validación centralizada
 * decide si se puede calcular. Nunca se calcula con valores inválidos ni NaN.
 */
describe('entrada manual: valores válidos', () => {
  it('28 → válido (ciclo)', () => {
    assert.equal(parseNumericInput('28'), 28)
    assert.equal(validateCycleLength(parseNumericInput('28')), true)
    assert.equal(getCycleLengthError('28'), null)
  })

  it('30 → válido (ciclo)', () => {
    assert.equal(parseNumericInput('30'), 30)
    assert.equal(validateCycleLength(parseNumericInput('30')), true)
    assert.equal(getCycleLengthError('30'), null)
  })

  it('5 → válido (regla)', () => {
    assert.equal(parseNumericInput('5'), 5)
    assert.equal(validatePeriodLength(parseNumericInput('5')), true)
    assert.equal(getPeriodLengthError('5'), null)
  })

  it('permite borrar y reescribir: "28" → "" → "30"', () => {
    let raw = '28'
    assert.equal(validateCycleLength(parseNumericInput(raw)), true)
    raw = ''
    assert.equal(getNumericFieldStatus(raw), 'empty')
    raw = '30'
    assert.equal(parseNumericInput(raw), 30)
    assert.equal(validateCycleLength(parseNumericInput(raw)), true)
  })
})

describe('entrada inválida: muestra error y no calcula', () => {
  it('10 → error (ciclo fuera de rango)', () => {
    assert.equal(validateCycleLength(parseNumericInput('10')), false)
    assert.ok(getCycleLengthError('10')?.includes('21') && getCycleLengthError('10')?.includes('45'))
    assert.equal(calcCycleEstimate('2026-01-01', parseNumericInput('10') as number, day(2026, 1, 10)), null)
  })

  it('100 → error (ciclo fuera de rango)', () => {
    assert.equal(validateCycleLength(parseNumericInput('100')), false)
    assert.ok(getCycleLengthError('100'))
    assert.equal(calcCycleEstimate('2026-01-01', parseNumericInput('100') as number, day(2026, 1, 10)), null)
  })

  it('1 y 20 → error (regla fuera de rango 2–10)', () => {
    assert.equal(validatePeriodLength(parseNumericInput('1')), false)
    assert.equal(validatePeriodLength(parseNumericInput('20')), false)
    assert.ok(getPeriodLengthError('1'))
  })
})

describe('campo vacío: no mostrar resultado', () => {
  it('"" → estado vacío, sin cálculo', () => {
    assert.equal(getNumericFieldStatus(''), 'empty')
    assert.equal(parseNumericInput(''), null)
    assert.equal(validateCycleLength(parseNumericInput('')), false)
    assert.equal(getCycleLengthError(''), null) // vacío no es error de rango: es "falta dato"
    assert.equal(calcCycleEstimate('', 28, day(2026, 1, 10)), null)
  })

  it('estado inicial vacío no genera resultado aunque haya fecha', () => {
    // Simula useState("") inicial: sin número válido no hay cálculo.
    const cycleRaw = ''
    const cycleValue = parseNumericInput(cycleRaw)
    assert.equal(cycleValue, null)
    assert.equal(validateCycleLength(cycleValue), false)
  })
})

describe('pegado de valores', () => {
  it('"28" pegado → válido', () => {
    // Pegar dispara onChange con el texto completo: mismo camino que escribir.
    const pasted = '28'
    assert.equal(parseNumericInput(pasted), 28)
    assert.equal(validateCycleLength(parseNumericInput(pasted)), true)
  })

  it('pegado con espacios " 28 " → válido', () => {
    assert.equal(parseNumericInput(' 28 '), 28)
  })

  it('pegado inválido "abc" → error, sin NaN', () => {
    assert.equal(parseNumericInput('abc'), null)
    assert.equal(getNumericFieldStatus('abc'), 'invalid')
    assert.ok(getCycleLengthError('abc'))
    assert.equal(validateCycleLength(parseNumericInput('abc')), false)
  })
})

describe('texto no numérico: rechazar, nunca NaN', () => {
  it('"abc" no llega al cálculo como NaN', () => {
    const value = parseNumericInput('abc')
    assert.equal(value, null)
    assert.ok(!Number.isNaN(value ?? 0) || value === null)
    assert.equal(validateCycleLength(value), false)
  })

  for (const raw of ['abc', '12a', '--5', 'Infinity', 'NaN']) {
    it(`"${raw}" → inválido`, () => {
      assert.equal(parseNumericInput(raw), null)
      assert.equal(getNumericFieldStatus(raw), 'invalid')
    })
  }
})

describe('selector: mismo estado que escritura manual', () => {
  it('elegir "28" en el selector equivale a escribir "28"', () => {
    const fromSelector = '28' // <option value="28"> del datalist
    const typedManually = '28' // tecleado en el input
    assert.equal(parseNumericInput(fromSelector), parseNumericInput(typedManually))
    assert.equal(validateCycleLength(parseNumericInput(fromSelector)), true)
  })

  it('todas las opciones del selector están en el rango válido', () => {
    assert.equal(MIN_CYCLE_LENGTH, 21)
    assert.equal(MAX_CYCLE_LENGTH, 45)
    assert.equal(MIN_PERIOD_LENGTH, 2)
    assert.equal(MAX_PERIOD_LENGTH, 10)
    for (let n = MIN_CYCLE_LENGTH; n <= MAX_CYCLE_LENGTH; n += 1) {
      assert.equal(validateCycleLength(n), true, `ciclo ${n} debe ser válido`)
    }
    for (let n = MIN_PERIOD_LENGTH; n <= MAX_PERIOD_LENGTH; n += 1) {
      assert.equal(validatePeriodLength(n), true, `regla ${n} debe ser válida`)
    }
  })
})

describe('resultado: solo con datos válidos y cálculo explícito', () => {
  it('con ciclo válido + fecha válida el cálculo puro puede producir resultado', () => {
    const r = calcCycleEstimate('2026-01-01', 28, day(2026, 1, 10))
    assert.ok(r)
  })

  it('sin datos válidos no hay resultado (vacío o inválido)', () => {
    assert.equal(calcCycleEstimate('', 28, day(2026, 1, 10)), null)
    assert.equal(calcCycleEstimate('2026-01-01', parseNumericInput('') as unknown as number, day(2026, 1, 10)), null)
    assert.equal(calcCycleEstimate('2026-01-01', parseNumericInput('10') as number, day(2026, 1, 10)), null)
  })
})
