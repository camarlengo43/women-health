import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Sofocos y sudores nocturnos en la perimenopausia',
  description: 'Qué son los sofocos, por qué aparecen en la perimenopausia y cómo entenderlos con más claridad.',
  alternates: { canonical: '/perimenopausia/sofocos' },
}

export default function PerimenopausiaSofocosPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Perimenopausia', href: '/perimenopausia' }, { label: 'Sofocos' }]}
      eyebrow="Síntomas frecuentes"
      title="Sofocos y sudores nocturnos"
      intro="Los sofocos son episodios de calor repentino, enrojecimiento y sensación de calor intenso que pueden aparecer durante la perimenopausia. Algunos también aparecen por la noche y pueden afectar al descanso."
      description="Qué son los sofocos, por qué aparecen en la perimenopausia y cómo entenderlos con más claridad."
      canonical="/perimenopausia/sofocos"
      keyPoints={[
        'Los sofocos son episodios de calor repentino que muchas mujeres notan durante la perimenopausia.',
        'Su frecuencia e intensidad varían mucho entre mujeres y a lo largo del tiempo.',
        'Ventilar, vestir por capas y registrar posibles desencadenantes ayuda a entender el patrón.',
        'Si alteran el sueño o la vida diaria de forma persistente, conviene consultar.',
      ]}
      sections={[
        {
          title: 'Qué son y por qué aparecen',
          body: 'Los cambios hormonales, especialmente las fluctuaciones del estrógeno, pueden influir en los mecanismos que regulan la temperatura corporal y favorecer la aparición de episodios de calor repentino. La investigación sobre los mecanismos exactos sigue en desarrollo y la experiencia varía entre mujeres.',
          list: ['Calor repentino y enrojecimiento', 'Aparición inesperada', 'Puede empeorar en la noche'],
        },
        {
          title: 'Qué se sabe y qué puede variar',
          body: 'Se sabe que los sofocos son frecuentes en la transición menopáusica y que suelen concentrarse en cara, cuello y pecho, a veces con sudoración y después sensación de frío. Puede variar: la frecuencia (de ocasionales a varias veces al día), la intensidad, la duración de cada episodio y los desencadenantes de cada mujer.',
          list: ['Frecuencia e intensidad variables', 'Duración de minutos por episodio', 'Desencadenantes personales distintos'],
        },
        {
          title: 'Qué ayuda a identificar patrones',
          body: 'Es útil notar si aparecen con estrés, bebidas calientes, temperaturas altas o ciertos momentos del día. La frecuencia y la intensidad varían entre personas y no todos los episodios tienen la misma causa.',
          list: ['Aparecen con calor o estrés', 'Pueden afectar al sueño', 'Varían mucho entre personas'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Si los sofocos son muy frecuentes o muy intensos y afectan a la calidad del sueño, a la vida diaria o al funcionamiento emocional, conviene comentarlo con un profesional sanitario para explorar opciones y descartar otras causas.',
          list: ['Sueño muy alterado', 'Sudores nocturnos frecuentes', 'Impacto en la calidad de vida'],
        },
      ]}
      faq={[
        {
          question: '¿Los sofocos siempre significan perimenopausia?',
          answer: 'No necesariamente. Aunque son frecuentes en esta etapa, también pueden relacionarse con otros factores. Valorar el conjunto de cambios (ciclo, sueño, ánimo) ayuda a contextualizarlos.',
        },
        {
          question: '¿Cuánto pueden durar?',
          answer: 'La experiencia es muy variable: algunas mujeres los notan durante meses y otras durante años, con periodos de mayor y menor frecuencia.',
        },
      ]}
      sources={[
        { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO) — documentos sobre climaterio y menopausia', href: 'https://sego.es/' },
        { label: 'The Menopause Society — información sobre síntomas vasomotores', href: 'https://menopause.org/' },
      ]}
      related={[
        { title: 'Síntomas de la perimenopausia', href: '/perimenopausia/sintomas', description: 'Visión general de los cambios más frecuentes.' },
        { title: 'Qué es la perimenopausia', href: '/perimenopausia/que-es', description: 'La etapa previa a la menopausia.' },
        { title: 'Cuándo consultar', href: '/perimenopausia/cuando-consultar', description: 'Señales que merecen valoración profesional.' },
        { title: 'Insomnio en perimenopausia', href: '/perimenopausia/insomnio', description: 'Despertares nocturnos y descanso fragmentado.' },
      ]}
      tools={[
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        { title: 'Generador de rutinas', href: '/generador-rutinas' },
      ]}
      topics={[
        { title: 'Movimiento', href: '/movimiento' },
        { title: 'Sofocos en la menopausia', href: '/menopausia/sofocos' },
        { title: '¿Es normal tener sofocos a los 40?', href: '/es-normal/sofocos-a-los-40' },
      ]}
      cta={{ label: 'Ver guía general de síntomas', href: '/perimenopausia/sintomas' }}
    />
  )
}
