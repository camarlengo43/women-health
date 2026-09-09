import { Breadcrumbs } from '@/components/layout'
import { RoutineGenerator } from '@/components/tools/RoutineGenerator'
import { ToolEducation } from '@/components/tools/ToolEducation'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Generador de rutinas de ejercicio para mujeres',
  description:
    'Genera una rutina orientativa según tu objetivo (fuerza, cardio, movilidad), nivel y disponibilidad. Propuesta general en tu navegador, sin registro.',
  path: '/generador-rutinas',
})

export default function GeneradorRutinasPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Generador de rutinas' }]} />
      </div>

      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramienta orientativa</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Generador de rutinas</h1>
      </header>

      <div className="mb-10 rounded-2xl border border-border bg-muted/40 p-5 text-sm leading-relaxed text-muted-foreground">
        Esta herramienta genera una propuesta general de actividad según el objetivo, el nivel, la duración y la frecuencia elegidas. Es una propuesta general con fines educativos, no una prescripción individual, y no sustituye una valoración adaptada a necesidades concretas.
      </div>

      <RoutineGenerator />

      <ToolEducation
        howItWorks="Eliges nivel (inicial o intermedio), objetivo (fuerza, salud cardiovascular, movilidad, equilibrio, salud ósea o general), días por semana (2-5) y duración (15-60 min). El generador combina bloques de calentamiento, ejercicios con series y descansos, y vuelta a la calma según tu combinación. Todo ocurre en tu navegador."
        whatItMeans="Obtienes una semana tipo con el enfoque de cada día, los ejercicios con dosis orientativa y consejos de progresión. Sirve como punto de partida para moverte con estructura, no como plan personalizado."
        limitations={[
          'Es una propuesta general: no conoce tus lesiones, tu historial ni tu condición actual.',
          'Las dosis son orientativas y deben adaptarse a tu técnica y tus sensaciones.',
          'No sustituye a un profesional del ejercicio o de la salud.',
        ]}
        faq={[
          {
            question: '¿Por qué cambia la rutina al cambiar las opciones?',
            answer: 'Cada combinación de nivel, objetivo, días y duración genera una selección distinta de ejercicios, series y enfoques diarios. Una rutina de fuerza inicial de 2 días no es igual que una intermedia de 4.',
          },
          {
            question: '¿Cómo sé si el nivel inicial o intermedio es para mí?',
            answer: 'Si llevas menos de 3 meses entrenando fuerza o retomas tras una pausa larga, empieza en inicial. Si entrenas con regularidad y dominas la técnica de los básicos, prueba intermedio.',
          },
        ]}
        whenToConsult={[
          'Dolor articular persistente o lesiones previas.',
          'Mareos, dolor torácico o falta de aire desproporcionada con el esfuerzo.',
          'Embarazo, postparto reciente o enfermedades crónicas: pide orientación antes de intensificar.',
        ]}
        sources={[
          { label: 'Organización Mundial de la Salud (OMS) — actividad física', href: 'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity' },
          { label: 'Colegio Americano de Medicina del Deporte (ACSM) — recursos públicos', href: 'https://www.acsm.org/' },
        ]}
        related={[
          { title: 'Fuerza', href: '/movimiento/fuerza', description: 'Músculo, huesos y función diaria.' },
          { title: 'Ejercicios de fuerza para mujeres', href: '/movimiento/ejercicios-fuerza-mujeres', description: 'Guía base sin gimnasio obligatorio.' },
          { title: 'Rutina de fuerza en menopausia', href: '/movimiento/rutina-fuerza-menopausia', description: 'Ejemplo práctico de sesión.' },
          { title: 'Salud ósea y movimiento', href: '/movimiento/salud-osea', description: 'Carga e impacto moderado.' },
        ]}
        relatedTools={[
          { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        ]}
      />
    </div>
  )
}
