import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicio en la perimenopausia',
  description: 'Guía práctica sobre ejercicio, fuerza, sueño y bienestar durante la perimenopausia.',
  alternates: { canonical: '/movimiento/ejercicio-perimenopausia' },
}

export default function EjercicioPerimenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Ejercicio en la perimenopausia' }]}
      eyebrow="Movimiento y transición"
      title="Ejercicio en la perimenopausia"
      intro="Durante la perimenopausia, la actividad física puede ayudar a mejorar la fuerza, la energía, la salud ósea y la calidad del sueño. Aun así, la mejor rutina es la que se adapta a la persona y a su momento actual."
      description="Guía práctica sobre ejercicio, fuerza, sueño y bienestar durante la perimenopausia."
      canonical="/movimiento/ejercicio-perimenopausia"
      keyPoints={[
        'Combinar fuerza, cardio moderado, movilidad y equilibrio suele ser una base útil.',
        'La constancia importa más que la intensidad máxima.',
        'Adaptar la sesión a la energía y el descanso de cada día ayuda a sostener el hábito.',
        'El dolor persistente o los mareos merecen valoración profesional.',
      ]}
      sections={[
        {
          title: 'Qué suele funcionar bien',
          body: 'La combinación de fuerza, cardio suave y movilidad suele ser una base útil para mantener el cuerpo activo y apoyar el bienestar general. Se trata más de constancia que de intensidad máxima.',
          list: ['Entrenamiento de fuerza 2-3 días por semana', 'Cardio ligero o moderado', 'Movilidad y recuperación'],
        },
        {
          title: 'Qué se sabe y qué puede variar',
          body: 'Se sabe que el ejercicio regular se asocia con mejor salud ósea, cardiovascular y anímica en la mediana edad. Puede variar: la tolerancia al esfuerzo según el descanso, la respuesta a la intensidad y el tipo de actividad que cada mujer disfruta y sostiene.',
          list: ['Beneficios generales bien descritos', 'Tolerancia individual variable', 'Preferencia personal clave para la adherencia'],
        },
        {
          title: 'Qué observar',
          body: 'Es útil tener en cuenta la energía, el sueño, los sofocos y la tolerancia al esfuerzo. Si una rutina provoca fatiga intensa o empeora la calidad del descanso, puede ser buena idea ajustarla.',
          list: ['Energía y sueño', 'Tolerancia al esfuerzo', 'Aparición de síntomas'],
        },
        {
          title: 'Cuándo buscar apoyo',
          body: 'Si hay dolor persistente, mareos o dudas sobre cómo adaptar el ejercicio a una etapa concreta, la valoración profesional puede ayudar a diseñar una planificación útil y segura.',
          list: ['Dolor o mareo', 'Necesidad de una orientación individual', 'Dudas sobre intensidad y recuperación'],
        },
      ]}
      faq={[
        {
          question: '¿Cuántos días conviene entrenar?',
          answer: 'Como orientación general, 2-3 días de fuerza más actividad aeróbica repartida en la semana suele ser un punto de partida razonable, ajustado a cada persona.',
        },
      ]}
      sources={[
        { label: 'Organización Mundial de la Salud (OMS) — actividad física', href: 'https://www.who.int/es/news-room/fact-sheets/detail/physical-activity' },
        { label: 'Colegio Americano de Medicina del Deporte (ACSM) — recursos públicos', href: 'https://www.acsm.org/' },
      ]}
      related={[
        { title: 'Ejercicio en perimenopausia (guía de etapa)', href: '/perimenopausia/ejercicio', description: 'Movimiento adaptado a esta etapa.' },
        { title: 'Fuerza en perimenopausia', href: '/perimenopausia/fuerza', description: 'Por qué la fuerza es clave aquí.' },
        { title: 'Fuerza', href: '/movimiento/fuerza', description: 'Músculo, huesos y función diaria.' },
        { title: 'Salud ósea y movimiento', href: '/movimiento/salud-osea', description: 'Carga e impacto moderado.' },
      ]}
      tools={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]}
      topics={[
        { title: 'Hub de perimenopausia', href: '/perimenopausia' },
        { title: 'Ejercicio en menopausia', href: '/movimiento/ejercicio-menopausia' },
        { title: 'Cardio', href: '/movimiento/cardio' },
      ]}
      cta={{ label: 'Ver guía de perimenopausia', href: '/perimenopausia' }}
    />
  )
}
