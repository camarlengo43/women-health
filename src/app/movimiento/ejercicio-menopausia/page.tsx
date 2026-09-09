import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio en la menopausia',
  description: 'Cómo adaptar fuerza, cardio, equilibrio y movilidad en la menopausia para autonomía y salud a largo plazo.',
  alternates: { canonical: '/movimiento/ejercicio-menopausia' },
}

export default function EjercicioMenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Ejercicio en la menopausia' }]}
      eyebrow="Movimiento y etapa"
      title="Ejercicio en la menopausia"
      intro="En la menopausia, moverse con regularidad ayuda a mantener la autonomía, la salud ósea y cardiovascular, la energía y el ánimo. El enfoque combina fuerza, cardio moderado, equilibrio y movilidad."
      description="Cómo adaptar fuerza, cardio, equilibrio y movilidad en la menopausia para autonomía y salud a largo plazo."
      canonical="/movimiento/ejercicio-menopausia"
      keyPoints={[
        'Fuerza 2-3 días por semana para preservar músculo y huesos.',
        'Cardio regular a intensidad conversacional para corazón y energía.',
        'Equilibrio y movilidad ganan importancia para prevenir caídas.',
        'Adaptar la sesión a las articulaciones y la energía de cada día.',
      ]}
      sections={[
        {
          title: 'Una combinación que sostiene',
          body: 'La evidencia general apoya combinar fuerza progresiva, actividad aeróbica, trabajo de equilibrio y movilidad. Cada bloque aporta algo distinto: el músculo y el hueso responden a la carga, el corazón al cardio y la confianza al equilibrio.',
          list: ['Fuerza progresiva 2-3 días', 'Cardio moderado repartido en la semana', 'Equilibrio y movilidad'],
        },
        {
          title: 'Qué se sabe y qué puede variar',
          body: 'Se sabe que la actividad regular se asocia con mejor salud ósea, cardiovascular y funcional en esta etapa. Puede variar: el punto de partida, las limitaciones articulares, el tiempo disponible y el tipo de ejercicio que resulta sostenible para cada mujer.',
          list: ['Beneficios generales bien descritos', 'Punto de partida individual', 'Sostenibilidad personal'],
        },
        {
          title: 'Cómo adaptar la intensidad',
          body: 'Una referencia práctica es la intensidad conversacional: poder hablar con frases cortas durante el cardio. En fuerza, la técnica va antes que la carga y la progresión es gradual, con descansos suficientes.',
          list: ['Intensidad conversacional en cardio', 'Técnica antes que carga', 'Progresión gradual'],
        },
        {
          title: 'Cuándo buscar apoyo',
          body: 'Ante dolor articular persistente, mareos, pérdidas de orina con el esfuerzo o enfermedades crónicas, conviene pedir orientación profesional (medicina, fisioterapia o ejercicio) antes de intensificar la rutina.',
          list: ['Dolor persistente o mareos', 'Suelo pélvico con síntomas', 'Enfermedades crónicas'],
        },
      ]}
      faq={[
        {
          question: '¿Caminar es suficiente?',
          answer: 'Caminar es una excelente base aeróbica, pero conviene complementarla con fuerza y equilibrio, que aportan estímulos que la caminata por sí sola no cubre.',
        },
      ]}
      sources={[
        { label: 'Organización Mundial de la Salud (OMS) — actividad física', href: 'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity' },
        { label: 'Colegio Americano de Medicina del Deporte (ACSM) — recursos públicos', href: 'https://www.acsm.org/' },
      ]}
      related={[
        { title: 'Ejercicio en menopausia (guía de etapa)', href: '/menopausia/ejercicio', description: 'Movimiento y salud funcional.' },
        { title: 'Fuerza en menopausia', href: '/menopausia/fuerza', description: 'Mantener masa muscular.' },
        { title: 'Rutina de fuerza en menopausia', href: '/movimiento/rutina-fuerza-menopausia', description: 'Ejemplo práctico de sesión.' },
        { title: 'Osteoporosis', href: '/menopausia/osteoporosis', description: 'Prevención y hábitos.' },
      ]}
      tools={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]}
      topics={[
        { title: 'Hub de menopausia', href: '/menopausia' },
        { title: 'Ejercicio en perimenopausia', href: '/movimiento/ejercicio-perimenopausia' },
        { title: 'Equilibrio', href: '/movimiento/equilibrio' },
      ]}
      cta={{ label: 'Ver guía de menopausia', href: '/menopausia' }}
    />
  )
}
