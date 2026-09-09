export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const mainNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Etapas',
    href: '/etapas',
    children: [
      { label: 'Adolescencia', href: '/etapas/adolescencia' },
      { label: 'Edad reproductiva', href: '/etapas/edad-reproductiva' },
      { label: 'Embarazo', href: '/etapas/embarazo' },
      { label: 'Posparto', href: '/etapas/posparto' },
      { label: 'Perimenopausia', href: '/perimenopausia' },
      { label: 'Menopausia', href: '/menopausia' },
      { label: 'Postmenopausia', href: '/etapas/postmenopausia' },
    ],
  },
  {
    label: 'Salud',
    href: '/salud',
    children: [
      { label: 'Menstruación', href: '/categoria/salud-menstrual' },
      { label: 'Hormonas', href: '/glosario' },
      { label: 'Síntomas', href: '/es-normal' },
      { label: 'Salud sexual', href: '/perimenopausia/libido' },
      { label: 'Sueño', href: '/menopausia/sueno' },
      { label: 'Salud ósea', href: '/menopausia/salud-osea' },
      { label: 'Salud mental', href: '/perimenopausia/cambios-humor' },
    ],
  },
  {
    label: 'Movimiento',
    href: '/movimiento',
    children: [
      { label: 'Ejercicio por etapa', href: '/movimiento' },
      { label: 'Fuerza', href: '/movimiento/fuerza' },
      { label: 'Cardio', href: '/movimiento/cardio' },
      { label: 'Movilidad', href: '/movimiento/movilidad' },
      { label: 'Equilibrio', href: '/movimiento/equilibrio' },
      { label: 'Salud ósea', href: '/movimiento/salud-osea' },
      { label: 'Suelo pélvico', href: '/movimiento/suelo-pelvico' },
    ],
  },
  {
    label: 'Herramientas',
    href: '/herramientas',
    children: [
      { label: 'Calculadoras', href: '/herramientas' },
      { label: 'Test perimenopausia', href: '/test-perimenopausia' },
      { label: 'Generador de rutinas', href: '/generador-rutinas' },
      { label: 'Fecha probable de parto', href: '/calculadora-fecha-parto' },
    ],
  },
  {
    label: 'Recursos',
    href: '/blog',
    children: [
      { label: 'Guías y artículos', href: '/blog' },
      { label: '¿Es normal?', href: '/es-normal' },
      { label: 'Glosario', href: '/glosario' },
      { label: 'Newsletter', href: '/#newsletter' },
    ],
  },
]

export const footerNavItems = {
  contenido: [
    { label: 'Todos los artículos', href: '/blog' },
    { label: 'Perimenopausia', href: '/perimenopausia' },
    { label: 'Menopausia', href: '/menopausia' },
    { label: 'Embarazo', href: '/categoria/embarazo' },
    { label: 'Herramientas', href: '/herramientas' },
    { label: 'Movimiento', href: '/movimiento' },
  ],
  proyecto: [
    { label: 'Sobre VidaMujer', href: '/sobre-vidamujer' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Fuentes médicas', href: '/fuentes-medicas' },
    { label: 'Política editorial', href: '/politica-editorial' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Política de privacidad', href: '/legal/privacidad' },
    { label: 'Política de cookies', href: '/legal/cookies' },
  ],
} as const
