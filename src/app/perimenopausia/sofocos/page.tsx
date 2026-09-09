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
      sections={[
        {
          title: 'Qué son y por qué aparecen',
          body: 'Los cambios hormonales, especialmente las fluctuaciones del estrógeno, pueden afectar la regulación térmica del cuerpo y hacer que se desencadenen episodios de calor repentino.',
          list: ['Calor repentino y enrojecimiento', 'Aparición inesperada', 'Puede empeorar en la noche'],
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
      cta={{ label: 'Ver primera guía sobre síntomas', href: '/perimenopausia/sintomas' }}
    />
  )
}
