import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'
import { glossaryTerms } from '@/config/glossary'

export const metadata: Metadata = {
  title: 'Glosario de salud femenina',
  description: 'Términos clave sobre hormonas, ciclo, ovulación, perimenopausia y salud femenina para entender mejor la información.',
  alternates: { canonical: '/glosario' },
}

export default function GlosarioPage() {
  return (
    <HubLayout
      eyebrow="Educación y lenguaje claro"
      title="Glosario"
      intro="Términos clave para entender mejor conceptos de salud hormonal, ciclo menstrual, perimenopausia y menopausia. Elige una ficha para ver su explicación completa."
      items={glossaryTerms.map((t) => ({
        title: t.term,
        description: t.short,
        href: `/glosario/${t.slug}`,
      }))}
      breadcrumbLabel="Glosario"
    />
  )
}
