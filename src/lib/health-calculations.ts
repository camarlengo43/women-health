/**
 * Lógica pura de las herramientas de salud (sin React, sin E/S).
 *
 * Todo cálculo de VidaMujer ocurre en memoria del navegador con estas
 * funciones. No persisten, no envían datos y nunca devuelven
 * `NaN`, `Invalid Date`, `undefined` ni `null` visibles: ante cualquier
 * entrada inválida devuelven `null` y la interfaz muestra un mensaje
 * comprensible.
 */

export interface CycleEstimate {
  nextPeriodDate: Date
  ovulationDate: Date
  fertileStart: Date
  fertileEnd: Date
}

export interface PregnancyEstimate {
  dueDate: Date
  weeks: number
  days: number
}

export type PerimenopauseBand = 'none' | 'some' | 'several' | 'many'

/** Convierte `YYYY-MM-DD` en fecha local o `null` si no es válida. */
export function parseDateOnly(value: string): Date | null {
  if (!value || typeof value !== 'string') return null
  const parts = value.split('-').map(Number)
  if (parts.length !== 3) return null
  const [y, m, d] = parts
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return null
  if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null
  const date = new Date(y, m - 1, d)
  // Rechaza desbordes como 2026-02-30 (Date los normaliza a marzo).
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
    return null
  }
  return date
}

function startOfToday(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setDate(date.getDate() + days)
  return next
}

/**
 * Estimación del ciclo menstrual (método de calendario).
 * Devuelve `null` sin datos válidos: fecha vacía/inválida/futura o
 * duración fuera del rango 21–45 días.
 */
export function calcCycleEstimate(
  lastPeriod: string,
  cycleLength: number,
  today: Date = startOfToday(),
): CycleEstimate | null {
  const lastDate = parseDateOnly(lastPeriod)
  if (!lastDate) return null
  if (!Number.isFinite(cycleLength) || cycleLength < 21 || cycleLength > 45) return null
  if (lastDate.getTime() > today.getTime()) return null

  const nextPeriodDate = addDays(lastDate, cycleLength)
  const ovulationDate = addDays(lastDate, cycleLength - 14)
  return {
    nextPeriodDate,
    ovulationDate,
    fertileStart: addDays(ovulationDate, -5),
    fertileEnd: addDays(ovulationDate, 1),
  }
}

/**
 * Estimación de ovulación y ventana fértil (método de calendario).
 * Mismas garantías que `calcCycleEstimate`.
 */
export function calcOvulationEstimate(
  lastPeriod: string,
  cycleLength: number,
  today: Date = startOfToday(),
): Pick<CycleEstimate, 'ovulationDate' | 'fertileStart' | 'fertileEnd'> | null {
  const estimate = calcCycleEstimate(lastPeriod, cycleLength, today)
  if (!estimate) return null
  return {
    ovulationDate: estimate.ovulationDate,
    fertileStart: estimate.fertileStart,
    fertileEnd: estimate.fertileEnd,
  }
}

/**
 * Estimación de embarazo por regla de Naegele (FUR + 280 días).
 * Devuelve `null` sin fecha válida o con fecha futura.
 */
export function calcPregnancyEstimate(
  lastPeriod: string,
  today: Date = startOfToday(),
): PregnancyEstimate | null {
  const lmp = parseDateOnly(lastPeriod)
  if (!lmp) return null
  if (lmp.getTime() > today.getTime()) return null

  const dueDate = addDays(lmp, 280)
  const diffDays = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24))
  return {
    dueDate,
    weeks: Math.max(0, Math.floor(diffDays / 7)),
    days: Math.max(0, diffDays % 7),
  }
}

/**
 * Banda orientativa del test de perimenopausia según nº de señales.
 * No diagnostica: solo resume cuántas señales frecuentes se marcaron.
 */
export function scorePerimenopause(answers: Record<number, boolean>): {
  score: number
  band: PerimenopauseBand
} {
  const score = Object.values(answers).filter(Boolean).length
  if (score === 0) return { score, band: 'none' }
  if (score <= 2) return { score, band: 'some' }
  if (score <= 4) return { score, band: 'several' }
  return { score, band: 'many' }
}
