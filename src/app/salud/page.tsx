import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Salud femenina por temas',
  description: 'Menstruación, hormonas, síntomas, salud sexual, sueño, salud ósea y salud mental en una sola pantalla.',
  alternates: { canonical: '/salud' },
}

const items = [
  {
    title: 'Menstruación',
    description: 'Ciclo, cantidad, dolor y regularidad.',
    href: '/categoria/salud-menstrual',
  },
  {
    title: 'Hormonas',
    description: 'Estrógeno, progesterona, FSH, LH.',
    href: '/glosario',
  },
  {
    title: 'Síntomas',
    description: 'Respuestas directas a dudas frecuentes.',
    href: '/es-normal',
  },
  {
    title: 'Salud sexual',
    description: 'Deseo, sequedad y consulta sin tabú.',
    href: '/perimenopausia/libido',
  },
  {
    title: 'Sueño',
    description: 'Descanso fragmentado y qué ayuda.',
    href: '/menopausia/sueno',
  },
  {
    title: 'Salud ósea',
    description: 'Huesos fuertes a largo plazo.',
    href: '/menopausia/salud-osea',
  },
  {
    title: 'Salud mental',
    description: 'Ánimo, ansiedad y apoyo.',
    href: '/perimenopausia/cambios-humor',
  },
]

export default function SaludPage() {
  return (
    <HubLayout
      eyebrow="Salud por temas"
      title="Salud"
      intro="Explora los grandes temas de salud femenina. Cada tarjeta lleva a su guía o recurso correspondiente."
      items={items}
      breadcrumbLabel="Salud"
    />
  )
}
