import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Posparto y recuperación',
  description:
    'Recuperación física, descanso fragmentado, apoyo emocional y retorno progresivo al movimiento tras el parto.',
  alternates: { canonical: '/etapas/posparto' },
}

export default function PospartoPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Posparto' }]}
      eyebrow="Etapa de la vida"
      title="Posparto y recuperación"
      intro="El posparto combina recuperación física, descanso interrumpido y adaptación emocional. Ir a tu ritmo, pedir apoyo y retomar el movimiento de forma progresiva ayuda más que exigirse."
      sections={[
        {
          title: 'Recuperación física',
          body: 'El cuerpo necesita semanas para recuperarse. Sangrado posparto, molestias pélvicas y cansancio son habituales al inicio y mejoran gradualmente.',
          list: ['Recuperación gradual', 'Descanso prioritario', 'Paciencia con el ritmo'],
        },
        {
          title: 'Descanso y apoyo',
          body: 'Dormir por bloques, repartir tareas y aceptar ayuda protege el ánimo y la energía. El apoyo de la pareja, familia o red cercana cuenta mucho.',
          list: ['Dormir por bloques', 'Repartir tareas', 'Aceptar ayuda'],
        },
        {
          title: 'Movimiento progresivo',
          body: 'Paseos suaves primero y, con el visto bueno profesional, fuerza y suelo pélvico de forma gradual. Sin prisas ni comparaciones.',
          list: ['Paseos suaves', 'Suelo pélvico gradual', 'Visto bueno profesional'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Fiebre, sangrado muy abundante o con mal olor, dolor intenso, tristeza profunda persistente o dificultad para el día a día merecen atención pronta.',
          list: ['Fiebre o dolor intenso', 'Sangrado preocupante', 'Tristeza persistente'],
        },
      ]}
      cta={{ label: 'Movimiento suave adaptado', href: '/movimiento' }}
    />
  )
}
