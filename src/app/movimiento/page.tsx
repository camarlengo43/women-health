import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Movimiento y ejercicio',
  description: 'Descubre ejercicio para fuerza, cardio, movilidad, salud ósea y equilibrio en cada etapa.',
  alternates: { canonical: '/movimiento' },
}

const topics = [
  {
    title: 'Fuerza',
    href: '/movimiento/fuerza',
    description: 'Músculo, huesos y función diaria.',
    content: 'Dos o tres días de cuerpo completo con sentadilla, empuje, tracción y core. Técnica antes que carga.',
    points: ['2-3 días por semana', 'Básicos + core', 'Progresión lenta'],
  },
  {
    title: 'Cardio',
    href: '/movimiento/cardio',
    description: 'Corazón, energía y ánimo.',
    content: 'Caminata rápida, bici, baile o natación a intensidad moderada. Mejor repartido en la semana que todo de golpe.',
    points: ['150 min moderados/semana', 'Repartir en la semana', 'Intensidad conversacional'],
  },
  {
    title: 'Movilidad',
    href: '/movimiento/movilidad',
    description: 'Articulaciones y postura.',
    content: 'Sesiones cortas de cadera, columna y hombros. Ideal como calentamiento o pausa activa diaria.',
    points: ['5-10 min diarios', 'Cadera y columna', 'Sin dolor'],
  },
  {
    title: 'Equilibrio',
    href: '/movimiento/equilibrio',
    description: 'Prevenir caídas y ganar confianza.',
    content: 'Apoyos monopodales, tandem y superficies estables. Cerca de un apoyo seguro al empezar.',
    points: ['Unipodal y tandem', 'Cerca de apoyo', 'Progresión simple'],
  },
  {
    title: 'Salud ósea',
    href: '/movimiento/salud-osea',
    description: 'Carga e impacto moderado.',
    content: 'Fuerza progresiva + impacto moderado adaptado (marcha, baile, pequeños saltos si procede) + equilibrio.',
    points: ['Fuerza + impacto', 'Equilibrio', 'Calcio y vitamina D'],
  },
  {
    title: 'Suelo pélvico',
    href: '/movimiento/suelo-pelvico',
    description: 'Base de sostén y continencia.',
    content: 'Coordinación con respiración, sin empujar en exceso, y progresión suave. Ante pérdidas o dolor, fisioterapia especializada.',
    points: ['Respiración + coordinación', 'Sin empujar', 'Consultar si hay síntomas'],
  },
  {
    title: 'Ejercicio en perimenopausia',
    href: '/ejercicio-perimenopausia',
    description: 'Fuerza, cardio y descanso en transición.',
    content: 'La combinación fuerza + cardio moderado + movilidad es la que más apoya energía, sueño y huesos.',
    points: ['Fuerza prioritaria', 'Cardio moderado', 'Descanso'],
  },
  {
    title: 'Ejercicio en menopausia',
    href: '/ejercicio-menopausia',
    description: 'Autonomía y salud a largo plazo.',
    content: 'Mismo enfoque, con más énfasis en equilibrio y carga ósea, siempre adaptado a articulaciones y energía del día.',
    points: ['Carga ósea', 'Equilibrio', 'Adaptar al día'],
  },
  {
    title: 'Rutina de fuerza',
    href: '/rutina-fuerza-menopausia',
    description: 'Ejemplo práctico de sesión.',
    content: 'Calentamiento + 4-5 básicos + core + vuelta a la calma. Un ejemplo desplegable, no una prescripción individual.',
    points: ['Calentar 5-10 min', '4-5 básicos', 'Vuelta a la calma'],
  },
  {
    title: 'Fuerza para mujeres',
    href: '/ejercicios-fuerza-mujeres',
    description: 'Guía base sin gimnasio obligatorio.',
    content: 'Mancuernas, bandas o peso corporal sirven. Dos días de cuerpo completo para empezar.',
    points: ['Material simple', 'Cuerpo completo', '2 días inicio'],
  },
  {
    title: 'Salud ósea en movimiento',
    href: '/ejercicios-salud-osea',
    description: 'Qué estímulos necesita el hueso.',
    content: 'El hueso responde a la carga: fuerza + impacto moderado + equilibrio, más hábitos (proteína, calcio, vitamina D).',
    points: ['Carga progresiva', 'Impacto adaptado', 'Hábitos'],
  },
]

export default function MovimientoPage() {
  return (
    <HubLayout
      eyebrow="Movimiento"
      title="Muévete según tu etapa"
      intro="El ejercicio puede apoyar la salud ósea, la energía, el sueño y el bienestar general. Despliega cada tarjeta sin cambiar de pantalla."
      items={topics}
      breadcrumbLabel="Movimiento"
    />
  )
}
