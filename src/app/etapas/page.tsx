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
    content: 'Los primeros años suelen tener ciclos irregulares mientras el eje hormonal madura. Dolor leve o irregularidad inicial pueden ser habituales; el dolor intenso o ausencias prolongadas merecen consulta.',
    points: ['Ciclos iniciales irregulares', 'Dolor intenso = consultar', 'Hábitos y calendario útiles'],
    href: '/etapas/adolescencia',
    hrefLabel: 'Ver adolescencia →',
  },
  {
    title: 'Edad reproductiva',
    description: 'Ciclo, fertilidad y autocuidado.',
    content: 'Etapa de ciclos generalmente más regulares. Conocer fases, registrar síntomas y cuidar sueño, movimiento y estrés apoya la salud hormonal.',
    points: ['Ciclos más regulares', 'Registro del ciclo', 'Sueño y movimiento'],
    href: '/etapas/edad-reproductiva',
    hrefLabel: 'Ver edad reproductiva →',
  },
  {
    title: 'Embarazo',
    description: 'Cambios por trimestres y señales.',
    content: 'Transformación profunda por trimestres. La calculadora de semanas y fecha de parto ayuda a orientarse, sin sustituir el seguimiento profesional.',
    points: ['Cambios por trimestre', 'Calculadora orientativa', 'Seguimiento profesional'],
    href: '/etapas/embarazo',
    hrefLabel: 'Ver embarazo →',
  },
  {
    title: 'Posparto',
    description: 'Recuperación, descanso y apoyo.',
    content: 'Recuperación física, lactancia si se elige, descanso fragmentado y apoyo emocional. El movimiento se retoma de forma progresiva y personalizada.',
    points: ['Recuperación progresiva', 'Descanso y apoyo', 'Movimiento suave al inicio'],
    href: '/etapas/posparto',
    hrefLabel: 'Ver posparto →',
  },
  {
    title: 'Perimenopausia',
    description: 'Transición con cambios graduales.',
    content: 'Años previos a la menopausia con ciclos variables, sofocos o sueño fragmentado. El test orientativo y las guías ayudan a reconocer patrones.',
    points: ['Ciclos variables', 'Sofocos y sueño', 'Test orientativo'],
    href: '/perimenopausia',
    hrefLabel: 'Ver perimenopausia →',
  },
  {
    title: 'Menopausia',
    description: 'Nueva fase tras 12 meses sin regla.',
    content: 'Fin de la etapa reproductiva. Sueño, salud ósea, cardiovascular y energía ganan protagonismo, con hábitos y valoración médica.',
    points: ['12 meses sin regla', 'Huesos y corazón', 'Fuerza y descanso'],
    href: '/menopausia',
    hrefLabel: 'Ver menopausia →',
  },
  {
    title: 'Postmenopausia',
    description: 'Salud a largo plazo.',
    content: 'Tras la menopausia, el foco es mantener músculo, huesos, corazón y autonomía con fuerza, equilibrio, cardio y seguimiento.',
    points: ['Fuerza y equilibrio', 'Salud ósea y cardiovascular', 'Seguimiento regular'],
    href: '/etapas/postmenopausia',
    hrefLabel: 'Ver postmenopausia →',
  },
]

export default function EtapasPage() {
  return (
    <HubLayout
      eyebrow="Todas las etapas"
      title="Etapas de la vida"
      intro="Toda la información de cada etapa desplegable aquí mismo, sin navegar entre pantallas. Solo si quieres profundizar tienes el detalle."
      items={items}
      breadcrumbLabel="Etapas"
    />
  )
}
