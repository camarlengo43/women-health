import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Edad reproductiva y ciclo menstrual',
  description:
    'Ciclos regulares, registro del ciclo, fertilidad orientativa y hábitos que apoyan la salud hormonal en la edad reproductiva.',
  alternates: { canonical: '/etapas/edad-reproductiva' },
}

export default function EdadReproductivaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Edad reproductiva' }]}
      eyebrow="Etapa de la vida"
      title="Edad reproductiva y ciclo menstrual"
      intro="En esta etapa los ciclos suelen ser más regulares. Conocer las fases, registrar síntomas y cuidar sueño, movimiento y estrés apoya la salud hormonal del día a día."
      sections={[
        {
          title: 'Cómo es un ciclo habitual',
          body: 'Un ciclo orientativo dura entre 21 y 35 días, con sangrado de 2 a 7 días. Hay variación normal entre personas y entre meses.',
          list: ['21-35 días orientativos', 'Sangrado de 2 a 7 días', 'Variación normal entre meses'],
        },
        {
          title: 'Registrar ayuda',
          body: 'Anotar inicio, duración, cantidad, dolor, ánimo y sueño ayuda a detectar patrones y a preparar consultas más útiles.',
          list: ['Fecha de inicio y duración', 'Cantidad y dolor', 'Ánimo y sueño'],
        },
        {
          title: 'Fertilidad: estimación, no exactitud',
          body: 'La ventana fértil es una estimación que varía entre ciclos. Las calculadoras orientan pero no deben usarse como método anticonceptivo.',
          list: ['Ventana estimada', 'Varía entre ciclos', 'No es método anticonceptivo'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Ausencias repetidas sin embarazo, sangrado muy abundante o prolongado, dolor intenso o cambios bruscos merecen valoración profesional.',
          list: ['Ausencias repetidas', 'Sangrado abundante o prolongado', 'Dolor intenso'],
        },
      ]}
      cta={{ label: 'Calcular mi ciclo', href: '/calculadora-ciclo-menstrual' }}
    />
  )
}
