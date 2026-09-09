/**
 * Pure data builders for VidaMujer PDF reports (no React, no I/O).
 *
 * This module is intentionally dependency-free (zero imports) so it can
 * be unit-tested with plain `node --test`, like `health-calculations`.
 * Everything it needs — input echoes, computed results, site identity —
 * is passed in as plain data by the caller.
 *
 * Privacy: builders only format values that already exist in browser
 * memory at calculation time. They never read storage, never call the
 * network, and never persist anything.
 *
 * Single source of truth notes:
 * - `perimenopauseBandMessage` mirrors the orientative messages shown
 *   by `PerimenopauseTest` (imported by that component, so web and PDF
 *   can never drift apart). Wording is deliberately non-diagnostic.
 * - Site name/URL/disclaimer are passed in from `@/config` by the
 *   component layer; the canonical texts live there.
 */

export interface PdfKeyValue {
  label: string
  value: string
}

export interface PdfSite {
  name: string
  url: string
  disclaimer: string
}

export interface PdfReportData {
  toolName: string
  toolSubtitle: string
  siteName: string
  siteUrl: string
  generatedAt: Date
  inputRows: PdfKeyValue[]
  resultRows: PdfKeyValue[]
  infoParagraphs: string[]
  disclaimer: string
}

/** SEO-friendly download filenames (lowercase, hyphenated, no spaces). */
export const PDF_FILENAMES = {
  cycleResult: 'resultado-calculadora-ciclo-vidamujer.pdf',
  ovulationResult: 'resultado-calculadora-ovulacion-vidamujer.pdf',
  pregnancyResult: 'resultado-calculadora-embarazo-vidamujer.pdf',
  dueDateResult: 'resultado-fecha-parto-vidamujer.pdf',
  perimenopauseResult: 'resultado-test-perimenopausia-vidamujer.pdf',
  routineResult: 'rutina-ejercicio-vidamujer.pdf',
  cycleLog: 'registro-ciclo-menstrual-vidamujer.pdf',
  menstrualCalendar: 'calendario-menstrual-vidamujer.pdf',
  symptomDiary: 'diario-sintomas-vidamujer.pdf',
  perimenopauseDiary: 'diario-perimenopausia-vidamujer.pdf',
  activityLog: 'registro-actividad-fisica-vidamujer.pdf',
  trackingPack: 'pack-seguimiento-vidamujer.pdf',
} as const

export type PdfFilename = (typeof PDF_FILENAMES)[keyof typeof PDF_FILENAMES]

/** "3 de septiembre de 2026". Never throws: invalid dates become "—". */
export function formatDateLongEs(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** "3 de septiembre de 2026, 10:24". Never throws. */
export function formatGenerationDateEs(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '—'
  const day = date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const time = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${day}, ${time}`
}

/**
 * Orientative perimenopause message for a given sign count.
 * Same strings as the on-screen test: non-diagnostic wording
 * ("orientativo", "pueden aparecer", "no constituye un diagnóstico").
 */
export function perimenopauseBandMessage(score: number): string {
  if (!Number.isFinite(score) || score <= 0) {
    return 'Todavía no hay señales claras en tus respuestas, pero los síntomas pueden aparecer de forma gradual.'
  }
  if (score <= 2) {
    return 'Tus respuestas muestran algunos cambios que pueden aparecer durante la transición menopáusica.'
  }
  if (score <= 4) {
    return 'Tus respuestas indican varios síntomas que suelen aparecer con frecuencia durante la perimenopausia.'
  }
  return 'Tus respuestas reflejan varios indicios compatibles con la perimenopausia, aunque solo un profesional puede valorar tu caso.'
}

function baseReport(
  toolName: string,
  toolSubtitle: string,
  site: PdfSite,
  generatedAt: Date,
): Omit<PdfReportData, 'inputRows' | 'resultRows' | 'infoParagraphs' | 'disclaimer'> {
  return {
    toolName,
    toolSubtitle,
    siteName: site.name,
    siteUrl: site.url,
    generatedAt,
  }
}

export function buildCycleReportData(params: {
  lastPeriod: Date
  cycleLength: number
  periodLength: number
  nextPeriodDate: Date
  ovulationDate: Date
  fertileStart: Date
  fertileEnd: Date
  site: PdfSite
  generatedAt?: Date
}): PdfReportData {
  const generatedAt = params.generatedAt ?? new Date()
  return {
    ...baseReport(
      'Calculadora del ciclo menstrual',
      'Estimación orientativa de próxima regla, ovulación y ventana fértil',
      params.site,
      generatedAt,
    ),
    inputRows: [
      { label: 'Fecha de inicio de la última regla', value: formatDateLongEs(params.lastPeriod) },
      { label: 'Duración habitual del ciclo', value: `${params.cycleLength} días` },
      { label: 'Duración habitual de la regla', value: `${params.periodLength} días` },
    ],
    resultRows: [
      { label: 'Próxima menstruación estimada', value: formatDateLongEs(params.nextPeriodDate) },
      { label: 'Ovulación estimada', value: formatDateLongEs(params.ovulationDate) },
      {
        label: 'Ventana fértil estimada',
        value: `${formatDateLongEs(params.fertileStart)} – ${formatDateLongEs(params.fertileEnd)}`,
      },
    ],
    infoParagraphs: [
      'Las fechas son estimaciones calculadas con el método del calendario y pueden variar entre ciclos y entre personas.',
      'En ciclos irregulares la estimación es menos fiable. Este cálculo no detecta anovulación ni embarazo y no debe usarse como método anticonceptivo.',
    ],
    disclaimer: params.site.disclaimer,
  }
}

export function buildOvulationReportData(params: {
  lastPeriod: Date
  cycleLength: number
  ovulationDate: Date
  fertileStart: Date
  fertileEnd: Date
  site: PdfSite
  generatedAt?: Date
}): PdfReportData {
  const generatedAt = params.generatedAt ?? new Date()
  return {
    ...baseReport(
      'Calculadora de ovulación',
      'Estimación orientativa de ovulación y ventana fértil',
      params.site,
      generatedAt,
    ),
    inputRows: [
      { label: 'Fecha de inicio de la última regla', value: formatDateLongEs(params.lastPeriod) },
      { label: 'Duración habitual del ciclo', value: `${params.cycleLength} días` },
    ],
    resultRows: [
      { label: 'Ovulación estimada', value: formatDateLongEs(params.ovulationDate) },
      {
        label: 'Ventana fértil estimada',
        value: `${formatDateLongEs(params.fertileStart)} – ${formatDateLongEs(params.fertileEnd)}`,
      },
    ],
    infoParagraphs: [
      'La ovulación puede adelantarse o retrasarse varios días respecto a la estimación por estrés, enfermedad o variaciones propias de cada ciclo.',
      'Es un método de calendario: no mide hormonas ni confirma que haya ovulación. No es un método anticonceptivo ni un test de fertilidad.',
    ],
    disclaimer: params.site.disclaimer,
  }
}

export function buildPregnancyReportData(params: {
  /** Allows the two pages sharing the calculator to title their own PDF. */
  toolName: 'Calculadora de embarazo' | 'Calculadora de fecha probable de parto'
  lastPeriod: Date
  weeks: number
  days: number
  dueDate: Date
  site: PdfSite
  generatedAt?: Date
}): PdfReportData {
  const generatedAt = params.generatedAt ?? new Date()
  return {
    ...baseReport(
      params.toolName,
      'Estimación orientativa por regla de Naegele (última regla + 280 días)',
      params.site,
      generatedAt,
    ),
    inputRows: [
      { label: 'Fecha de inicio de la última regla', value: formatDateLongEs(params.lastPeriod) },
    ],
    resultRows: [
      { label: 'Semana de gestación estimada', value: `${params.weeks} semanas y ${params.days} días` },
      { label: 'Fecha probable de parto', value: formatDateLongEs(params.dueDate) },
    ],
    infoParagraphs: [
      'El cálculo asume ciclos regulares de 28 días. Solo una minoría de partos ocurre exactamente en la fecha estimada: la mayoría sucede en las dos semanas anteriores o posteriores.',
      'La ecografía del primer trimestre suele ser una referencia clínica más fiable. Este resultado no valora la salud del embarazo ni sustituye ningún control.',
    ],
    disclaimer: params.site.disclaimer,
  }
}

export function buildPerimenopauseReportData(params: {
  /** Labels of the signs the user checked (echoed back, never diagnosed). */
  checkedLabels: string[]
  totalQuestions: number
  site: PdfSite
  generatedAt?: Date
}): PdfReportData {
  const generatedAt = params.generatedAt ?? new Date()
  const score = params.checkedLabels.length
  return {
    ...baseReport(
      'Test orientativo de perimenopausia',
      'Lectura informativa, no diagnóstica, de señales frecuentes',
      params.site,
      generatedAt,
    ),
    inputRows: params.checkedLabels.map((label, index) => ({
      label: `Señal indicada ${index + 1}`,
      value: label,
    })),
    resultRows: [
      { label: 'Señales indicadas', value: `${score} de ${params.totalQuestions}` },
      { label: 'Resultado orientativo', value: perimenopauseBandMessage(score) },
    ],
    infoParagraphs: [
      'Este resultado es orientativo: resume cuántas señales frecuentes has indicado. Los mismos síntomas pueden tener otras causas y solo un profesional con tu historia clínica puede valorar tu caso.',
      'Este resultado no constituye un diagnóstico médico ni indica gravedad o necesidad de tratamiento.',
    ],
    disclaimer: params.site.disclaimer,
  }
}

export function buildRoutineReportData(params: {
  title: string
  summary: string
  daySummaries: string[]
  warmup: string[]
  cooldown: string[]
  progression: string[]
  site: PdfSite
  generatedAt?: Date
}): PdfReportData {
  const generatedAt = params.generatedAt ?? new Date()
  return {
    ...baseReport('Generador de rutinas', params.title, params.site, generatedAt),
    inputRows: [{ label: 'Propuesta generada', value: params.summary }],
    resultRows: params.daySummaries.map((day, index) => ({
      label: `Sesión ${index + 1}`,
      value: day,
    })),
    infoParagraphs: [
      `Calentamiento sugerido: ${params.warmup.join('; ')}.`,
      `Vuelta a la calma sugerida: ${params.cooldown.join('; ')}.`,
      `Para progresar: ${params.progression.join(' ')}`,
      'Propuesta general con fines educativos. No es una prescripción individual y no sustituye la valoración de un profesional del ejercicio o de la salud.',
    ],
    disclaimer: params.site.disclaimer,
  }
}
