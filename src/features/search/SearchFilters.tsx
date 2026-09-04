import Link from 'next/link'
import { getAllCategories } from '@/config'

interface SearchFiltersProps {
  currentCategory?: string
  currentQuery?: string
}

export function SearchFilters({
  currentCategory,
  currentQuery,
}: SearchFiltersProps) {
  const categories = getAllCategories()

  const createFilterUrl = (catSlug?: string) => {
    const params = new URLSearchParams()
    if (currentQuery) params.set('q', currentQuery)
    if (catSlug) params.set('categoria', catSlug)
    const queryString = params.toString()
    return queryString ? `/buscar?${queryString}` : '/buscar'
  }

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoría">
      <Link
        href={createFilterUrl(undefined)}
        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
          !currentCategory
            ? 'bg-foreground text-background font-semibold shadow-xs'
            : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
        }`}
      >
        Todas las categorías
      </Link>
      {categories.map((cat) => {
        const isActive = currentCategory === cat.slug
        return (
          <Link
            key={cat.slug}
            href={createFilterUrl(cat.slug)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              isActive
                ? 'text-white font-semibold shadow-xs'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
            style={{
              backgroundColor: isActive ? cat.color : undefined,
              borderColor: isActive ? cat.color : undefined,
            }}
          >
            {cat.name}
          </Link>
        )
      })}
    </div>
  )
}
