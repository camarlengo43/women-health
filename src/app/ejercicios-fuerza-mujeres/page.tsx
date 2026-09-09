import type { Metadata } from 'next'
import { InfoPageTemplate, RelatedTools } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Ejercicios de fuerza para mujeres',
  description:
    'Guía práctica de fuerza para mujeres: por qué importa, movimientos básicos y cómo organizar 2-4 días por semana.',
  alternates: { canonical: '/ejercicios-fuerza-mujeres' },
}

export default function FuerzaMujeresPage() {
  return (
    <>
      <InfoPageTemplate
        breadcrumbItems={[{ label: 'Movimiento', href: '/movimiento' }, { label: 'Fuerza para mujeres' }]}
        eyebrow="Movimiento"
        title="Ejercicios de fuerza para mujeres"
        intro="La fuerza es una de las inversiones más rentables en salud: músculo, huesos, metabolismo y autonomía. Esta guía orienta cómo empezar con 2-4 días semanales."
        sections={[
          {
            title: 'Movimientos básicos',
            body: 'Prioriza patrones: sentadilla, bisagra de cadera, empuje, tracción, core y trabajo unilateral. Con mancuernas, bandas o peso corporal es suficiente para empezar.',
            list: ['Sentadilla y puente de glúteos', 'Remo y press', 'Plancha y peso muerto suave'],
          },
          {
            title: 'Cómo organizar la semana',
            body: 'Dos días de cuerpo completo para empezar, tres o cuatro si ya entrenas. Series de 2-3 por ejercicio, repeticiones de 6-12 y descansos que permitan buena técnica.',
            list: ['2 días: cuerpo completo', '3-4 días: dividir por patrones', 'Progresar carga poco a poco'],
          },
          {
            title: 'Seguridad',
            body: 'Calienta 5-10 minutos, prioriza técnica sobre carga y adapta si hay dolor, hipertensión, embarazo o posparto. Ante dudas, consulta con un profesional.',
            list: ['Calentamiento previo', 'Técnica primero', 'Adaptar a tu etapa'],
          },
        ]}
        cta={{ label: 'Generar mi rutina', href: '/generador-rutinas' }}
      />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <RelatedTools items={[{ title: 'Generador de rutinas', href: '/generador-rutinas' }]} />
      </div>
    </>
  )
}
