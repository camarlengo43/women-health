import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Menopausia',
  description: 'Guías útiles sobre menopausia, síntomas, sueño, salud ósea, ejercicio y cómo cuidarse con más información.',
  alternates: { canonical: '/menopausia' },
}

const items = [
  {
    title: 'Síntomas',
    description: 'Sofocos, sueño, cambios de humor, alteraciones del ciclo y más.',
    href: '/menopausia/sintomas',
  },
  {
    title: 'Sofocos',
    description: 'Qué son, por qué aparecen y cómo entenderlos con más claridad.',
    href: '/menopausia/sofocos',
  },
  {
    title: 'Sueno',
    description: 'Cómo afecta la menopausia al descanso y qué puede ayudar.',
    href: '/menopausia/sueno',
  },
  {
    title: 'Ejercicio',
    description: 'Rutinas de movimiento y salud funcional para esta etapa.',
    href: '/menopausia/ejercicio',
  },
  {
    title: 'Fuerza',
    description: 'Entrenamiento de fuerza para ayudarte a mantener masa muscular y calidad de vida.',
    href: '/menopausia/fuerza',
  },
  {
    title: 'Salud ósea',
    description: 'Cómo apoyar huesos, movilidad y prevención a lo largo de la menopausia.',
    href: '/menopausia/salud-osea',
  },
  {
    title: 'Osteoporosis',
    description: 'Qué es, qué factores la favorecen y qué puede ayudar a prevenirla.',
    href: '/menopausia/osteoporosis',
  },
  {
    title: 'Aumento de peso',
    description: 'Cómo entender los cambios metabólicos y qué apoyar con hábitos realistas.',
    href: '/menopausia/aumento-peso',
  },
  {
    title: 'Salud cardiovascular',
    description: 'Qué relación tiene la menopausia con el corazón y la salud vascular.',
    href: '/menopausia/salud-cardiovascular',
  },
]

export default function MenopausiaPage() {
  return (
    <HubLayout
      eyebrow="Etapa de vida"
      title="Menopausia"
      intro="La menopausia es una etapa natural que puede ir acompañada de cambios en el sueño, los sofocos, la salud ósea y la energía. Aquí encontrarás información útil y orientativa para entender mejor lo que puede aparecer."
      items={items}
      breadcrumbLabel="Menopausia"
    />
  )
}
