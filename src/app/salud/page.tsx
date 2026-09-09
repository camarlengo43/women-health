import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Salud femenina por temas: ciclo, hormonas, sueño y huesos',
  description: 'Explora salud femenina por temas: menstruación, hormonas, síntomas frecuentes, salud sexual, sueño, salud ósea y salud mental, con guías enlazadas.',
  alternates: { canonical: '/salud' },
  openGraph: {
    title: 'Salud femenina por temas: ciclo, hormonas, sueño y huesos',
    description: 'Menstruación, hormonas, síntomas, salud sexual, sueño, salud ósea y salud mental en un solo punto de partida.',
    url: '/salud',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salud femenina por temas: ciclo, hormonas, sueño y huesos',
    description: 'Menstruación, hormonas, síntomas, salud sexual, sueño, salud ósea y salud mental en un solo punto de partida.',
  },
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
      description="Explora salud femenina por temas: menstruación, hormonas, síntomas frecuentes, salud sexual, sueño, salud ósea y salud mental."
      canonical="/salud"
      items={items}
      breadcrumbLabel="Salud"
    />
  )
}
