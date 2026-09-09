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
  },
  {
    title: 'Cardio',
    href: '/movimiento/cardio',
    description: 'Corazón, energía y ánimo.',
  },
  {
    title: 'Movilidad',
    href: '/movimiento/movilidad',
    description: 'Articulaciones y postura.',
  },
  {
    title: 'Equilibrio',
    href: '/movimiento/equilibrio',
    description: 'Prevenir caídas y ganar confianza.',
  },
  {
    title: 'Salud ósea',
    href: '/movimiento/salud-osea',
    description: 'Carga e impacto moderado.',
  },
  {
    title: 'Suelo pélvico',
    href: '/movimiento/suelo-pelvico',
    description: 'Base de sostén y continencia.',
  },
  {
    title: 'Ejercicio en perimenopausia',
    href: '/movimiento/ejercicio-perimenopausia',
    description: 'Fuerza, cardio y descanso en transición.',
  },
  {
    title: 'Ejercicio en menopausia',
    href: '/movimiento/ejercicio-menopausia',
    description: 'Autonomía y salud a largo plazo.',
  },
  {
    title: 'Ejercicios de fuerza para mujeres',
    href: '/movimiento/ejercicios-fuerza-mujeres',
    description: 'Guía base sin gimnasio obligatorio.',
  },
  {
    title: 'Rutina de fuerza en menopausia',
    href: '/movimiento/rutina-fuerza-menopausia',
    description: 'Ejemplo práctico de sesión.',
  },
]

export default function MovimientoPage() {
  return (
    <HubLayout
      eyebrow="Movimiento"
      title="Muévete según tu etapa"
      intro="El ejercicio puede apoyar la salud ósea, la energía, el sueño y el bienestar general. Elige una guía según tu objetivo o tu etapa."
      items={topics}
      breadcrumbLabel="Movimiento"
      relatedTools={[
        { title: 'Generador de rutinas', href: '/generador-rutinas' },
      ]}
      relatedArticles={[
        { title: 'Fuerza en perimenopausia', href: '/perimenopausia/fuerza' },
        { title: 'Fuerza en menopausia', href: '/menopausia/fuerza' },
        { title: 'Ejercicio en perimenopausia', href: '/perimenopausia/ejercicio' },
        { title: 'Osteoporosis', href: '/menopausia/osteoporosis' },
      ]}
    />
  )
}
