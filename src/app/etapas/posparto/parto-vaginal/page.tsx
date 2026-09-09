import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Recuperación después del parto vaginal',
  description:
    'Recuperación tras parto vaginal: suelo pélvico, molestias perineales frecuentes, puntos o desgarros, movimiento progresivo y cuándo consultar. Información general orientativa.',
  alternates: { canonical: '/etapas/posparto/parto-vaginal' },
}

export default function PartoVaginalPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[
        { label: 'Etapas', href: '/etapas' },
        { label: 'Posparto', href: '/etapas/posparto' },
        { label: 'Parto vaginal' },
      ]}
      eyebrow="Posparto · Parto vaginal"
      title="Recuperación después del parto vaginal"
      intro="La recuperación después de un parto vaginal puede variar considerablemente. Algunas mujeres presentan molestias perineales, puntos o desgarros, mientras que otras no. Esta guía general explica lo habitual, cómo progresar con el movimiento y cuándo pedir una revisión."
      description="Recuperación tras parto vaginal: suelo pélvico, molestias frecuentes y progresión del movimiento."
      canonical="/etapas/posparto/parto-vaginal"
      keyPoints={[
        'La recuperación varía mucho: no todas presentan puntos, desgarros o complicaciones.',
        'El suelo pélvico se recupera de forma gradual, sin dolor ni prisas.',
        'El movimiento avanza de paseos suaves a fuerza y cardio progresivos.',
        'El dolor que aumenta, el sangrado preocupante o la fiebre merecen consulta pronta.',
      ]}
      sections={[
        {
          title: 'Recuperación después del parto vaginal',
          body: 'La recuperación después de un parto vaginal puede variar considerablemente. Algunas mujeres presentan molestias perineales, puntos o desgarros, mientras que otras no. El sangrado posparto disminuye con los días, el cansancio suele ser intenso y la zona perineal puede estar sensible al sentarse o caminar. El reposo relativo, la higiene habitual y aumentar la actividad poco a poco ayudan más que un calendario rígido.',
          list: ['Evolución muy variable entre mujeres', 'Sangrado que disminuye progresivamente', 'Reposo relativo y paciencia con el ritmo'],
        },
        {
          title: 'Suelo pélvico',
          body: 'El suelo pélvico queda solicitado tras el embarazo y el parto vaginal, y su recuperación es gradual. La reconexión suave con la respiración, evitar empujar en exceso al ir al baño y posponer cargas pesadas e impactos hasta que no haya dolor, pérdidas ni sensación de peso son enfoques generales prudentes. No es una valoración individual: ante síntomas persistentes, una fisioterapia de suelo pélvico puede orientar.',
          list: ['Reconexión gradual y sin dolor', 'Evitar impactos y cargas al inicio', 'Valoración si hay pérdidas o peso pélvico'],
        },
        {
          title: 'Molestias frecuentes',
          body: 'Entre las molestias frecuentes están la sensibilidad perineal, el escozor al orinar los primeros días, las hemorroides o el estreñimiento leve. Caminar suave, beber agua, tomar fibra y no permanecer mucho tiempo de pie suelen aliviar. Cuando hay puntos o desgarros, suelen reabsorberse solos; el enrojecimiento creciente, la apertura, la secreción con mal olor o el dolor intenso justifican una revisión.',
          list: ['Sensibilidad perineal y cansancio', 'Higiene suave y compresas frecuentes', 'Revisión si hay signos de infección'],
        },
        {
          title: 'Movimiento y recuperación progresiva',
          body: 'La vuelta al movimiento tras un parto vaginal suele seguir una progresión orientativa: movilidad y paseos suaves primero, después reconexión del suelo pélvico y fuerza progresiva, y más adelante cardio progresivo. Aumentar primero el tiempo y después la intensidad, descansar entre esfuerzos y pausar ante dolor, sangrado que aumenta o sensación de peso son criterios más útiles que plazos fijos. El visto bueno profesional ayuda a decidir cuándo intensificar.',
          list: ['Paseos suaves y movilidad primero', 'Fuerza progresiva antes que impacto', 'Pausar ante dolor, pérdidas o peso'],
        },
        {
          title: 'Cuándo consultar',
          body: 'Consulta pronto ante fiebre, sangrado muy abundante o con mal olor, dolor perineal intenso o que aumenta, apertura o secreción de los puntos, dificultad para orinar o defecar de forma persistente, tristeza profunda o dificultad para el día a día. Esta lista es general y no sustituye la valoración de tu equipo sanitario.',
          list: ['Fiebre o dolor que aumenta', 'Sangrado preocupante', 'Malestar emocional persistente'],
        },
      ]}
      faq={[
        {
          question: '¿Es normal tener puntos después de un parto vaginal?',
          answer:
            'No siempre. Algunas mujeres presentan desgarros o episiotomía con puntos y otras no. Cuando existen, suelen reabsorberse solos y mejorar en días o semanas con higiene habitual.',
        },
        {
          question: '¿Cuándo puedo retomar el ejercicio tras un parto vaginal?',
          answer:
            'Depende de tu evolución y de las indicaciones profesionales. En general se avanza de paseos suaves a fuerza progresiva y después a cardio, pausando ante dolor, pérdidas o sensación de peso.',
        },
        {
          question: '¿Qué hago si tengo pérdidas de orina?',
          answer:
            'Las pérdidas ocasionales al inicio pueden mejorar con la recuperación gradual. Si persisten, hay sensación de peso o dolor pélvico, pide una valoración de suelo pélvico en lugar de normalizarlo.',
        },
      ]}
      sources={[
        { label: 'OMS — salud materna y posparto', href: 'https://www.who.int/es/news-room/fact-sheets/detail/maternal-health' },
        { label: 'NHS — recuperación tras el parto', href: 'https://www.nhs.uk/conditions/baby/support-and-services/baby-and-you/' },
        { label: 'NICE NG194 — cuidado postnatal', href: 'https://www.nice.org.uk/guidance/ng194' },
        { label: 'SEGO — Sociedad Española de Ginecología y Obstetricia', href: 'https://sego.es/' },
      ]}
      related={[
        { title: 'Posparto y recuperación', href: '/etapas/posparto', description: 'Guía general con contenido contextual opcional.' },
        { title: 'Recuperación tras cesárea', href: '/etapas/posparto/cesarea', description: 'Incisión, movilidad y señales de alarma.' },
        { title: 'Suelo pélvico', href: '/movimiento/suelo-pelvico', description: 'Cuidado básico y cuándo pedir valoración.' },
      ]}
      cta={{ label: 'Ver guía general de posparto', href: '/etapas/posparto' }}
    />
  )
}
