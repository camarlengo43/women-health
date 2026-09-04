import type { Metadata } from 'next'
import { getAllCategories } from '@/config'
import { getPosts } from '@/services'
import { CategoryCard } from '@/features/categories'
import { Breadcrumbs } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Categorías y Temas de Salud Femenina',
  description:
    'Explora nuestras cinco áreas especializadas en salud de la mujer: salud menstrual, perimenopausia, menopausia, embarazo y bienestar.',
  alternates: {
    canonical: '/categorias',
  },
}

export default async function CategoriesPage() {
  const categories = getAllCategories()
  const posts = await getPosts()

  // Calculate article count per category
  const postCounts = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {})

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs items={[{ label: 'Categorías', href: '/categorias' }]} />
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
          Áreas de Salud y Temas Clave
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Estructuramos nuestro contenido en cinco grandes áreas de la salud femenina para acompañarte con información precisa y rigurosa en cada etapa de tu vida.
        </p>
      </div>

      {/* Detailed Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            postCount={postCounts[category.slug] || 0}
            variant="detailed"
          />
        ))}
      </div>
    </div>
  )
}
