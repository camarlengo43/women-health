import { CategoryCard } from './CategoryCard'
import type { Category } from '@/types'

interface CategoryGridProps {
  categories: Category[]
  postCounts?: Record<string, number>
  variant?: 'default' | 'detailed' | 'compact'
  columns?: 2 | 3 | 4 | 5
}

export function CategoryGrid({
  categories,
  postCounts = {},
  variant = 'default',
  columns = 3,
}: CategoryGridProps) {
  const getGridColsClass = () => {
    if (variant === 'detailed') {
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2'
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      case 5:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
      case 3:
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    }
  }

  return (
    <div className={`grid gap-6 ${getGridColsClass()}`}>
      {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          category={category}
          postCount={postCounts[category.slug]}
          variant={variant}
        />
      ))}
    </div>
  )
}
