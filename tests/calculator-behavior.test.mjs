/**
 * Calculator behavior tests (static analysis + logic).
 *
 * With no React render library in the project, the source code
 * is verified to ensure that:
 * - the initial state is empty and shows no result (render → no result);
 * - changing any input after calculating invalidates the result
 *   (onChange handlers reset `submitted` to false);
 * - the ovulation calculator, in particular, never calculates without
 *   explicit data (regression of the automatic initial-result bug).
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => readFileSync(join(ROOT, rel), 'utf8')

const CALCULATORS = [
  'src/components/tools/CycleCalculator.tsx',
  'src/components/tools/OvulationCalculator.tsx',
  'src/components/tools/PregnancyCalculator.tsx',
]

describe('estado inicial: render sin datos → no resultado', () => {
  for (const file of CALCULATORS) {
    it(`${file} parte de estado vacío con placeholder, sin resultado`, () => {
      const src = read(file)
      assert.ok(src.includes("useState('')"), 'fecha parte de cadena vacía')
      assert.ok(src.includes('if (!submitted || !isValid) return null'), 'sin envío válido no hay resultado')
      assert.ok(src.includes('Todavía no hay resultados'), 'placeholder en lugar de resultado inicial')
    })
  }

  it('perimenopausia: sin interacción no hay resultado', () => {
    const src = read('src/components/tools/PerimenopauseTest.tsx')
    assert.ok(src.includes('hasInteracted'), 'rastrea interacción')
    assert.ok(src.includes('hasInteracted && score > 0'), 'resultado solo tras interactuar')
  })

  it('generador: rutina inicial válida permitida (no es calculadora médica)', () => {
    const src = read('src/components/tools/RoutineGenerator.tsx')
    assert.ok(src.includes("useState('inicial')") || src.includes("'inicial'"), 'nivel inicial por defecto')
    assert.ok(src.includes('buildRoutine(level, goal, days, minutes)'), 'rutina derivada de los parámetros')
  })
})

describe('recalcular: modificar input tras calcular invalida el resultado', () => {
  for (const file of CALCULATORS) {
    it(`${file} resetea submitted al cambiar cualquier input`, () => {
      const src = read(file)
      const resets = (src.match(/setSubmitted\(false\)/g) ?? []).length
      assert.ok(resets >= 1, `debe invalidar el resultado al editar (encontrados ${resets} resets)`)
      // The result depends on `submitted`: after the reset it returns to null
      // until "Calculate" is pressed again.
      assert.ok(src.includes('if (!submitted || !isValid) return null'))
    })
  }

  it('ciclo: los tres campos (fecha, ciclo, regla) invalidan', () => {
    const src = read('src/components/tools/CycleCalculator.tsx')
    assert.ok(src.includes('handleLastPeriodChange'), 'fecha invalida')
    assert.ok(src.includes('handleCycleChange'), 'duración del ciclo invalida')
    assert.ok(src.includes('handlePeriodChange'), 'duración de la regla invalida')
  })
})

describe('ovulación: regresión del resultado automático inicial', () => {
  it('render sin introducir datos → no existe resultado', () => {
    const src = read('src/components/tools/OvulationCalculator.tsx')
    // No default values that would produce an automatic medical result.
    assert.ok(!src.includes("useState('202"), 'la fecha no tiene valor por defecto')
    assert.ok(!src.includes('useState(28'), 'el ciclo no tiene valor numérico por defecto')
    assert.ok(src.includes("useState('')"), 'ciclo parte de texto vacío')
    // No current date as implicit input: `today` only clamps max/validates.
    assert.ok(src.includes('max={today.toISOString().slice(0, 10)}'), 'today solo limita el max del date input')
    assert.ok(!src.includes('lastPeriod ||'), 'no hay fallback a fecha actual')
    assert.ok(!src.includes('cycleLengthRaw ||'), 'no hay fallback a ciclo por defecto')
  })
})

describe('campos numéricos: escritura manual + selector sobre el mismo estado', () => {
  it('NumericComboField es input editable con datalist, sin bloqueos', () => {
    const src = read('src/components/tools/NumericComboField.tsx')
    assert.ok(src.includes('type="number"'), 'teclado numérico en móvil')
    assert.ok(src.includes('inputMode="numeric"'), 'inputMode numérico')
    assert.ok(src.includes('<datalist'), 'selector existente vía datalist')
    assert.ok(!src.includes('readOnly'), 'nada de readOnly')
    assert.ok(!src.includes('disabled'), 'nada de disabled')
    assert.ok(!src.includes('onPaste'), 'no intercepta el pegado')
    assert.ok(src.includes('onChange={(e) => onChange(e.target.value)}'), 'escritura/pegado/selección → mismo estado')
  })
})
