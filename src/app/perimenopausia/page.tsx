import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Perimenopausia',
  description: 'Guías útiles sobre qué es la perimenopausia, los síntomas frecuentes, los cambios menstruales y cuándo consultar.',
  alternates: { canonical: '/perimenopausia' },
}

const topics = [
  {
    title: 'Qué es la perimenopausia',
    href: '/perimenopausia/que-es',
    description: 'La etapa previa a la menopausia, con cambios hormonales graduales.',
    content: 'Es el periodo de transición antes de la menopausia, que puede durar varios años. Los ovarios producen estrógeno y progesterona de forma más irregular.',
    points: ['Proceso gradual y natural', 'Suele empezar entre los 40 y 50', 'Ciclos más irregulares'],
  },
  {
    title: 'Síntomas',
    href: '/perimenopausia/sintomas',
    description: 'Visión general de los cambios más frecuentes.',
    content: 'No todas las personas tienen los mismos síntomas ni con la misma intensidad. Los más descritos son cambios menstruales, sofocos, sueño fragmentado y cambios de ánimo.',
    points: ['Cambios menstruales', 'Sofocos y sudores nocturnos', 'Sueño y ánimo'],
  },
  {
    title: 'Primeros síntomas',
    href: '/perimenopausia/primeros-sintomas',
    description: 'Señales iniciales que muchas personas notan primero.',
    content: 'Suelen ser sutiles: reglas menos predecibles, más sensibilidad al calor por la noche o descanso menos reparador.',
    points: ['Reglas menos predecibles', 'Calor nocturno ocasional', 'Descanso menos reparador'],
  },
  {
    title: 'A los 40',
    href: '/perimenopausia/a-los-40',
    description: 'Qué puede cambiar alrededor de los 40.',
    content: 'Alrededor de los 40 pueden aparecer ciclos menos regulares, sofocos ocasionales o sueño más ligero. El ritmo es muy personal.',
    points: ['Ciclos variables', 'Sofocos ocasionales', 'Sueño más ligero'],
  },
  {
    title: 'Cambios en la menstruación',
    href: '/perimenopausia/cambios-menstruacion',
    description: 'Reglas más cortas, largas o con manchados.',
    content: 'La regularidad, duración y cantidad pueden variar. Anotar fechas y cantidad ayuda a detectar patrones y a preparar una consulta útil.',
    points: ['Duración variable', 'Cantidad variable', 'Registrar ayuda'],
  },
  {
    title: 'Sofocos',
    href: '/perimenopausia/sofocos',
    description: 'Episodios de calor y sudor, de día o de noche.',
    content: 'Se describen como oleadas de calor en cara, cuello o pecho, a veces con sudor y luego escalofríos. Ventilar, vestir por capas y evitar desencadenantes ayuda.',
    points: ['Oleadas de calor', 'Sudor nocturno', 'Capas y ventilación'],
  },
  {
    title: 'Insomnio',
    href: '/perimenopausia/insomnio',
    description: 'Despertares nocturnos y descanso fragmentado.',
    content: 'Los sofocos nocturnos, la ansiedad o los cambios hormonales pueden fragmentar el sueño. La rutina regular de horarios y el ambiente fresco ayudan.',
    points: ['Despertares frecuentes', 'Horarios regulares', 'Ambiente fresco y oscuro'],
  },
  {
    title: 'Cambios de humor',
    href: '/perimenopausia/cambios-humor',
    description: 'Irritabilidad o altibajos en esta etapa.',
    content: 'La fluctuación hormonal, el mal descanso y la carga vital pueden combinarse. Si el ánimo bajo persiste semanas, conviene pedir apoyo profesional.',
    points: ['Fluctuación hormonal + descanso', 'Apoyo social', 'Consultar si persiste'],
  },
  {
    title: 'Aumento de peso',
    href: '/perimenopausia/aumento-peso',
    description: 'Cambios graduales de peso o distribución corporal.',
    content: 'Suele relacionarse con menos masa muscular, descanso y hábitos. Fuerza 2-3 veces por semana y movimiento diario son más sostenibles que dietas estrictas.',
    points: ['Menos músculo con la edad', 'Fuerza regular', 'Descanso y hábitos'],
  },
  {
    title: 'Libido',
    href: '/perimenopausia/libido',
    description: 'Cambios en el deseo, con información respetuosa.',
    content: 'El deseo puede fluctuar por hormonas, cansancio o sequedad. Hablar con naturalidad en consulta es válido y frecuente.',
    points: ['Fluctuación normal', 'Sequedad tratable', 'Hablar en consulta'],
  },
  {
    title: 'Ejercicio',
    href: '/perimenopausia/ejercicio',
    description: 'Movimiento adaptado a esta etapa.',
    content: 'Combinar fuerza, cardio moderado, movilidad y equilibrio apoya huesos, energía y sueño.',
    points: ['Fuerza + cardio', 'Movilidad y equilibrio', 'Progresión suave'],
  },
  {
    title: 'Fuerza',
    href: '/perimenopausia/fuerza',
    description: 'Por qué la fuerza es clave aquí.',
    content: 'Preserva músculo y huesos y mejora la función diaria. Dos o tres sesiones de cuerpo completo con básicos son suficientes para empezar.',
    points: ['2-3 días por semana', 'Básicos: sentadilla, empuje, tracción', 'Técnica antes que carga'],
  },
  {
    title: 'Alimentación',
    href: '/perimenopausia/alimentacion',
    description: 'Ideas realistas sin dietas estrictas.',
    content: 'Priorizar proteína, fibra, calcio y vitamina D, con horarios regulares, suele ser más útil que prohibiciones rígidas.',
    points: ['Proteína y fibra', 'Calcio y vitamina D', 'Horarios regulares'],
  },
  {
    title: 'Cuándo consultar',
    href: '/perimenopausia/cuando-consultar',
    description: 'Señales que merecen valoración profesional.',
    content: 'Sangrado muy abundante, dolor intenso, síntomas que interfieren con tu vida o dudas persistentes merecen consulta.',
    points: ['Sangrado abundante o prolongado', 'Dolor intenso', 'Impacto en el día a día'],
  },
]

export default function PerimenopausePage() {
  return (
    <HubLayout
      eyebrow="Etapa de transición"
      title="Perimenopausia"
      intro="La perimenopausia es la etapa que precede a la menopausia y puede acompañarse de cambios en el ciclo, el sueño, los sofocos y el bienestar general."
      items={topics}
      breadcrumbLabel="Perimenopausia"
    />
  )
}
