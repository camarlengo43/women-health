import { InfoPageTemplate } from '@/components/shared'
import { buildPageMetadata } from '@/lib/page-seo'

export const metadata = buildPageMetadata({
  title: 'Equilibrio y estabilidad',
  description: 'Revisa por qué el equilibrio y la estabilidad son importantes para la salud, la movilidad y el bienestar en distintas etapas.',
  path: '/movimiento/equilibrio',
  type: 'article',
})

export default function MovimientoEquilibrioPage() {
  return (
    <InfoPageTemplate
      canonical="/movimiento/equilibrio"
      breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Equilibrio' }]}
      eyebrow="Estabilidad y control"
      title="Equilibrio y estabilidad"
      intro="El equilibrio es clave para la autonomía, la seguridad en el movimiento y la prevención de caídas. A medida que cambia la etapa de vida, mantener el control corporal puede ser especialmente útil."
      sections={[
        {
          title: 'Qué aporta',
          body: 'Trabajar el equilibrio mejora la estabilidad, la coordinación y la confianza al movernos. Esto puede ser especialmente útil para fortalecer la relación con el cuerpo, la postura y la sensación de seguridad en la actividad diaria.',
          list: ['Mayor control corporal', 'Mejor coordinación', 'Apoyo a la movilidad segura'],
        },
        {
          title: 'Cómo incluirlo',
          body: 'Una buena práctica suele combinar ejercicios de equilibrio con fuerza y movilidad, en sesiones breves y progresivas. La clave es la regularidad y la progresión, no la complejidad.',
          list: ['Entrenamiento breve', 'Progresión gradual', 'Ajuste a cada nivel'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si se siente inestabilidad importante, mareo o riesgo frecuente de caídas, merece la pena valorar la situación con un profesional para obtener orientación segura y útil.',
          list: ['Inestabilidad frecuente', 'Mareo o pérdida de equilibrio', 'Dificultad funcional importante'],
        },
      ]}
      cta={{ label: 'Volver a movimiento', href: '/movimiento' }}
    />
  )
}
