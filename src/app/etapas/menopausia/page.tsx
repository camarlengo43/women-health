import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Menopausia: etapa de la vida',
  description: 'Qué es la menopausia como etapa, qué cambios pueden acompañarla y qué recursos ayudan a vivirla con más información.',
  alternates: { canonical: '/etapas/menopausia' },
}

export default function EtapaMenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Menopausia' }]}
      eyebrow="Etapa de la vida"
      title="Menopausia: una nueva etapa"
      intro="La menopausia marca el fin de la etapa reproductiva y el inicio de una nueva fase. Con información, hábitos sostenibles y seguimiento adecuado, muchas mujeres la viven como una etapa de mayor conocimiento de su cuerpo."
      description="Qué es la menopausia como etapa, qué cambios pueden acompañarla y qué recursos ayudan a vivirla con más información."
      canonical="/etapas/menopausia"
      keyPoints={[
        'Se define tras 12 meses sin menstruación sin otra causa.',
        'Los cambios (sueño, sofocos, huesos, ánimo) varían entre mujeres.',
        'Fuerza, cardio, equilibrio y hábitos sostienen la salud a largo plazo.',
        'El seguimiento sanitario periódico gana importancia.',
      ]}
      sections={[
        {
          title: 'Qué caracteriza a esta etapa',
          body: 'Tras la menopausia, los niveles de estrógeno se mantienen bajos de forma estable. Pueden persistir sofocos o cambios de sueño durante un tiempo, y la salud ósea y cardiovascular pasan a un primer plano preventivo.',
          list: ['Fin de la etapa reproductiva', 'Cambios de intensidad variable', 'Prevención ósea y cardiovascular'],
        },
        {
          title: 'Qué puede ayudar en el día a día',
          body: 'La fuerza regular, el cardio moderado, el equilibrio, una alimentación con suficiente proteína, calcio y vitamina D, y el sueño regular forman una base sólida y sostenible.',
          list: ['Fuerza 2-3 días por semana', 'Cardio y equilibrio', 'Nutrición y descanso'],
        },
        {
          title: 'Seguimiento y cuándo consultar',
          body: 'Las revisiones periódicas y los cribados según edad y riesgo ayudan a detectar a tiempo lo tratable. Conviene consultar ante fracturas con caídas leves, sangrado nuevo, dolor persistente o cambios bruscos.',
          list: ['Revisiones periódicas', 'Cribados por edad y riesgo', 'Consultar cambios bruscos'],
        },
      ]}
      sources={[
        { label: 'Sociedad Española de Ginecología y Obstetricia (SEGO)', href: 'https://sego.es/' },
        { label: 'The Menopause Society', href: 'https://menopause.org/' },
      ]}
      related={[
        { title: 'Hub de menopausia', href: '/menopausia', description: 'Todas las guías de esta etapa.' },
        { title: 'Síntomas de la menopausia', href: '/menopausia/sintomas', description: 'Visión general.' },
        { title: 'Salud ósea en la menopausia', href: '/menopausia/salud-osea', description: 'Apoyar huesos y movilidad.' },
        { title: 'Postmenopausia', href: '/etapas/postmenopausia', description: 'Salud a largo plazo.' },
      ]}
      tools={[
        { title: 'Generador de rutinas', href: '/generador-rutinas' },
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
      ]}
      topics={[
        { title: 'Perimenopausia (etapa)', href: '/etapas/perimenopausia' },
        { title: 'Ejercicio en menopausia', href: '/movimiento/ejercicio-menopausia' },
        { title: 'Rutina de fuerza en menopausia', href: '/movimiento/rutina-fuerza-menopausia' },
      ]}
      cta={{ label: 'Explorar el hub de menopausia', href: '/menopausia' }}
    />
  )
}
