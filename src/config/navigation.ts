export interface NavItem {
  label: string
  href: string
}

export const mainNavItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Etapas', href: '/perimenopausia' },
  { label: 'Salud', href: '/categoria/salud-menstrual' },
  { label: 'Movimiento', href: '/movimiento' },
  { label: 'Herramientas', href: '/herramientas' },
  { label: 'Recursos', href: '/blog' },
]

export const footerNavItems = {
  contenido: [
    { label: 'Todos los artículos', href: '/blog' },
    { label: 'Perimenopausia', href: '/perimenopausia' },
    { label: 'Menopausia', href: '/categoria/menopausia' },
    { label: 'Embarazo', href: '/categoria/embarazo' },
    { label: 'Herramientas', href: '/herramientas' },
    { label: 'Movimiento', href: '/movimiento' },
  ],
  proyecto: [
    { label: 'Sobre VidaMujer', href: '/sobre-el-proyecto' },
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
