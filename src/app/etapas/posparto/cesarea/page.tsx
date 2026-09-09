import type { Metadata } from 'next'
import { InfoPageTemplate } from '@/components/shared'

export const metadata: Metadata = {
  title: 'Recuperación después de una cesárea',
  description:
    'Recuperación tras cesárea: cuidado de la incisión, movilidad progresiva, actividad física gradual, señales de alarma y cuándo consultar. Información general orientativa.',
  alternates: { canonical: '/etapas/posparto/cesarea' },
}

export default function CesareaPage() {
  return (
    <InfoPageTemplate
      breadcrumbItems={[
        { label: 'Etapas', href: '/etapas' },
        { label: 'Posparto', href: '/etapas/posparto' },
        { label: 'Cesárea' },
      ]}
      eyebrow="Posparto · Cesárea"
      title="Recuperación después de una cesárea"
      intro="Después de una cesárea, la recuperación puede requerir una progresión diferente porque existe una incisión abdominal en cicatrización. Esta guía general explica el cuidado de la herida, la movilidad progresiva y las señales que justifican consultar. Debe adaptarse a tu evolución y a las indicaciones de tu equipo sanitario."
      description="Recuperación tras cesárea: incisión, movilidad, actividad progresiva y señales de alarma."
      canonical="/etapas/posparto/cesarea"
      keyPoints={[
        'La incisión necesita higiene según indicaciones y observación de su evolución.',
        'La movilidad suave y progresiva ayuda dentro del umbral del dolor.',
        'La actividad avanza sin plazos rígidos: depende de tu evolución y del equipo sanitario.',
        'Apertura, secreción, fiebre o dolor que aumenta requieren consulta pronta.',
      ]}
      sections={[
        {
          title: 'Recuperación de la incisión',
          body: 'La incisión de la cesárea cicatriza durante semanas. Mantener la zona limpia y seca, seguir las indicaciones de higiene recibidas y observar cambios (enrojecimiento, inflamación, secreción) forma parte del cuidado general. Un enrojecimiento leve inicial puede entrar en lo esperado, pero la apertura, el sangrado persistente, la secreción con mal olor, el aumento del dolor o la fiebre son motivos para consultar sin demora.',
          list: ['Higiene según indicaciones del equipo', 'Zona limpia, seca y observada', 'Consultar ante apertura, secreción o fiebre'],
        },
        {
          title: 'Molestias abdominales y limitaciones iniciales',
          body: 'Es habitual notar dolor o tirantez abdominal, molestias al cambiar de postura, al toser o al cargar al bebé, y cansancio con esfuerzos pequeños. Incorporarse con apoyo, repartir las tareas, evitar cargar peso y no forzar el abdomen son medidas generales prudentes. Cada evolución es distinta y las indicaciones del equipo sanitario prevalecen sobre cualquier pauta general.',
          list: ['Dolor y tirantez al inicio', 'Apoyo al incorporarse', 'Evitar peso y esfuerzos abdominales'],
        },
        {
          title: 'Movilidad progresiva',
          body: 'La movilidad temprana y suave —paseos cortos, cambios de postura frecuentes, caminar dentro de casa— suele favorecer la circulación y la recuperación, siempre dentro del umbral del dolor y salvo indicación contraria. Aumentar poco a poco la distancia y el tiempo, sin forzar la zona de la incisión, es más útil que avanzar por un calendario fijo.',
          list: ['Paseos cortos según tolerancia', 'Cambios de postura frecuentes', 'Progresión por sensaciones, no por fechas rígidas'],
        },
        {
          title: 'Actividad física progresiva',
          body: 'La fuerza progresiva y el cardio progresivo llegan después de la fase de movilidad, de forma gradual y sin forzar la pared abdominal. No existen semanas universales del tipo «a las X semanas puedes hacer X»: los plazos que puedas leer son orientativos y dependen de la cicatrización, de posibles complicaciones y de las indicaciones profesionales. Pausar ante dolor en la incisión, sangrado que aumenta o cansancio desproporcionado es un criterio general prudente.',
          list: ['Sin plazos rígidos universales', 'Fuerza y cardio progresivos y suaves', 'Visto bueno profesional antes de intensificar'],
        },
        {
          title: 'Señales de alarma y cuándo consultar',
          body: 'Pide atención pronta ante fiebre, dolor abdominal intenso o que aumenta, enrojecimiento creciente o calor en la herida, apertura o secreción, sangrado vaginal muy abundante o con mal olor, dolor de cabeza intenso, dificultad para respirar, dolor o hinchazón en las piernas, o malestar emocional persistente. Esta información es general y no indica si una actividad concreta es segura para ti.',
          list: ['Fiebre o dolor que aumenta', 'Signos de infección en la herida', 'Síntomas generales preocupantes'],
        },
      ]}
      faq={[
        {
          question: '¿Cuánto tarda en cicatrizar una cesárea?',
          answer:
            'La piel suele cerrar en los primeros días o semanas y los tejidos profundos necesitan más tiempo. Cada evolución es distinta: el equipo sanitario indica revisiones y pautas según tu caso.',
        },
        {
          question: '¿Cuándo puedo caminar o subir escaleras tras una cesárea?',
          answer:
            'La movilidad suave temprana suele recomendarse según tolerancia y salvo indicación contraria. Aumenta poco a poco la distancia, evita cargar peso y consulta ante dolor, mareo o sangrado.',
        },
        {
          question: '¿Existen plazos fijos para volver al ejercicio?',
          answer:
            'No hay semanas universales válidas para todas. Los plazos deben tomarse como orientativos: dependen de la cicatrización, de posibles complicaciones y de las indicaciones de tu equipo sanitario.',
        },
      ]}
      sources={[
        { label: 'OMS — salud materna y posparto', href: 'https://www.who.int/es/news-room/fact-sheets/detail/maternal-health' },
        { label: 'NHS — recuperación tras cesárea', href: 'https://www.nhs.uk/conditions/caesarean-section/recovery/' },
        { label: 'ACOG — cuidado posparto', href: 'https://www.acog.org/womens-health/infographics/postpartum-care' },
        { label: 'NICE NG194 — cuidado postnatal', href: 'https://www.nice.org.uk/guidance/ng194' },
      ]}
      related={[
        { title: 'Posparto y recuperación', href: '/etapas/posparto', description: 'Guía general con contenido contextual opcional.' },
        { title: 'Recuperación tras parto vaginal', href: '/etapas/posparto/parto-vaginal', description: 'Suelo pélvico y progresión del movimiento.' },
        { title: 'Suelo pélvico', href: '/movimiento/suelo-pelvico', description: 'Cuidado básico y cuándo pedir valoración.' },
      ]}
      cta={{ label: 'Ver guía general de posparto', href: '/etapas/posparto' }}
    />
  )
}
