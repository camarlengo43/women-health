/**
 * Privacy tests (static source-code analysis).
 *
 * They ensure the promises "data never leaves your device" and
 * "nothing is stored" are technically true:
 * - Tools only use in-memory state (useState).
 * - No health data is persisted (storage/cookies) or transmitted
 *   (fetch/analytics/beacons).
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => readFileSync(join(ROOT, rel), 'utf8')

function listFiles(dir, ext) {
  const out = []
  for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`
    if (entry.isDirectory()) out.push(...listFiles(rel, ext))
    else if (entry.name.endsWith(ext)) out.push(rel)
  }
  return out
}

const TOOL_FILES = [
  ...listFiles('src/components/tools', '.tsx'),
  ...listFiles('src/components/pdf', '.tsx'),
  ...listFiles('src/lib/pdf', '.ts'),
  ...listFiles('src/components/posparto', '.tsx'),
  'src/components/shared/NewsletterForm.tsx',
]

// Strips comments (incl. documented guarantees like "NO localStorage")
// to audit executable code only.
const stripComments = (src) =>
  src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s)\/\/.*$/gm, '$1')

const FORBIDDEN_APIS = [
  'localStorage',
  'sessionStorage',
  'IndexedDB',
  'document.cookie',
  'fetch(',
  'axios',
  'XMLHttpRequest',
  'sendBeacon',
]

describe('privacidad: herramientas sin persistencia ni transmisión', () => {
  for (const file of TOOL_FILES) {
    it(`${file} no usa APIs de almacenamiento ni red`, () => {
      const src = stripComments(read(file))
      for (const api of FORBIDDEN_APIS) {
        assert.ok(
          !src.includes(api),
          `${file} no debe contener "${api}" (datos de salud solo en memoria)`,
        )
      }
    })
  }

  it('las herramientas no emiten eventos de analytics con datos', () => {
    for (const file of TOOL_FILES) {
      const src = read(file)
      assert.ok(!src.includes('gtag'), `${file} no debe llamar a gtag`)
      assert.ok(!src.includes('dataLayer'), `${file} no debe usar dataLayer`)
    }
  })

  it('las herramientas no escriben datos en la URL', () => {
    for (const file of TOOL_FILES) {
      const src = read(file)
      assert.ok(!src.includes('router.push'), `${file} no debe navegar con datos`)
      assert.ok(!src.includes('router.replace'), `${file} no debe navegar con datos`)
      assert.ok(!src.includes('URLSearchParams'), `${file} no debe construir URLs con datos`)
    }
  })
})

describe('privacidad: PDFs generados en el cliente sin backend', () => {
  it('el botón de descarga genera un Blob local y no envía datos', () => {
    const src = stripComments(read('src/components/pdf/PdfDownloadButton.tsx'))
    assert.ok(src.includes('toBlob()'), 'el PDF se genera como Blob en memoria')
    assert.ok(src.includes('createObjectURL'), 'descarga local sin subir datos')
    assert.ok(src.includes("import('@react-pdf/renderer')"), 'librería cargada solo en cliente bajo demanda')
    assert.ok(!src.includes('fetch('), 'sin llamadas de red para generar el PDF')
  })

  it('las plantillas vacías no contienen datos de usuaria', () => {
    const src = read('src/components/pdf/templates/BlankTemplates.tsx')
    assert.ok(!src.includes('localStorage'), 'sin lectura de almacenamiento')
    assert.ok(!src.includes('useState'), 'documento estático, sin estado con datos')
  })
})

describe('privacidad: estado inicial sin resultados', () => {
  it('calculadoras parten de fecha vacía y devuelven null sin datos', () => {
    for (const file of [
      'src/components/tools/CycleCalculator.tsx',
      'src/components/tools/OvulationCalculator.tsx',
      'src/components/tools/PregnancyCalculator.tsx',
    ]) {
      const src = read(file)
      assert.ok(src.includes("useState('')"), `${file} debe partir de fecha vacía`)
      assert.ok(
        src.includes('Todavía no hay resultados'),
        `${file} debe mostrar placeholder, no un resultado inicial`,
      )
    }
  })

  it('el test de perimenopausia no muestra resultado antes de interactuar', () => {
    const src = read('src/components/tools/PerimenopauseTest.tsx')
    assert.ok(src.includes('hasInteracted'), 'debe rastrear interacción antes de mostrar resultado')
    assert.ok(
      src.includes('hasInteracted && score > 0'),
      'el resultado solo aparece tras interactuar y marcar señales',
    )
  })
})

describe('privacidad: posparto y analytics globales', () => {
  it('el selector de parto es opcional, en memoria y con opción neutra', () => {
    const src = read('src/components/posparto/PospartoInteractive.tsx')
    assert.ok(src.includes('useState'), 'estado local en memoria')
    assert.ok(src.includes('sin-indicar'), 'opción "Prefiero no indicarlo"')
    assert.ok(src.includes('Prefiero no indicarlo'), 'etiqueta neutra visible')
  })

  it('analytics es opcional, anonimizado y sin seguimiento de herramientas', () => {
    const src = read('src/components/shared/JsonLd.tsx')
    assert.ok(src.includes('if (!gaId) return null'), 'sin GA_ID no hay tracking')
    assert.ok(src.includes('anonymize_ip'), 'IP anonimizada')
    assert.ok(
      src.includes('NEVER send events'),
      'documents that the tools send no events',
    )
  })

  it('no existe tracking de navegación que filtre queries de salud a analytics', () => {
    const analyticsFiles = listFiles('src/components', '.tsx')
    for (const file of analyticsFiles) {
      const src = read(file)
      if (src.includes('gtag(')) {
        assert.ok(
          !src.includes('usePathname'),
          `${file} no debe enviar rutas (con queries) a analytics`,
        )
      }
    }
  })

  it('la promesa de privacidad está documentada y es comprobable', () => {
    assert.ok(existsSync(join(ROOT, 'src/app/legal/privacidad/page.tsx')))
    const src = read('src/app/legal/privacidad/page.tsx')
    assert.ok(src.includes('memoria temporal'), 'aclara que es memoria temporal')
    assert.ok(src.includes('no se envían'), 'afirma que no se envían datos')
  })
})
