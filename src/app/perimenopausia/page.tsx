import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Perimenopausia: qué es, síntomas, ciclo y cuándo consultar',
  description: 'Guía clara sobre la perimenopausia: qué es, síntomas frecuentes, cambios menstruales, sofocos, sueño y señales para consultar. Con herramientas orientativas.',
  alternates: { canonical: '/perimenopausia' },
  openGraph: {
    title: 'Perimenopausia: qué es, síntomas, ciclo y cuándo consultar',
    description: 'Guía clara sobre la perimenopausia: qué es, síntomas frecuentes, cambios menstruales, sofocos, sueño y señales para consultar.',
    url: '/perimenopausia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perimenopausia: qué es, síntomas, ciclo y cuándo consultar',
    description: 'Guía clara sobre la perimenopausia: qué es, síntomas frecuentes, cambios menstruales, sofocos, sueño y señales para consultar.',
  },
}

const topics = [
  {
    title: 'Qué es la perimenopausia',
    href: '/perimenopausia/que-es',
    description: 'La etapa previa a la menopausia, con cambios hormonales graduales.',
  },
  {
    title: 'Síntomas',
    href: '/perimenopausia/sintomas',
    description: 'Visión general de los cambios más frecuentes.',
  },
  {
    title: 'Primeros síntomas',
    href: '/perimenopausia/primeros-sintomas',
    description: 'Señales iniciales que muchas personas notan primero.',
  },
  {
    title: 'A los 40',
    href: '/perimenopausia/a-los-40',
    description: 'Qué puede cambiar alrededor de los 40.',
  },
  {
    title: 'Cambios en la menstruación',
    href: '/perimenopausia/cambios-menstruacion',
    description: 'Reglas más cortas, largas o con manchados.',
  },
  {
    title: 'Sofocos',
    href: '/perimenopausia/sofocos',
    description: 'Episodios de calor y sudor, de día o de noche.',
  },
  {
    title: 'Insomnio',
    href: '/perimenopausia/insomnio',
    description: 'Despertares nocturnos y descanso fragmentado.',
  },
  {
    title: 'Cambios de humor',
    href: '/perimenopausia/cambios-humor',
    description: 'Irritabilidad o altibajos en esta etapa.',
  },
  {
    title: 'Aumento de peso',
    href: '/perimenopausia/aumento-peso',
    description: 'Cambios graduales de peso o distribución corporal.',
  },
  {
    title: 'Libido',
    href: '/perimenopausia/libido',
    description: 'Cambios en el deseo, con información respetuosa.',
  },
  {
    title: 'Ejercicio',
    href: '/perimenopausia/ejercicio',
    description: 'Movimiento adaptado a esta etapa.',
  },
  {
    title: 'Fuerza',
    href: '/perimenopausia/fuerza',
    description: 'Por qué la fuerza es clave aquí.',
  },
  {
    title: 'Alimentación',
    href: '/perimenopausia/alimentacion',
    description: 'Ideas realistas sin dietas estrictas.',
  },
  {
    title: 'Cuándo consultar',
    href: '/perimenopausia/cuando-consultar',
    description: 'Señales que merecen valoración profesional.',
  },
]

export default function PerimenopausePage() {
  return (
    <HubLayout
      eyebrow="Etapa de transición"
      title="Perimenopausia"
      intro="La perimenopausia es la etapa que precede a la menopausia y puede acompañarse de cambios en el ciclo, el sueño, los sofocos y el bienestar general. Elige una guía para profundizar en cada tema."
      description="Guía clara sobre la perimenopausia: qué es, síntomas frecuentes, cambios menstruales, sofocos, sueño y señales para consultar."
      canonical="/perimenopausia"
      items={topics}
      breadcrumbLabel="Perimenopausia"
      relatedTools={[
        { title: 'Test orientativo de perimenopausia', href: '/test-perimenopausia' },
        { title: 'Calculadora del ciclo menstrual', href: '/calculadora-ciclo-menstrual' },
        { title: 'Generador de rutinas', href: '/generador-rutinas' },
      ]}
      relatedArticles={[
        { title: '¿Es normal tener sofocos a los 40?', href: '/es-normal/sofocos-a-los-40' },
        { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
        { title: 'Hub de menopausia', href: '/menopausia' },
        { title: 'Ejercicio en perimenopausia', href: '/movimiento/ejercicio-perimenopausia' },
      ]}
    />
  )
}
