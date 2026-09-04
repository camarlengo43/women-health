import type { Category } from '@/types'

export const categories: Category[] = [
  {
    slug: 'salud-menstrual',
    name: 'Salud menstrual',
    excerpt:
      'Entiende tu ciclo, identifica cambios y aprende a escuchar las señales de tu cuerpo.',
    description:
      'El ciclo menstrual es mucho más que la menstruación. Es un proceso complejo que influye en la energía, el estado de ánimo, el sueño y el bienestar general. Comprender sus fases, reconocer qué es habitual y qué puede requerir atención médica es una herramienta valiosa para cuidar tu salud. En esta sección encontrarás información clara y basada en fuentes médicas sobre el ciclo menstrual, el dolor menstrual, las irregularidades y el síndrome premenstrual.',
    icon: 'heart-pulse',
    color: 'var(--accent-mauve)',
    topics: [
      'Fases del ciclo menstrual',
      'Menstruación irregular',
      'Dolor menstrual y dismenorrea',
      'Síndrome premenstrual',
      'Salud hormonal',
    ],
  },
  {
    slug: 'perimenopausia',
    name: 'Perimenopausia',
    excerpt:
      'La transición hacia la menopausia explicada con claridad: qué esperar y cuándo consultar.',
    description:
      'La perimenopausia es la etapa de transición hormonal que precede a la menopausia. Puede comenzar varios años antes de la última menstruación y suele acompañarse de cambios que muchas mujeres no esperan ni reconocen fácilmente. Entender qué ocurre en tu cuerpo durante esta fase puede ayudarte a tomar decisiones informadas sobre tu salud. Aquí encontrarás información sobre los síntomas más frecuentes, los cambios hormonales y las señales que pueden indicar que es buen momento para consultar con un profesional.',
    icon: 'sun-medium',
    color: 'var(--accent-warm)',
    topics: [
      'Qué es la perimenopausia',
      'Síntomas habituales',
      'Cambios hormonales',
      'Cuándo consultar',
      'Manejo y autocuidado',
    ],
  },
  {
    slug: 'menopausia',
    name: 'Menopausia',
    excerpt:
      'Información rigurosa sobre una etapa natural: síntomas, cambios y cómo cuidarte.',
    description:
      'La menopausia marca el final de la etapa reproductiva y el inicio de una nueva fase. Los cambios hormonales que la acompañan pueden afectar al sueño, al estado de ánimo, a la salud ósea y a la calidad de vida. Pero con buena información y acompañamiento, esta etapa puede vivirse con más tranquilidad. En esta sección encontrarás artículos sobre los síntomas más comunes, los sofocos, los cambios en el descanso y las estrategias que pueden ayudarte a sentirte mejor.',
    icon: 'moon',
    color: 'var(--accent-clay)',
    topics: [
      'Síntomas de la menopausia',
      'Sofocos y sudores nocturnos',
      'Sueño y descanso',
      'Cambios emocionales',
      'Salud ósea',
    ],
  },
  {
    slug: 'embarazo',
    name: 'Embarazo',
    excerpt:
      'Acompaña cada trimestre con información fiable sobre los cambios y señales de tu cuerpo.',
    description:
      'El embarazo es una etapa de transformación profunda. Desde las primeras señales hasta los cambios de cada trimestre, entender qué ocurre en tu cuerpo puede ayudarte a vivir esta experiencia con más seguridad y tranquilidad. Esta sección ofrece información basada en fuentes médicas sobre los primeros síntomas, la evolución del embarazo y las preguntas más frecuentes durante la gestación.',
    icon: 'baby',
    color: 'var(--accent-sage)',
    topics: [
      'Primeros síntomas',
      'Cambios por trimestre',
      'Preguntas frecuentes',
      'Cuidados durante el embarazo',
      'Cuándo consultar',
    ],
  },
  {
    slug: 'bienestar',
    name: 'Bienestar',
    excerpt:
      'Sueño, movimiento, nutrición y estrés: cómo los hábitos influyen en tu salud hormonal.',
    description:
      'El bienestar no es solo un estado de ánimo: está profundamente conectado con tu salud hormonal. El sueño, la actividad física, la alimentación y la gestión del estrés influyen en el ciclo menstrual, en la fertilidad, en la perimenopausia y en la menopausia. En esta sección encontrarás información práctica y basada en evidencia sobre cómo los hábitos cotidianos pueden ayudarte a cuidar tu salud de forma integral.',
    icon: 'leaf',
    color: 'var(--accent-teal)',
    topics: [
      'Sueño y salud hormonal',
      'Ejercicio adaptado al ciclo',
      'Nutrición y salud femenina',
      'Gestión del estrés',
      'Hábitos de autocuidado',
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getAllCategories(): Category[] {
  return categories
}
