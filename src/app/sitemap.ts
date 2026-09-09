import type { MetadataRoute } from 'next'
import { getPosts } from '@/services'
import { getAllCategories, siteConfig } from '@/config'

const HUB_PAGES = [
  '/etapas',
  '/etapas/adolescencia',
  '/etapas/edad-reproductiva',
  '/etapas/embarazo',
  '/etapas/posparto',
  '/etapas/perimenopausia',
  '/etapas/menopausia',
  '/etapas/postmenopausia',
  '/salud',
  '/herramientas',
  '/calculadora-ciclo-menstrual',
  '/calculadora-ovulacion',
  '/calculadora-semanas-embarazo',
  '/calculadora-fecha-parto',
  '/test-perimenopausia',
  '/generador-rutinas',
  '/es-normal',
  '/es-normal/regla-cada-24-dias',
  '/es-normal/cambios-duracion-regla',
  '/es-normal/ciclos-irregulares',
  '/es-normal/sofocos-a-los-40',
  '/es-normal/despertarse-por-la-noche-menopausia',
  '/es-normal/sangrado-abundante',
  '/movimiento',
  '/movimiento/fuerza',
  '/movimiento/cardio',
  '/movimiento/movilidad',
  '/movimiento/equilibrio',
  '/movimiento/salud-osea',
  '/movimiento/suelo-pelvico',
  '/movimiento/ejercicio-perimenopausia',
  '/movimiento/ejercicio-menopausia',
  '/movimiento/ejercicios-fuerza-mujeres',
  '/movimiento/rutina-fuerza-menopausia',
  '/perimenopausia',
  '/perimenopausia/que-es',
  '/perimenopausia/sintomas',
  '/perimenopausia/primeros-sintomas',
  '/perimenopausia/a-los-40',
  '/perimenopausia/cambios-menstruacion',
  '/perimenopausia/sofocos',
  '/perimenopausia/insomnio',
  '/perimenopausia/cambios-humor',
  '/perimenopausia/aumento-peso',
  '/perimenopausia/libido',
  '/perimenopausia/ejercicio',
  '/perimenopausia/fuerza',
  '/perimenopausia/alimentacion',
  '/perimenopausia/cuando-consultar',
  '/menopausia',
  '/menopausia/sintomas',
  '/menopausia/sofocos',
  '/menopausia/sueno',
  '/menopausia/ejercicio',
  '/menopausia/fuerza',
  '/menopausia/salud-osea',
  '/menopausia/osteoporosis',
  '/menopausia/aumento-peso',
  '/menopausia/salud-cardiovascular',
  '/glosario',
  '/sobre-vidamujer',
  '/equipo',
  '/politica-editorial',
  '/fuentes-medicas',
  '/contacto',
]

const GLOSSARY_PAGES = [
  '/glosario/estrogeno',
  '/glosario/progesterona',
  '/glosario/fsh',
  '/glosario/lh',
  '/glosario/ovulacion',
  '/glosario/perimenopausia',
  '/glosario/menopausia',
  '/glosario/amenorrea',
  '/glosario/dismenorrea',
  '/glosario/sop',
  '/glosario/endometriosis',
  '/glosario/ths',
  '/glosario/osteoporosis',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const categories = getAllCategories()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/categorias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/buscar`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/sobre-el-proyecto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/legal/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/legal/cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/legal/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  const hubPages: MetadataRoute.Sitemap = [...HUB_PAGES, ...GLOSSARY_PAGES].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path.split('/').length === 2 ? 0.9 : 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.url}/categoria/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const articlePages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly',
    priority: post.featured ? 0.9 : 0.7,
  }))

  return [...staticPages, ...hubPages, ...categoryPages, ...articlePages]
}
