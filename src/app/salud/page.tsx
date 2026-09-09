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
    content: 'Conocer fases y registrar duración, cantidad y dolor ayuda a distinguir lo habitual de lo que merece consulta.',
    points: ['Registrar ciclo', 'Dolor intenso = consultar', 'Sangrado >7 días = consultar'],
    href: '/categoria/salud-menstrual',
    hrefLabel: 'Ver salud menstrual →',
  },
  {
    title: 'Hormonas',
    description: 'Estrógeno, progesterona, FSH, LH.',
    content: 'Fluctúan a lo largo del ciclo y la vida. El glosario explica cada término en lenguaje claro.',
    points: ['Ciclo y transición', 'Lenguaje claro', 'Sin tecnicismos'],
    href: '/glosario',
    hrefLabel: 'Ver glosario →',
  },
  {
    title: 'Síntomas',
    description: 'Respuestas directas a dudas frecuentes.',
    content: 'Ciclos irregulares, sofocos, despertares o sangrado abundante respondidos de forma breve y accionable.',
    points: ['Respuesta breve', 'Qué observar', 'Cuándo consultar'],
    href: '/es-normal',
    hrefLabel: 'Ver ¿Es normal? →',
  },
  {
    title: 'Salud sexual',
    description: 'Deseo, sequedad y consulta sin tabú.',
    content: 'Los cambios de deseo o la sequedad son frecuentes y tratables. Hablar en consulta con naturalidad es válido.',
    points: ['Cambios frecuentes', 'Sequedad tratable', 'Consulta respetuosa'],
    href: '/perimenopausia/libido',
    hrefLabel: 'Ver guía →',
  },
  {
    title: 'Sueño',
    description: 'Descanso fragmentado y qué ayuda.',
    content: 'Calor nocturno y cambios hormonales fragmentan el sueño. Horarios regulares y ambiente fresco son la base.',
    points: ['Horarios regulares', 'Ambiente fresco', 'Menos pantallas'],
    href: '/menopausia/sueno',
    hrefLabel: 'Ver guía de sueño →',
  },
  {
    title: 'Salud ósea',
    description: 'Huesos fuertes a largo plazo.',
    content: 'Fuerza, impacto moderado, equilibrio, calcio y vitamina D, más valoración médica en menopausia.',
    points: ['Fuerza + impacto', 'Calcio y vitamina D', 'Prevención de caídas'],
    href: '/menopausia/salud-osea',
    hrefLabel: 'Ver salud ósea →',
  },
  {
    title: 'Salud mental',
    description: 'Ánimo, ansiedad y apoyo.',
    content: 'Hormonas, descanso y carga vital influyen. Si el ánimo bajo o la ansiedad persisten, pedir apoyo es cuidado.',
    points: ['Descanso y apoyo', 'Movimiento regular', 'Consultar si persiste'],
    href: '/perimenopausia/cambios-humor',
    hrefLabel: 'Ver guía →',
  },
]

export default function SaludPage() {
  return (
    <HubLayout
      eyebrow="Salud por temas"
      title="Salud"
      intro="Todos los temas desplegables aquí mismo. Cada tarjeta corresponde exactamente a su página de detalle."
      items={items}
      breadcrumbLabel="Salud"
    />
  )
}
