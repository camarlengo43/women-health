import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Rutina de fuerza en la menopausia',
  description: 'Ejemplo práctico de sesión de fuerza en la menopausia: calentamiento, bloque principal y vuelta a la calma.',
  path: '/movimiento/rutina-fuerza-menopausia',
  type: 'article',
})

export default function RutinaFuerzaMenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Rutina de fuerza en menopausia' }]}
      eyebrow="Sesión de ejemplo"
      title="Rutina de fuerza en la menopausia"
      intro="Un ejemplo práctico de sesión de cuerpo completo: calentamiento, 4-5 ejercicios básicos, core y vuelta a la calma. Es una propuesta general, no una prescripción individual."
      description="Ejemplo práctico de sesión de fuerza en la menopausia: calentamiento, bloque principal y vuelta a la calma."
      canonical="/movimiento/rutina-fuerza-menopausia"
      keyPoints={[
        'Sesión de cuerpo completo de unos 30-45 minutos.',
        'Calentamiento de 5-10 minutos antes del bloque principal.',
        '4-5 básicos con 2-3 series y descansos de 60-90 segundos.',
        'Vuelta a la calma con movilidad suave y respiración.',
      ]}
      sections={[
        {
          title: 'Calentamiento (5-10 minutos)',
          body: 'Prepara articulaciones y circulación con movimientos suaves y progresivos antes de cargar.',
          list: ['Marcha en el sitio 2-3 minutos', 'Círculos de hombros, cadera y tobillos', 'Sentadillas sin peso 8-10 repeticiones'],
        },
        {
          title: 'Bloque principal (20-30 minutos)',
          body: 'Cuatro o cinco ejercicios básicos de cuerpo completo. Descansa 60-90 segundos entre series y prioriza la técnica sobre la carga.',
          list: ['Sentadilla goblet o con peso corporal: 2-3 series × 8-12', 'Flexiones de pared o suelo: 2-3 series × 8-12', 'Remo con banda o mancuerna: 2-3 series × 10 por lado', 'Bisagra de cadera o puente de glúteos: 2-3 series × 10-12', 'Plancha: 2 series × 20-30 segundos'],
        },
        {
          title: 'Vuelta a la calma (5 minutos)',
          body: 'Baja las pulsaciones y dedica unos minutos a la movilidad suave de las zonas trabajadas.',
          list: ['Caminata suave 2 minutos', 'Estiramientos suaves 20-30 segundos por zona', 'Respiración lenta 1 minuto'],
        },
        {
          title: 'Cómo progresar y cuándo consultar',
          body: 'Cuando completes todas las series con buena técnica dos sesiones seguidas, añade una serie o un poco más de carga. Si aparece dolor articular persistente, mareos o dudas por alguna condición de salud, consulta a un profesional antes de intensificar.',
          list: ['Progresión gradual, un cambio cada vez', 'Al menos un día de descanso entre sesiones iguales', 'Consultar ante dolor persistente'],
        },
      ]}
      faq={[
        {
          question: '¿Cada cuánto repetir esta sesión?',
          answer: 'Como orientación general, 2 veces por semana con al menos un día de descanso entre ambas suele funcionar bien para empezar.',
        },
      ]}
      sources={[
        { label: 'Organización Mundial de la Salud (OMS) — actividad física', href: 'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity' },
      ]}
      related={[
        { title: 'Fuerza en menopausia', href: '/menopausia/fuerza', description: 'Mantener masa muscular.' },
        { title: 'Ejercicio en menopausia', href: '/movimiento/ejercicio-menopausia', description: 'Autonomía y salud a largo plazo.' },
        { title: 'Ejercicios de fuerza para mujeres', href: '/movimiento/ejercicios-fuerza-mujeres', description: 'Guía base sin gimnasio.' },
        { title: 'Salud ósea y movimiento', href: '/movimiento/salud-osea', description: 'Carga e impacto moderado.' },
      ]}
      tools={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]}
      topics={[{ title: 'Hub de movimiento', href: '/movimiento' }]}
      cta={{ label: 'Generar mi rutina orientativa', href: '/generador-rutinas' }}
    />
  )
}
