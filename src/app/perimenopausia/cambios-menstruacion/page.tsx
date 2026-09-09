import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Cambios en la menstruación durante la perimenopausia',
  description: 'Entiende cómo cambian los ciclos durante la perimenopausia: frecuencia, duración, flujo y cuándo consultar.',
  alternates: { canonical: '/perimenopausia/cambios-menstruacion' },
}

export default function PerimenopausiaCambiosMenstruacionPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Cambios en la menstruación' }]}
      eyebrow="Ciclo y hormonales"
      title="Cambios en la menstruación durante la perimenopausia"
      intro="Uno de los cambios más frecuentes en la perimenopausia es la variación del ciclo. Los periodos pueden volverse más irregulares, más cortos, más largos o más intensos según la etapa y la persona."
      sections={[
        {
          title: 'Qué puede cambiar',
          body: 'Los ciclos pueden alargarse o acortarse, y la cantidad de flujo puede variar. También puede haber más días con síntomas previos a la regla o un patrón menos predecible que antes.',
          list: ['Ciclos más irregulares', 'Flujo más abundante o más ligero', 'Periodos más cortos o más largos'],
        },
        {
          title: 'Qué suelen observarse con el tiempo',
          body: 'Con la transición hormonal, la progesterona y el estrógeno pueden fluctuar de forma más marcada. Eso puede hacer que el patrón del ciclo se vuelva menos estable antes de que la menstruación se detenga por completo.',
          list: ['Más variabilidad entre ciclos', 'Cambios en el dolor o la intensidad', 'Cambios relacionados con sueño y estrés'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si una regla va muy irregulada, si hay sangrado muy abundante, si aparecen coágulos grandes o si hay dolor intenso, vale la pena valorar la situación con un profesional. Esto ayuda a descartar otras causas además de la transición hormonal.',
          list: ['Sangrado abundante o prolongado', 'Dolor intenso', 'Ciclos muy desordenados o muy frecuentes'],
        },
      ]}
      cta={{ label: 'Ver si es normal tener ciclos irregulares', href: '/es-normal/ciclos-irregulares' }}
    />
  )
}
