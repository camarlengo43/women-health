/**
 * Pure logic for the health tools (no React, no I/O).
 *
 * Every VidaMujer calculation runs in browser memory through these
 * functions. They never persist or send data, and never surface
 * `NaN`, `Invalid Date`, `undefined` or `null`: on any invalid
 * input they return `null` and the UI shows an understandable
 * message.
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

/**
 * Valid ranges already defined by the app. Do not invent others:
 * - Cycle: 21–45 days (used by `calcCycleEstimate`).
 * - Period: 2–10 days (used in the cycle calculators).
 */
export const MIN_CYCLE_LENGTH = 21
export const MAX_CYCLE_LENGTH = 45
export const MIN_PERIOD_LENGTH = 2
export const MAX_PERIOD_LENGTH = 10

export type NumericFieldStatus = 'empty' | 'valid' | 'invalid'

/**
 * Parses the raw text of a numeric field (manual typing,
 * pasting, or selection from the picker) without blocking editing.
 * - `""` (empty or whitespace only) → `null` (empty state: do not calculate).
 * - Text convertible to a finite number → that number (range validity
 *   is checked separately, so a clear error can be shown).
 * - Non-numeric text (`"abc"`, `"12a"`, `Infinity`, …) → `null`.
 * Never returns `NaN`: calculations only receive finite numbers or `null`.
 */
export function parseNumericInput(raw: string): number | null {
  if (typeof raw !== 'string') return null
  const trimmed = raw.trim()
  if (trimmed === '') return null
  // Accepts "28", " 28 ", "28.0". Rejects "", "abc", "12a", "Infinity".
  if (!/^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(trimmed)) return null
  const value = Number(trimmed)
  if (!Number.isFinite(value)) return null
  return value
}

/** Classifies the raw text of a generic numeric field. */
export function getNumericFieldStatus(raw: string): NumericFieldStatus {
  if (typeof raw !== 'string' || raw.trim() === '') return 'empty'
  return parseNumericInput(raw) === null ? 'invalid' : 'valid'
}

function validateInRange(value: number | null, min: number, max: number): boolean {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max
}

/** Centralized validation: cycle length in days (21–45). */
export function validateCycleLength(value: number | null): boolean {
  return validateInRange(value, MIN_CYCLE_LENGTH, MAX_CYCLE_LENGTH)
}

/** Centralized validation: period length in days (2–10). */
export function validatePeriodLength(value: number | null): boolean {
  return validateInRange(value, MIN_PERIOD_LENGTH, MAX_PERIOD_LENGTH)
}

/** Spanish error message for the cycle field, or `null` when valid/empty. */
export function getCycleLengthError(raw: string): string | null {
  if (raw.trim() === '') return null
  const value = parseNumericInput(raw)
  if (value === null) return 'Introduce un número válido (por ejemplo, 28).'
  if (!validateCycleLength(value)) {
    return `Introduce un valor entre ${MIN_CYCLE_LENGTH} y ${MAX_CYCLE_LENGTH} días.`
  }
  return null
}

/** Spanish error message for the period field, or `null` when valid/empty. */
export function getPeriodLengthError(raw: string): string | null {
  if (raw.trim() === '') return null
  const value = parseNumericInput(raw)
  if (value === null) return 'Introduce un número válido (por ejemplo, 5).'
  if (!validatePeriodLength(value)) {
    return `Introduce un valor entre ${MIN_PERIOD_LENGTH} y ${MAX_PERIOD_LENGTH} días.`
  }
  return null
}

/** Converts `YYYY-MM-DD` to a local date, or `null` when invalid. */
export function parseDateOnly(value: string): Date | null {
  if (!value || typeof value !== 'string') return null
  const parts = value.split('-').map(Number)
  if (parts.length !== 3) return null
  const [y, m, d] = parts
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return null
  if (y < 1900 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return null
  const date = new Date(y, m - 1, d)
  // Rejects overflows like 2026-02-30 (Date normalizes them to March).
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
 * Menstrual cycle estimate (calendar method).
 * Returns `null` without valid data: empty/invalid/future date or
 * length outside the 21–45 day range.
 */
export function calcCycleEstimate(
  lastPeriod: string,
  cycleLength: number,
  today: Date = startOfToday(),
): CycleEstimate | null {
  const lastDate = parseDateOnly(lastPeriod)
  if (!lastDate) return null
  if (!validateCycleLength(cycleLength)) return null
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
 * Ovulation and fertile-window estimate (calendar method).
 * Same guarantees as `calcCycleEstimate`.
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
 * Pregnancy estimate via Naegele's rule (LMP + 280 days).
 * Returns `null` without a valid date or with a future date.
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
 * Advisory perimenopause-test band based on the number of signs.
 * Does not diagnose: it only summarizes how many common signs were checked.
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
