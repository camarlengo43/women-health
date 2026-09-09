import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Glosario de salud femenina',
  description: 'Términos clave sobre hormonas, ciclo, ovulación, perimenopausia y salud femenina para entender mejor la información.',
  alternates: { canonical: '/glosario' },
}

const terms = [
  { term: 'Estrógeno', text: 'Hormona que participa en el desarrollo de los genitales, la regulación del ciclo y la salud ósea.' },
  { term: 'Progesterona', text: 'Hormona que interviene principalmente en la segunda fase del ciclo y durante el embarazo.' },
  { term: 'FSH', text: 'Hormona foliculoestimulante, relacionada con la estimulación de los folículos ováricos.' },
  { term: 'LH', text: 'Hormona luteinizante, con un papel central en la ovulación.' },
  { term: 'Perimenopausia', text: 'Etapa previa a la menopausia, en la que los ciclos y las hormonas pueden cambiar de forma gradual.' },
  { term: 'Menopausia', text: 'Momento en el que finaliza la etapa reproductiva, definido por la última menstruación.' },
  { term: 'Amenorrea', text: 'Ausencia de menstruación en un periodo de tiempo que podría considerarse anormal para la persona.' },
  { term: 'Dismenorrea', text: 'Dolor menstrual intenso o molesto durante la menstruación.' },
  { term: 'Ovulación', text: 'Liberación del óvulo por el ovario durante el ciclo menstrual.' },
  { term: 'SOP', text: 'Síndrome de ovario poliquístico, un conjunto de alteraciones hormonales con síntomas variables.' },
  { term: 'Endometriosis', text: 'Enfermedad en la que tejido endometrial se encuentra fuera del útero, pudiendo causar dolor.' },
  { term: 'TSH', text: 'Hormona estimulante del tiroides, que puede influir en el estado de ánimo, el ciclo y la energía.' },
  { term: 'Osteoporosis', text: 'Pérdida de densidad ósea que puede aumentar el riesgo de fracturas.' },
]

export default function GlosarioPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Glosario' }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Educación y lenguaje claro</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Glosario</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Términos clave para entender mejor conceptos de salud hormonal, ciclo menstrual, perimenopausia y menopausia.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {terms.map((item) => (
          <article key={item.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h2 className="mb-2 text-xl font-semibold text-foreground">{item.term}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
