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
    href: '/menopausia/sintomas',
    description: 'Sofocos, sueño, cambios de humor y más.',
  },
  {
    title: 'Sofocos',
    href: '/menopausia/sofocos',
    description: 'Qué son y cómo entenderlos.',
  },
  {
    title: 'Sueño',
    href: '/menopausia/sueno',
    description: 'Cómo afecta al descanso y qué puede ayudar.',
  },
  {
    title: 'Ejercicio',
    href: '/menopausia/ejercicio',
    description: 'Movimiento y salud funcional para esta etapa.',
  },
  {
    title: 'Fuerza',
    href: '/menopausia/fuerza',
    description: 'Mantener masa muscular y calidad de vida.',
  },
  {
    title: 'Salud ósea',
    href: '/menopausia/salud-osea',
    description: 'Apoyar huesos y movilidad.',
  },
  {
    title: 'Osteoporosis',
    href: '/menopausia/osteoporosis',
    description: 'Qué es y qué ayuda a prevenirla.',
  },
  {
    title: 'Aumento de peso',
    href: '/menopausia/aumento-peso',
    description: 'Cambios metabólicos con hábitos realistas.',
  },
  {
    title: 'Salud cardiovascular',
    href: '/menopausia/salud-cardiovascular',
    description: 'Corazón y salud vascular en esta etapa.',
  },
]

export default function MenopausiaPage() {
  return (
    <HubLayout
      eyebrow="Etapa de vida"
      title="Menopausia"
      intro="La menopausia es una etapa natural que puede ir acompañada de cambios en el sueño, los sofocos, la salud ósea y la energía. Elige una guía para profundizar en cada tema."
      items={items}
      breadcrumbLabel="Menopausia"
      relatedTools={[
        { title: 'Generador de rutinas', href: '/generador-rutinas' },
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
      ]}
      relatedArticles={[
        { title: '¿Es normal despertarse por la noche?', href: '/es-normal/despertarse-por-la-noche-menopausia' },
        { title: 'Hub de perimenopausia', href: '/perimenopausia' },
        { title: 'Ejercicio en menopausia', href: '/movimiento/ejercicio-menopausia' },
        { title: 'Salud ósea y movimiento', href: '/movimiento/salud-osea' },
      ]}
    />
  )
}
