import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Postmenopausia y salud a largo plazo',
  description:
    'Mantener músculo, huesos, corazón y autonomía tras la menopausia con hábitos sostenibles y seguimiento regular.',
  alternates: { canonical: '/etapas/postmenopausia' },
}

export default function PostmenopausiaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[{ label: 'Etapas', href: '/etapas' }, { label: 'Postmenopausia' }]}
      eyebrow="Etapa de la vida"
      title="Postmenopausia y salud a largo plazo"
      intro="Tras la menopausia, el foco es mantener músculo, huesos, corazón y autonomía con hábitos sostenibles y seguimiento regular. Pequeños hábitos constantes rinden más que esfuerzos puntuales."
      sections={[
        {
          title: 'Músculo y huesos',
          body: 'La fuerza 2-3 días por semana, el impacto moderado adaptado y el equilibrio ayudan a mantener densidad ósea y a prevenir caídas.',
          list: ['Fuerza regular', 'Impacto moderado adaptado', 'Equilibrio'],
        },
        {
          title: 'Corazón y energía',
          body: 'El riesgo cardiovascular aumenta en esta etapa. Cardio regular, no fumar y controlar tensión y lípidos son la base.',
          list: ['Cardio regular', 'Tensión y lípidos', 'No fumar'],
        },
        {
          title: 'Hábitos que sostienen',
          body: 'Proteína y fibra suficientes, calcio y vitamina D, sueño regular y vida social activa apoyan cuerpo y ánimo.',
          list: ['Proteína, calcio y vitamina D', 'Sueño regular', 'Vida activa'],
        },
        {
          title: 'Seguimiento',
          body: 'Revisiones periódicas, cribados según edad y riesgo, y consulta ante fracturas por caídas leves, dolor nuevo o cambios bruscos.',
          list: ['Revisiones periódicas', 'Cribados por edad', 'Consultar cambios bruscos'],
        },
      ]}
      cta={{ label: 'Ver salud ósea', href: '/menopausia/salud-osea' }}
    />
  )
}
