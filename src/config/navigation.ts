export interface NavItem {
  label: string
  href: string
}

export const mainNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Salud menstrual', href: '/categoria/salud-menstrual' },
  { label: 'Perimenopausia', href: '/categoria/perimenopausia' },
  { label: 'Menopausia', href: '/categoria/menopausia' },
  { label: 'Embarazo', href: '/categoria/embarazo' },
  { label: 'Bienestar', href: '/categoria/bienestar' },
]

export const footerNavItems = {
  contenido: [
    { label: 'Todos los artículos', href: '/blog' },
    { label: 'Salud menstrual', href: '/categoria/salud-menstrual' },
    { label: 'Perimenopausia', href: '/categoria/perimenopausia' },
    { label: 'Menopausia', href: '/categoria/menopausia' },
    { label: 'Embarazo', href: '/categoria/embarazo' },
    { label: 'Bienestar', href: '/categoria/bienestar' },
  ],
  proyecto: [
    { label: 'Sobre el proyecto', href: '/sobre-el-proyecto' },
    { label: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Política de privacidad', href: '/legal/privacidad' },
    { label: 'Política de cookies', href: '/legal/cookies' },
  ],
} as const
