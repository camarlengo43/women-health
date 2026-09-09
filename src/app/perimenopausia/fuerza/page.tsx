import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Fuerza en perimenopausia',
  description:
    'Por qué la fuerza es clave en perimenopausia: músculo, huesos, energía y cómo empezar 2-3 días por semana de forma segura.',
  alternates: { canonical: '/perimenopausia/fuerza' },
}

export default function FuerzaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Fuerza' }]}
      eyebrow="Movimiento"
      title="Fuerza en perimenopausia"
      intro="El entrenamiento de fuerza ayuda a preservar músculo y huesos, a mantener la energía y a sentirse más capaz en el día a día. No hace falta exigirse al máximo para notar beneficios."
      sections={[
        {
          title: 'Por qué importa',
          body: 'A partir de esta etapa la masa muscular y la densidad ósea pueden disminuir más rápido. La fuerza regular, junto con impacto moderado y equilibrio, apoya la salud a largo plazo.',
          list: ['Preserva músculo', 'Apoya huesos', 'Mejora función diaria'],
        },
        {
          title: 'Cómo empezar',
          body: 'Dos o tres sesiones semanales de cuerpo completo con sentadillas, empujes, tracciones y core, progresando poco a poco, suelen ser suficientes para empezar con seguridad.',
          list: ['2-3 días por semana', 'Movimientos básicos', 'Progresión gradual'],
        },
        {
          title: 'Precauciones',
          body: 'Si hay dolor articular, suelo pélvico sensible, hipertensión u otras condiciones, adapta la carga y consulta con un profesional del ejercicio o sanitario.',
          list: ['Calentamiento previo', 'Técnica antes que carga', 'Adaptar si hay dolor'],
        },
      ]}
      cta={{ label: 'Generar una rutina de fuerza', href: '/generador-rutinas' }}
    />
  )
}
