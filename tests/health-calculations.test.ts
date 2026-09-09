import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  calcCycleEstimate,
  calcOvulationEstimate,
  calcPregnancyEstimate,
  parseDateOnly,
  scorePerimenopause,
} from '../src/lib/health-calculations.ts'

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d)
const iso = (d: Date) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

describe('parseDateOnly', () => {
  it('acepta fechas válidas YYYY-MM-DD', () => {
    const d = parseDateOnly('2026-01-15')
    assert.ok(d instanceof Date)
    assert.equal(iso(d as Date), '2026-1-15')
  })

  it('rechaza vacío, formato roto y fechas imposibles', () => {
    assert.equal(parseDateOnly(''), null)
    assert.equal(parseDateOnly('no-fecha'), null)
    assert.equal(parseDateOnly('2026-02-30'), null) // desborde de febrero
    assert.equal(parseDateOnly('2026-13-01'), null)
    assert.equal(parseDateOnly('2026-00-10'), null)
  })
})

describe('calcCycleEstimate', () => {
  it('calcula próxima regla, ovulación y ventana fértil', () => {
    const r = calcCycleEstimate('2026-01-01', 28, day(2026, 1, 10))
    assert.ok(r)
    assert.equal(iso(r.nextPeriodDate), '2026-1-29')
    assert.equal(iso(r.ovulationDate), '2026-1-15')
    assert.equal(iso(r.fertileStart), '2026-1-10')
    assert.equal(iso(r.fertileEnd), '2026-1-16')
  })

  it('estado inicial: sin fecha no hay resultado', () => {
    assert.equal(calcCycleEstimate('', 28, day(2026, 1, 10)), null)
  })

  it('rechaza fechas futuras e inválidas', () => {
    assert.equal(calcCycleEstimate('2026-05-01', 28, day(2026, 1, 10)), null)
    assert.equal(calcCycleEstimate('2026-02-30', 28, day(2026, 3, 1)), null)
  })

  it('rechaza duraciones imposibles y nunca devuelve NaN', () => {
    for (const len of [0, 10, 20, 46, 100, Number.NaN, Number.POSITIVE_INFINITY]) {
      assert.equal(calcCycleEstimate('2026-01-01', len, day(2026, 1, 10)), null)
    }
    const r = calcCycleEstimate('2026-01-01', 21, day(2026, 1, 10))
    assert.ok(r)
    for (const d of [r.nextPeriodDate, r.ovulationDate, r.fertileStart, r.fertileEnd]) {
      assert.ok(!Number.isNaN(d.getTime()), 'fecha válida, sin NaN')
    }
  })
})

describe('calcOvulationEstimate', () => {
  it('deriva ovulación y ventana del ciclo', () => {
    const r = calcOvulationEstimate('2026-01-01', 28, day(2026, 1, 10))
    assert.ok(r)
    assert.equal(iso(r.ovulationDate), '2026-1-15')
    assert.equal(iso(r.fertileStart), '2026-1-10')
    assert.equal(iso(r.fertileEnd), '2026-1-16')
  })

  it('sin datos no hay resultado', () => {
    assert.equal(calcOvulationEstimate('', 28, day(2026, 1, 10)), null)
    assert.equal(calcOvulationEstimate('2026-06-01', 28, day(2026, 1, 10)), null)
  })
})

describe('calcPregnancyEstimate (Naegele: FUR + 280 días)', () => {
  it('calcula semanas y fecha probable de parto', () => {
    const r = calcPregnancyEstimate('2026-01-01', day(2026, 1, 29))
    assert.ok(r)
    assert.equal(r.weeks, 4)
    assert.equal(r.days, 0)
    assert.equal(iso(r.dueDate), '2026-10-8')
  })

  it('casos extremos: sin fecha, futura o imposible', () => {
    const today = day(2026, 6, 1)
    assert.equal(calcPregnancyEstimate('', today), null)
    assert.equal(calcPregnancyEstimate('2026-07-01', today), null)
    assert.equal(calcPregnancyEstimate('2026-02-30', today), null)
  })

  it('nunca devuelve semanas negativas ni NaN', () => {
    const r = calcPregnancyEstimate('2026-06-01', day(2026, 6, 1))
    assert.ok(r)
    assert.ok(r.weeks >= 0 && r.days >= 0)
    assert.ok(!Number.isNaN(r.dueDate.getTime()))
  })
})

describe('scorePerimenopause', () => {
  it('clasifica por bandas sin diagnosticar', () => {
    assert.deepEqual(scorePerimenopause({}), { score: 0, band: 'none' })
    assert.deepEqual(scorePerimenopause({ 0: true }), { score: 1, band: 'some' })
    assert.deepEqual(scorePerimenopause({ 0: true, 1: true, 2: true }), {
      score: 3,
      band: 'several',
    })
    assert.deepEqual(
      scorePerimenopause({ 0: true, 1: true, 2: true, 3: true, 4: true }),
      { score: 5, band: 'many' },
    )
  })
})
