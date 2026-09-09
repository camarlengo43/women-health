import { Breadcrumbs } from '@/components/layout'
import { PerimenopauseTest } from '@/components/tools/PerimenopauseTest'
import { ToolEducation } from '@/components/tools/ToolEducation'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Test orientativo de perimenopausia: síntomas y señales',
  description:
    'Explora síntomas frecuentes de la perimenopausia (regla irregular, sofocos, insomnio) y recibe una lectura orientativa, sin diagnóstico ni registro.',
  path: '/test-perimenopausia',
})

export default function PerimenopauseTestPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Test orientativo' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta informativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Test orientativo de perimenopausia</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Este cuestionario es una herramienta educativa para explorar si has notado síntomas frecuentes relacionados con la transición menopáusica. No diagnostica perimenopausia ni otra enfermedad; su única finalidad es orientarte y ayudarte a decidir si merece la pena consultar a un profesional.
      </div>

      <PerimenopauseTest />

      <ToolEducation
        howItWorks="Marcas las afirmaciones que describan lo que has notado (cambios en la regla, sueño, sofocos, ánimo, sequedad). Según el número de señales, obtienes una lectura orientativa. Nada se guarda: al recargar, el test vuelve a empezar vacío."
        whatItMeans="El resultado resume cuántas señales frecuentes has marcado. Un número mayor sugiere que tus experiencias encajan con las descritas en la transición menopáusica, pero solo un profesional puede valorar tu caso con tu historia clínica."
        limitations={[
          'No es un test diagnóstico ni mide hormonas.',
          'Los mismos síntomas pueden tener otras causas (tiroides, estrés, otros cuadros).',
          'No contempla tu edad, tu historial ni tu medicación.',
          'El resultado no indica gravedad ni necesidad de tratamiento.',
        ]}
        faq={[
          {
            question: '¿Cómo saber si estoy en perimenopausia?',
            answer: 'Los primeros indicios suelen ser cambios en la regularidad de la regla, sueño más fragmentado, sofocos ocasionales o cambios de humor. Este test te ayuda a ordenar esas señales, pero solo un profesional con tu historia clínica puede valorar si corresponden a perimenopausia u otra causa.',
          },
          {
            question: '¿Un resultado alto significa que estoy en perimenopausia?',
            answer: 'No necesariamente. Indica que describes varias señales compatibles, pero la valoración requiere contexto clínico: edad, patrón menstrual, historial y, a veces, analíticas.',
          },
          {
            question: '¿Se guardan mis respuestas?',
            answer: 'No. El test funciona en tu navegador, no usa cuentas ni almacenamiento, y al recargar la página vuelve a su estado inicial vacío.',
          },
        ]}
        whenToConsult={[
          'Sangrado muy abundante o prolongado, o manchados entre reglas.',
          'Síntomas que interfieren con tu sueño, tu trabajo o tu vida diaria.',
          'Dudas persistentes sobre si lo que notas entra en esta etapa.',
        ]}
        sources={[
          { label: 'The Menopause Society', href: 'https://menopause.org/' },
          { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        ]}
        related={[
          { title: 'Qué es la perimenopausia', href: '/perimenopausia/que-es', description: 'La etapa explicada en detalle.' },
          { title: 'Primeros síntomas', href: '/perimenopausia/primeros-sintomas', description: 'Señales iniciales frecuentes.' },
          { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar', description: 'Señales que merecen valoración.' },
          { title: '¿Es normal tener sofocos a los 40?', href: '/es-normal/sofocos-a-los-40', description: 'Señal temprana frecuente.' },
        ]}
        relatedTools={[
          { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
          { title: 'Generador de rutinas', href: '/generador-rutinas' },
        ]}
      />
    </div>
  )
}
