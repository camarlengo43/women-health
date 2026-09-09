import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Ejercicios de fuerza para mujeres',
  description: 'Guía base de fuerza para mujeres: básicos, técnica, progresión y cómo empezar sin gimnasio obligatorio.',
  path: '/movimiento/ejercicios-fuerza-mujeres',
  type: 'article',
})

export default function EjerciciosFuerzaMujeresPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Ejercicios de fuerza para mujeres' }]}
      eyebrow="Guía de fuerza"
      title="Ejercicios de fuerza para mujeres"
      intro="La fuerza con peso corporal, mancuernas o bandas elásticas es suficiente para empezar. Esta guía explica los movimientos básicos, la técnica y cómo progresar con seguridad."
      description="Guía base de fuerza para mujeres: básicos, técnica, progresión y cómo empezar sin gimnasio obligatorio."
      canonical="/movimiento/ejercicios-fuerza-mujeres"
      keyPoints={[
        'Con 2 días de cuerpo completo se puede empezar y progresar.',
        'Los básicos son sentadilla, empuje, tracción, bisagra de cadera y core.',
        'La técnica va antes que la carga; la progresión es gradual.',
        'Mancuernas, bandas o peso corporal sirven; no hace falta gimnasio.',
      ]}
      sections={[
        {
          title: 'Los movimientos básicos',
          body: 'Cinco patrones cubren casi todo: sentadilla (tren inferior), empuje (pecho-hombros), tracción (espalda), bisagra de cadera (glúteos e isquios) y core (estabilidad del tronco). Dominar estos patrones con buena técnica es la base.',
          list: ['Sentadilla y zancada', 'Flexiones o press', 'Remo con banda o mancuerna', 'Bisagra de cadera y plancha'],
        },
        {
          title: 'Qué se sabe y qué puede variar',
          body: 'Se sabe que el entrenamiento de fuerza regular se asocia con más masa muscular, mejor densidad ósea y mejor función diaria. Puede variar: la carga inicial, la velocidad de progresión y el material disponible en cada casa.',
          list: ['Beneficios generales bien descritos', 'Carga inicial individual', 'Material flexible'],
        },
        {
          title: 'Cómo empezar (nivel inicial)',
          body: 'Dos días de cuerpo completo con 4-5 ejercicios, 2 series de 8-12 repeticiones y descansos de 60-90 segundos. Cuando completes todas las series con buena técnica dos sesiones seguidas, añade una serie o un poco más de carga.',
          list: ['2 días de cuerpo completo', '4-5 ejercicios por sesión', '2 series × 8-12 repeticiones'],
        },
        {
          title: 'Cuándo buscar apoyo',
          body: 'Si hay dolor articular persistente, lesiones previas, embarazo o postparto reciente, o enfermedades crónicas, conviene pedir orientación profesional antes de cargar con intensidad.',
          list: ['Dolor persistente', 'Lesiones o embarazo/postparto', 'Dudas sobre técnica'],
        },
      ]}
      faq={[
        {
          question: '¿La fuerza "ensancha" o da volumen no deseado?',
          answer: 'Ganar volumen muscular notable requiere años de entrenamiento específico y superávit calórico. El entrenamiento moderado suele traducirse en más tono, fuerza y función, no en grandes cambios de volumen.',
        },
        {
          question: '¿Necesito gimnasio?',
          answer: 'No para empezar. Peso corporal, una banda elástica y un par de mancuernas permiten progresar durante meses.',
        },
      ]}
      sources={[
        { label: 'Organización Mundial de la Salud (OMS) — actividad física', href: 'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity' },
        { label: 'Colegio Americano de Medicina del Deporte (ACSM) — recursos públicos', href: 'https://www.acsm.org/' },
      ]}
      related={[
        { title: 'Fuerza', href: '/movimiento/fuerza', description: 'Músculo, huesos y función diaria.' },
        { title: 'Rutina de fuerza en menopausia', href: '/movimiento/rutina-fuerza-menopausia', description: 'Ejemplo práctico de sesión.' },
        { title: 'Salud ósea y movimiento', href: '/movimiento/salud-osea', description: 'Carga e impacto moderado.' },
        { title: 'Fuerza en menopausia', href: '/menopausia/fuerza', description: 'Mantener masa muscular.' },
      ]}
      tools={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]}
      topics={[
        { title: 'Hub de movimiento', href: '/movimiento' },
        { title: 'Suelo pélvico', href: '/movimiento/suelo-pelvico' },
      ]}
      cta={{ label: 'Generar mi rutina orientativa', href: '/generador-rutinas' }}
    />
  )
}
