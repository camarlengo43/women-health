/**
 * SEO / E-E-A-T tests (static analysis).
 *
 * - Sitemap: only public, canonical, indexable URLs (no /buscar,
 *   no duplicates, including the postpartum pages).
 * - Metadata: each indexable page with title/description/canonical and
 *   Open Graph + Twitter.
 * - JSON-LD: no reviews, ratings, or invented professionals.
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => readFileSync(join(ROOT, rel), 'utf8')

function listPages(dir) {
  const out = []
  for (const entry of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`
    if (entry.isDirectory()) out.push(...listPages(rel))
    else if (entry.name === 'page.tsx') out.push(rel)
  }
  return out
}

const PAGES = listPages('src/app')

describe('sitemap', () => {
  it('existe y excluye /buscar (noindex) sin duplicar URLs', () => {
    const src = read('src/app/sitemap.ts')
    assert.ok(!src.includes("'/buscar'"), '/buscar es noindex y no debe ir al sitemap')
    assert.ok(
      !src.includes('url: `${siteConfig.url}/buscar`'),
      '/buscar no debe declararse ni como URL estática',
    )
    const quoted = [...src.matchAll(/'(\/[^']*)'/g)].map((m) => m[1])
    const seen = new Set()
    const dupes = quoted.filter((p) => (seen.has(p) ? true : (seen.add(p), false)))
    assert.deepEqual(dupes, [], `URLs duplicadas en sitemap: ${dupes.join(', ')}`)
    const contactos = (src.match(/\/contacto[`'"]/g) ?? []).length
    assert.equal(contactos, 1, '/contacto debe declararse como URL una sola vez')
  })

  it('incluye las páginas de posparto y las herramientas', () => {
    const src = read('src/app/sitemap.ts')
    for (const path of [
      '/etapas/posparto',
      '/etapas/posparto/parto-vaginal',
      '/etapas/posparto/cesarea',
      '/calculadora-ciclo-menstrual',
      '/calculadora-ovulacion',
      '/calculadora-semanas-embarazo',
      '/calculadora-fecha-parto',
      '/test-perimenopausia',
      '/generador-rutinas',
    ]) {
      assert.ok(src.includes(`'${path}'`), `sitemap debe incluir ${path}`)
    }
  })
})

describe('robots', () => {
  it('permite el rastreo público, bloquea /buscar y referencia el sitemap', () => {
    const src = read('src/app/robots.ts')
    assert.ok(src.includes("allow: '/'"), 'permite rastreo público')
    assert.ok(src.includes('/buscar'), '/buscar (con queries) no se rastrea')
    assert.ok(src.includes('sitemap'), 'referencia al sitemap')
    assert.ok(!src.includes('.css') && !src.includes('.js'), 'no bloquea CSS/JS')
  })
})

describe('metadata por página', () => {
  for (const page of PAGES) {
    it(`${page} tiene canonical cuando define metadata`, () => {
      const src = read(page)
      const definesMetadata =
        src.includes('export const metadata') || src.includes('generateMetadata')
      if (!definesMetadata) return // e.g. pages inheriting the layout defaults
      const hasCanonical = src.includes('canonical') || src.includes('buildPageMetadata')
      assert.ok(hasCanonical, `${page} debe declarar canonical`)
    })
  }

  it('todas las páginas con metadata tienen Open Graph + Twitter', () => {
    const missing = []
    for (const page of PAGES) {
      if (page === 'src/app/buscar/page.tsx') continue // noindex: inherits layout defaults
      const src = read(page)
      const definesMetadata =
        src.includes('export const metadata') || src.includes('generateMetadata')
      if (!definesMetadata) continue
      const hasOg = src.includes('openGraph') || src.includes('buildPageMetadata')
      if (!hasOg) missing.push(page)
    }
    assert.deepEqual(missing, [], `páginas sin OG/Twitter: ${missing.join(', ')}`)
  })

  it('InfoPageTemplate siempre recibe canonical (activa Article + Breadcrumb JSON-LD)', () => {
    const missing = []
    for (const page of PAGES) {
      const src = read(page)
      if (src.includes('InfoPageTemplate') && !src.includes('canonical=')) {
        missing.push(page)
      }
    }
    assert.deepEqual(missing, [], `sin canonical prop: ${missing.join(', ')}`)
  })
})

describe('JSON-LD y E-E-A-T sin datos inventados', () => {
  it('no hay revisores, ratings ni profesiones ficticias', () => {
    const forbidden = ['Comité Científico', 'aggregateRating', 'Physician', '"review"']
    const files = [
      ...listPages('src/app'),
      ...PAGES.map(() => 'src/lib/seo.ts').filter((v, i, a) => a.indexOf(v) === i),
      'src/components/shared/Eeat.tsx',
      'src/lib/page-seo.ts',
    ]
    for (const file of files) {
      const src = read(file)
      for (const text of forbidden) {
        assert.ok(!src.includes(text), `${file} no debe contener "${text}"`)
      }
    }
  })

  it('la autoría es el equipo editorial, no personas inventadas', () => {
    const src = read('src/lib/seo.ts')
    assert.ok(src.includes('Organization'), 'el autor JSON-LD es organizativo')
    const eeat = read('src/components/shared/Eeat.tsx')
    assert.ok(
      eeat.includes('equipo editorial de VidaMujer'),
      'ReviewerCard declara equipo editorial, no un médico ficticio',
    )
  })
})
