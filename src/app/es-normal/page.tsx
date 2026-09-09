import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: '¿Es normal?',
  description: 'Respuestas breves, claras y útiles sobre cambios frecuentes del ciclo, la menopausia y la salud femenina.',
  alternates: { canonical: '/es-normal' },
}

const items = [
  {
    title: '¿Es normal tener ciclos irregulares?',
    href: '/es-normal/ciclos-irregulares',
    description: 'Varían con edad, estrés y hormonas.',
    content: 'Sí, dentro de ciertos márgenes. Si se repiten ausencias largas, sangrado muy abundante o dolor intenso, conviene consultar.',
    points: ['Anota fechas y duración', 'Estrés y etapa influyen', 'Consultar si se repite'],
  },
  {
    title: '¿Es normal tener sofocos a los 40?',
    href: '/es-normal/sofocos-a-los-40',
    description: 'Pueden aparecer en perimenopausia.',
    content: 'Sí, pueden ser una señal temprana de la transición. Si van con ciclos irregulares o sudor nocturno, encajan con esta etapa.',
    points: ['Calor + sudor', 'Peor de noche', 'Capas y registro'],
  },
  {
    title: '¿Es normal despertarse por la noche?',
    href: '/es-normal/despertarse-por-la-noche-menopausia',
    description: 'Sueño fragmentado en la transición.',
    content: 'Sí, es frecuente. Calor nocturno, ansiedad o nicturia pueden despertarte. Horarios y ambiente fresco ayudan.',
    points: ['Despertares 2-4 am', 'Ambiente fresco', 'Horarios regulares'],
  },
  {
    title: '¿Es normal que cambie la duración de la regla?',
    href: '/es-normal/regla-cada-24-dias',
    description: 'Fluctuaciones según la etapa.',
    content: 'Sí, la duración y regularidad pueden fluctuar, sobre todo en perimenopausia. Registra para ver el patrón.',
    points: ['Más corta o larga', 'Manchados posibles', 'Registrar'],
  },
  {
    title: '¿Es normal tener sangrado abundante?',
    href: '/es-normal/sangrado-abundante',
    description: 'Cuándo merece consulta.',
    content: 'Si empapas protección cada hora, dura más de 7 días o hay mareo y fatiga, busca valoración pronto.',
    points: ['Cada hora = consultar', '>7 días = consultar', 'Mareo/fatiga = consultar'],
  },
]

export default function EsNormalPage() {
  return (
    <HubLayout
      eyebrow="Información útil"
      title="¿Es normal?"
      intro="Respuestas sencillas para dudas habituales. Toca cada pregunta para ver la respuesta aquí mismo."
      items={items}
      breadcrumbLabel="¿Es normal?"
    />
  )
}
