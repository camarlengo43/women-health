import Link from 'next/link'
import type { CategorySlug } from '@/types'

const categoryColorMap: Record<CategorySlug, { bg: string; text: string }> = {
  'salud-menstrual': { bg: 'bg-cat-menstrual-light', text: 'text-cat-menstrual' },
  perimenopausia: { bg: 'bg-cat-perimenopausia-light', text: 'text-cat-perimenopausia' },
  menopausia: { bg: 'bg-cat-menopausia-light', text: 'text-cat-menopausia' },
  embarazo: { bg: 'bg-cat-embarazo-light', text: 'text-cat-embarazo' },
  bienestar: { bg: 'bg-cat-bienestar-light', text: 'text-cat-bienestar' },
}

const categoryNameMap: Record<CategorySlug, string> = {
  'salud-menstrual': 'Salud menstrual',
  perimenopausia: 'Perimenopausia',
  menopausia: 'Menopausia',
  embarazo: 'Embarazo',
  bienestar: 'Bienestar',
}

interface CategoryBadgeProps {
  category: CategorySlug
  linked?: boolean
  size?: 'sm' | 'md'
}

export function CategoryBadge({ category, linked = true, size = 'sm' }: CategoryBadgeProps) {
  const colors = categoryColorMap[category] || { bg: 'bg-muted', text: 'text-muted-foreground' }
  const name = categoryNameMap[category] || category

  const classes = `inline-flex items-center rounded-full font-medium transition-colors ${colors.bg} ${colors.text} ${
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  }`

  if (linked) {
    return (
      <Link href={`/categoria/${category}`} className={`${classes} hover:opacity-80`}>
        {name}
      </Link>
    )
  }

  return <span className={classes}>{name}</span>
}
