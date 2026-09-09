/**
 * PDF report-data tests.
 *
 * The data layer (`src/lib/pdf/report-data.ts`) is pure and
 * dependency-free, so it is tested directly:
 * - input echoes and computed results appear correctly formatted;
 * - health disclaimers are always present and non-diagnostic;
 * - perimenopause wording never claims a diagnosis;
 * - filenames are SEO-friendly (lowercase, hyphenated, branded).
 *
 * The react-pdf components and the download action are intentionally
 * thin wrappers over this layer (see `tests/privacy.test.mjs` for the
 * no-backend / no-persistence guarantees on those files).
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  PDF_FILENAMES,
  buildCycleReportData,
  buildOvulationReportData,
  buildPerimenopauseReportData,
  buildPregnancyReportData,
  buildRoutineReportData,
  formatDateLongEs,
  formatGenerationDateEs,
  perimenopauseBandMessage,
} from '../src/lib/pdf/report-data.ts'

const SITE = {
  name: 'VidaMujer',
  url: 'https://vidamujerr.vercel.app',
  disclaimer: 'Carácter divulgativo y educativo. No sustituye la valoración de un profesional sanitario.',
}

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d)

describe('formatDateLongEs / formatGenerationDateEs', () => {
  it('formatea fechas en español largo', () => {
    assert.equal(formatDateLongEs(day(2026, 9, 3)), '3 de septiembre de 2026')
    assert.match(formatGenerationDateEs(day(2026, 9, 3)), /3 de septiembre de 2026/)
  })

  it('nunca devuelve Invalid Date: fechas inválidas → "—"', () => {
    assert.equal(formatDateLongEs(new Date(Number.NaN)), '—')
    assert.equal(formatGenerationDateEs(new Date('no-fecha')), '—')
  })
})

describe('perimenopauseBandMessage: lenguaje no diagnóstico', () => {
  it('mapea cada tramo al mensaje orientativo correspondiente', () => {
    assert.match(perimenopauseBandMessage(0), /Todavía no hay señales claras/)
    assert.match(perimenopauseBandMessage(2), /pueden aparecer durante la transición/)
    assert.match(perimenopauseBandMessage(4), /suelen aparecer con frecuencia/)
    assert.match(perimenopauseBandMessage(5), /solo un profesional puede valorar/)
  })

  it('nunca afirma un diagnóstico', () => {
    for (const score of [0, 1, 3, 5]) {
      const message = perimenopauseBandMessage(score).toLowerCase()
      assert.ok(!message.includes('tienes perimenopausia'), `score ${score}: sin "tienes perimenopausia"`)
      assert.ok(!message.includes('diagnostica'), `score ${score}: sin verbo diagnosticar`)
    }
  })
})

describe('buildCycleReportData', () => {
  it('refleja entradas y resultados con formato legible', () => {
    const data = buildCycleReportData({
      lastPeriod: day(2026, 9, 3),
      cycleLength: 28,
      periodLength: 5,
      nextPeriodDate: day(2026, 10, 1),
      ovulationDate: day(2026, 9, 17),
      fertileStart: day(2026, 9, 12),
      fertileEnd: day(2026, 9, 18),
      site: SITE,
      generatedAt: day(2026, 9, 9),
    })
    assert.equal(data.toolName, 'Calculadora del ciclo menstrual')
    assert.ok(data.inputRows.some((r) => r.value === '3 de septiembre de 2026'))
    assert.ok(data.inputRows.some((r) => r.value === '28 días'))
    assert.ok(data.resultRows.some((r) => r.value === '1 de octubre de 2026'))
    assert.ok(
      data.resultRows.some((r) => r.value === '12 de septiembre de 2026 – 18 de septiembre de 2026'),
    )
    assert.equal(data.disclaimer, SITE.disclaimer)
    assert.equal(data.siteName, 'VidaMujer')
  })
})

describe('buildOvulationReportData', () => {
  it('incluye ovulación y ventana fértil', () => {
    const data = buildOvulationReportData({
      lastPeriod: day(2026, 9, 3),
      cycleLength: 28,
      ovulationDate: day(2026, 9, 17),
      fertileStart: day(2026, 9, 12),
      fertileEnd: day(2026, 9, 18),
      site: SITE,
    })
    assert.equal(data.toolName, 'Calculadora de ovulación')
    assert.ok(data.resultRows.some((r) => r.value === '17 de septiembre de 2026'))
    assert.ok(data.infoParagraphs.some((p) => p.includes('No es un método anticonceptivo')))
    assert.equal(data.disclaimer, SITE.disclaimer)
  })
})

describe('buildPregnancyReportData', () => {
  it('titula según la página (embarazo o fecha de parto) y muestra semanas + FPP', () => {
    for (const toolName of ['Calculadora de embarazo', 'Calculadora de fecha probable de parto'] as const) {
      const data = buildPregnancyReportData({
        toolName,
        lastPeriod: day(2026, 1, 1),
        weeks: 10,
        days: 2,
        dueDate: day(2026, 10, 8),
        site: SITE,
      })
      assert.equal(data.toolName, toolName)
      assert.ok(data.resultRows.some((r) => r.value === '10 semanas y 2 días'))
      assert.ok(data.resultRows.some((r) => r.value === '8 de octubre de 2026'))
      assert.equal(data.disclaimer, SITE.disclaimer)
    }
  })
})

describe('buildPerimenopauseReportData', () => {
  it('hace eco de las señales marcadas y del recuento, con aviso no diagnóstico', () => {
    const data = buildPerimenopauseReportData({
      checkedLabels: ['He tenido sofocos o sensación de calor intensa.'],
      totalQuestions: 5,
      site: SITE,
    })
    assert.equal(data.toolName, 'Test orientativo de perimenopausia')
    assert.ok(data.inputRows.some((r) => r.value.includes('sofocos')))
    assert.ok(data.resultRows.some((r) => r.value === '1 de 5'))
    assert.ok(data.resultRows.some((r) => r.label === 'Resultado orientativo'))
    const fullText = [...data.resultRows.map((r) => r.value), ...data.infoParagraphs].join(' ').toLowerCase()
    assert.ok(fullText.includes('no constituye un diagnóstico'), 'aviso no diagnóstico presente')
    assert.ok(!fullText.includes('tienes perimenopausia'), 'sin afirmación diagnóstica')
    assert.equal(data.disclaimer, SITE.disclaimer)
  })
})

describe('buildRoutineReportData', () => {
  it('resume sesiones y consejos sin prescribir', () => {
    const data = buildRoutineReportData({
      title: 'Rutina fuerza · nivel inicial',
      summary: '2 días por semana · sesiones de unos 30 min.',
      daySummaries: ['Día 1 (Tren inferior + core): Sentadilla; Plancha'],
      warmup: ['Marcha en el sitio 2 min'],
      cooldown: ['Caminata suave 2–3 min'],
      progression: ['Aumenta primero las repeticiones.'],
      site: SITE,
    })
    assert.equal(data.toolName, 'Generador de rutinas')
    assert.ok(data.resultRows.some((r) => r.value.includes('Día 1')))
    assert.ok(data.infoParagraphs.some((p) => p.includes('No es una prescripción individual')))
    assert.equal(data.disclaimer, SITE.disclaimer)
  })
})

describe('PDF_FILENAMES: nombres SEO-friendly', () => {
  it('todas las plantillas usan los nombres acordados', () => {
    assert.equal(PDF_FILENAMES.cycleLog, 'registro-ciclo-menstrual-vidamujer.pdf')
    assert.equal(PDF_FILENAMES.menstrualCalendar, 'calendario-menstrual-vidamujer.pdf')
    assert.equal(PDF_FILENAMES.symptomDiary, 'diario-sintomas-vidamujer.pdf')
    assert.equal(PDF_FILENAMES.perimenopauseDiary, 'diario-perimenopausia-vidamujer.pdf')
    assert.equal(PDF_FILENAMES.activityLog, 'registro-actividad-fisica-vidamujer.pdf')
    assert.equal(PDF_FILENAMES.trackingPack, 'pack-seguimiento-vidamujer.pdf')
  })

  it('todos los nombres son minúsculas, con guiones, marca y extensión .pdf', () => {
    for (const fileName of Object.values(PDF_FILENAMES)) {
      assert.ok(fileName.endsWith('.pdf'), `${fileName} termina en .pdf`)
      assert.equal(fileName, fileName.toLowerCase(), `${fileName} en minúsculas`)
      assert.ok(!fileName.includes(' '), `${fileName} sin espacios`)
      assert.ok(fileName.includes('vidamujer'), `${fileName} con marca`)
    }
  })
})
