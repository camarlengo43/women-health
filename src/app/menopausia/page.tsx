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
    content: 'La experiencia es muy variable. Los más descritos son sofocos, sudores nocturnos, sueño fragmentado y cambios de ánimo o concentración.',
    points: ['Sofocos y sudor nocturno', 'Sueño fragmentado', 'Ánimo y concentración'],
  },
  {
    title: 'Sofocos',
    href: '/menopausia/sofocos',
    description: 'Qué son y cómo entenderlos.',
    content: 'Oleadas de calor que pueden durar minutos, a veces con sudor. Capas de ropa, ventilación y registro de desencadenantes ayudan.',
    points: ['Oleadas de calor', 'Desencadenantes: calor, alcohol, estrés', 'Capas y ventilación'],
  },
  {
    title: 'Sueño',
    href: '/menopausia/sueno',
    description: 'Cómo afecta al descanso y qué puede ayudar.',
    content: 'Los despertares por calor o la ansiedad pueden fragmentar el descanso. Horarios regulares y ambiente fresco y oscuro son la base.',
    points: ['Horarios regulares', 'Ambiente fresco', 'Limitar pantallas de noche'],
  },
  {
    title: 'Ejercicio',
    href: '/menopausia/ejercicio',
    description: 'Movimiento y salud funcional para esta etapa.',
    content: 'Fuerza, caminata o cardio moderado, movilidad y equilibrio: la combinación que más apoya huesos, ánimo y autonomía.',
    points: ['Fuerza 2-3 días', 'Cardio moderado', 'Equilibrio'],
  },
  {
    title: 'Fuerza',
    href: '/menopausia/fuerza',
    description: 'Mantener masa muscular y calidad de vida.',
    content: 'Con mancuernas, bandas o peso corporal es suficiente para empezar. Prioriza básicos y progresión lenta.',
    points: ['Sentadilla, empuje, tracción', '2-3 series por ejercicio', 'Progresión lenta'],
  },
  {
    title: 'Salud ósea',
    href: '/menopausia/salud-osea',
    description: 'Apoyar huesos y movilidad.',
    content: 'La caída de estrógenos acelera la pérdida ósea. Carga progresiva, impacto moderado, calcio, vitamina D y valoración médica ayudan.',
    points: ['Carga + impacto moderado', 'Calcio y vitamina D', 'Valoración médica'],
  },
  {
    title: 'Osteoporosis',
    href: '/menopausia/osteoporosis',
    description: 'Qué es y qué ayuda a prevenirla.',
    content: 'Pérdida de densidad que aumenta el riesgo de fractura. A menudo no da síntomas hasta una fractura: por eso previene con hábitos y cribado.',
    points: ['A menudo silenciosa', 'Fuerza y equilibrio', 'Cribado según edad/riesgo'],
  },
  {
    title: 'Aumento de peso',
    href: '/menopausia/aumento-peso',
    description: 'Cambios metabólicos con hábitos realistas.',
    content: 'Menos músculo y cambios de descanso influyen más que la “fuerza de voluntad”. Enfoque en proteína, fibra, movimiento y sueño.',
    points: ['Proteína y fibra', 'Movimiento diario', 'Sueño'],
  },
  {
    title: 'Salud cardiovascular',
    href: '/menopausia/salud-cardiovascular',
    description: 'Corazón y salud vascular en esta etapa.',
    content: 'El riesgo cardiovascular aumenta tras la menopausia. Cardio regular, no fumar, tensión y lípidos controlados son clave.',
    points: ['Cardio regular', 'Tensión y lípidos', 'No fumar'],
  },
]

export default function MenopausiaPage() {
  return (
    <HubLayout
      eyebrow="Etapa de vida"
      title="Menopausia"
      intro="La menopausia es una etapa natural que puede ir acompañada de cambios en el sueño, los sofocos, la salud ósea y la energía. Despliega cada tarjeta aquí mismo."
      items={items}
      breadcrumbLabel="Menopausia"
    />
  )
}
