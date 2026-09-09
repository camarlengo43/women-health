import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Salud ósea y ejercicio',
  description: 'Descubre cómo el ejercicio puede apoyar la salud ósea, la fuerza muscular y el bienestar en distintas etapas.',
  alternates: { canonical: '/movimiento/salud-osea' },
}

export default function MovimientoSaludOseaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Salud ósea' }]}
      eyebrow="Huesos y movilidad"
      title="Salud ósea y ejercicio"
      intro="La salud ósea se apoya en varios factores, entre ellos la actividad física. El ejercicio de fuerza, la movilidad y la actividad regular pueden contribuir a mantener la estructura ósea y la capacidad funcional."
      sections={[
        {
          title: 'Qué puede ayudar',
          body: 'La carga mecánica del movimiento puede ser un estímulo útil para los huesos y la musculatura. La combinación de fuerza, equilibrio y actividad sostenida puede desempeñar un papel relevante en la salud ósea a lo largo del tiempo.',
          list: ['Apoyo a la densidad ósea', 'Mejora de la fuerza funcional', 'Mayor seguridad en el movimiento'],
        },
        {
          title: 'Cómo integrarlo de forma realista',
          body: 'No hace falta un enfoque extremo. Las rutinas constantes de fuerza, sabiendo ajustar la intensidad a la persona, suelen ser más útiles que sesiones muy intensas y poco sostenibles.',
          list: ['Entrenamiento regular', 'Progresión gradual', 'Cuidado de la recuperación'],
        },
        {
          title: 'Cuando hablar con la clínica',
          body: 'Si hay dolor óseo forte, fracturas previas, pérdida de masa muscular o dudas importantes sobre el ejercicio, puede ser buena idea consultar con un profesional sanitario.',
          list: ['Fracturas o dolor persistente', 'Limitación marcada', 'Dudas sobre ejercicio y salud ósea'],
        },
      ]}
      cta={{ label: 'Ver movimiento en perimenopausia', href: '/perimenopausia/ejercicio' }}
    />
  )
}
