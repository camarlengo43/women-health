import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Etapas de la vida',
  description: 'Adolescencia, edad reproductiva, embarazo, posparto, perimenopausia, menopausia y postmenopausia explicadas en una sola pantalla.',
  alternates: { canonical: '/etapas' },
}

const items = [
  {
    title: 'Adolescencia',
    description: 'Primeros ciclos y cambios puberales.',
    href: '/etapas/adolescencia',
  },
  {
    title: 'Edad reproductiva',
    description: 'Ciclo, fertilidad y autocuidado.',
    href: '/etapas/edad-reproductiva',
  },
  {
    title: 'Embarazo',
    description: 'Cambios por trimestres y señales.',
    href: '/etapas/embarazo',
  },
  {
    title: 'Posparto',
    description: 'Recuperación, descanso y apoyo.',
    href: '/etapas/posparto',
  },
  {
    title: 'Perimenopausia',
    description: 'Transición con cambios graduales.',
    href: '/etapas/perimenopausia',
  },
  {
    title: 'Menopausia',
    description: 'Nueva fase tras 12 meses sin regla.',
    href: '/etapas/menopausia',
  },
  {
    title: 'Postmenopausia',
    description: 'Salud a largo plazo.',
    href: '/etapas/postmenopausia',
  },
]

export default function EtapasPage() {
  return (
    <HubLayout
      eyebrow="Todas las etapas"
      title="Etapas de la vida"
      intro="Cada etapa tiene su propia guía: elige la tuya para ver contenidos, síntomas, movimiento y herramientas relacionadas."
      items={items}
      breadcrumbLabel="Etapas"
      relatedTools={[
        { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        { title: 'Calculadora de embarazo', href: '/calculadora-semanas-embarazo' },
      ]}
      relatedArticles={[
        { title: 'Hub de perimenopausia', href: '/perimenopausia' },
        { title: 'Hub de menopausia', href: '/menopausia' },
        { title: 'Hub de movimiento', href: '/movimiento' },
      ]}
    />
  )
}
