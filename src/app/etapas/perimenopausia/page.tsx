import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Perimenopausia: etapa de transición',
  description: 'Qué es la perimenopausia como etapa de la vida, qué cambios pueden aparecer y qué recursos ayudan a entenderla.',
  alternates: { canonical: '/etapas/perimenopausia' },
}

export default function EtapaPerimenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Perimenopausia' }]}
      eyebrow="Etapa de la vida"
      title="Perimenopausia: la etapa de transición"
      intro="La perimenopausia es la etapa de transición entre la edad reproductiva y la menopausia. Puede durar varios años y acompañarse de cambios graduales en el ciclo, el sueño, el ánimo y el bienestar general."
      description="Qué es la perimenopausia como etapa de la vida, qué cambios pueden aparecer y qué recursos ayudan a entenderla."
      canonical="/etapas/perimenopausia"
      keyPoints={[
        'Etapa de transición previa a la menopausia, de duración variable.',
        'Los cambios suelen ser graduales y distintos en cada mujer.',
        'Registrar el ciclo y los síntomas ayuda a entender el patrón.',
        'Hay guías por tema, herramientas y recursos para cada paso.',
      ]}
      sections={[
        {
          title: 'Qué caracteriza a esta etapa',
          body: 'La perimenopausia suele comenzar entre los 40 y los 50, aunque el momento exacto varía. Los ciclos pueden volverse menos predecibles y aparecer sofocos, cambios de sueño o de ánimo con intensidades muy distintas.',
          list: ['Inicio habitualmente entre los 40 y 50', 'Ciclos menos predecibles', 'Intensidad variable'],
        },
        {
          title: 'Qué puede ayudar en el día a día',
          body: 'Mantener rutinas de sueño regulares, moverse con frecuencia, cuidar la alimentación sin rigideces y pedir apoyo cuando algo interfiere con la vida diaria son hábitos que suelen ayudar.',
          list: ['Sueño y horarios regulares', 'Fuerza y movimiento frecuente', 'Apoyo social y profesional'],
        },
        {
          title: 'Cuándo consultar',
          body: 'El sangrado muy abundante o prolongado, el dolor intenso, los síntomas que interfieren con la vida diaria o las dudas persistentes merecen valoración profesional.',
          list: ['Sangrado abundante o prolongado', 'Dolor intenso', 'Impacto en el día a día'],
        },
      ]}
      sources={[
        { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        { label: 'The Menopause Society', href: 'https://menopause.org/' },
      ]}
      related={[
        { title: 'Hub de perimenopausia', href: '/perimenopausia', description: 'Todas las guías de esta etapa.' },
        { title: 'Qué es la perimenopausia', href: '/perimenopausia/que-es', description: 'La etapa explicada en detalle.' },
        { title: 'Primeros síntomas', href: '/perimenopausia/primeros-sintomas', description: 'Señales iniciales frecuentes.' },
        { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar', description: 'Señales que merecen valoración.' },
      ]}
      tools={[
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
      ]}
      topics={[
        { title: 'Menopausia (etapa)', href: '/etapas/menopausia' },
        { title: 'Postmenopausia', href: '/etapas/postmenopausia' },
        { title: 'Ejercicio en perimenopausia', href: '/movimiento/ejercicio-perimenopausia' },
      ]}
      cta={{ label: 'Explorar el hub de perimenopausia', href: '/perimenopausia' }}
    />
  )
}
