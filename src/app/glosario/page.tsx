import type { Metadata } from 'next'
import { HubLayout } from '@/components/shared'
import { glossaryTerms } from '@/config/glossary'

export const metadata: Metadata = {
  title: 'Glosario de salud femenina: hormonas, ciclo y menopausia',
  description: 'Definiciones claras de estrógeno, progesterona, FSH, LH, ovulación, perimenopausia, SOP, endometriosis, THS y osteoporosis, con enlaces a guías.',
  alternates: { canonical: '/glosario' },
  openGraph: {
    title: 'Glosario de salud femenina: hormonas, ciclo y menopausia',
    description: 'Definiciones claras de estrógeno, progesterona, FSH, LH, ovulación, perimenopausia, SOP, endometriosis, THS y osteoporosis.',
    url: '/glosario',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glosario de salud femenina: hormonas, ciclo y menopausia',
    description: 'Definiciones claras de estrógeno, progesterona, FSH, LH, ovulación, perimenopausia, SOP, endometriosis, THS y osteoporosis.',
  },
}

export default function GlosarioPage() {
  return (
    <HubLayout
      eyebrow="Educación y lenguaje claro"
      title="Glosario"
      intro="Términos clave para entender mejor conceptos de salud hormonal, ciclo menstrual, perimenopausia y menopausia. Elige una ficha para ver su explicación completa."
      description="Definiciones claras de estrógeno, progesterona, FSH, LH, ovulación, perimenopausia, SOP, endometriosis, THS y osteoporosis, con enlaces a guías."
      canonical="/glosario"
      items={glossaryTerms.map((t) => ({
        title: t.term,
        description: t.short,
        href: `/glosario/${t.slug}`,
      }))}
      breadcrumbLabel="Glosario"
    />
  )
}
