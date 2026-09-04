import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
} from '@/services'
import { getCategoryBySlug, siteConfig } from '@/config'
import { formatDate } from '@/lib/utils'
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { Breadcrumbs } from '@/components/layout'
import {
  CategoryBadge,
  MedicalDisclaimer,
  NewsletterForm,
  JsonLd,
} from '@/components/shared'
import { TableOfContents, ArticleCard } from '@/features/blog'
import { Clock, Calendar, ExternalLink, BookOpen, CheckCircle2, Stethoscope } from 'lucide-react'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const postUrl = `${siteConfig.url}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      images: [
        {
          url: post.image?.src || `/images/blog/${post.slug}.jpg`,
          width: post.image?.width || 1200,
          height: post.image?.height || 630,
          alt: post.image?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image?.src || `/images/blog/${post.slug}.jpg`],
    },
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const category = getCategoryBySlug(post.category)
  const relatedPosts = await getRelatedPosts(post.slug, post.category, 3)

  const postUrl = `${siteConfig.url}/blog/${post.slug}`

  const breadcrumbs = [
    { label: 'Artículos', href: '/blog' },
    { label: category?.name || post.category, href: `/categoria/${post.category}` },
    { label: post.title, href: `/blog/${post.slug}` },
  ]

  const heroImageSrc = post.image?.src || `/images/blog/${post.slug}.jpg`
  const heroImageAlt = post.image?.alt || post.title

  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    authorName: post.author?.name || siteConfig.name,
    image: heroImageSrc,
    url: postUrl,
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Artículos', url: `${siteConfig.url}/blog` },
    {
      name: category?.name || 'Categoría',
      url: `${siteConfig.url}/categoria/${post.category}`,
    },
    { name: post.title, url: postUrl },
  ])

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="py-8 sm:py-12">
        {/* Breadcrumbs */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Article Header */}
        <header className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center sm:text-left">
          <div className="mb-4">
            <CategoryBadge category={post.category} size="md" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-family-heading)] text-foreground tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground border-y border-border py-3.5">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>{post.readingTime} min de lectura</span>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">
                    Por {post.author.name}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-accent-sage font-medium bg-cat-embarazo-light px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage" />
              <span>Revisión médica basada en evidencia</span>
            </div>
          </div>
        </header>

        {/* Article Featured Hero Image */}
        <div className="max-w-[1020px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <figure className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-card border border-border/70 bg-muted">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1020px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-3 left-4 right-4 text-xs text-white/95 drop-shadow-sm flex items-center justify-between">
              <span className="truncate max-w-[80%]">{heroImageAlt}</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-xs text-white/90 px-3 py-1 rounded-full text-[11px] font-medium">
                {category?.name} — VidaMujer
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Content Layout: 2 Columns (Content + Table of Contents) */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <main className="lg:col-span-8 lg:col-start-1">
              {/* Mobile Table of Contents */}
              <TableOfContents content={post.content} />

              {/* MDX Processed HTML Article Body */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Etiquetas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-md bg-muted text-foreground/80 border border-border/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Scientific Sources Section */}
              {post.sources && post.sources.length > 0 && (
                <section
                  className="mt-12 p-6 rounded-xl bg-card border border-border"
                  aria-labelledby="sources-heading"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-accent" aria-hidden="true" />
                    <h2
                      id="sources-heading"
                      className="text-lg font-semibold font-[family-name:var(--font-family-heading)] text-foreground"
                    >
                      Fuentes y referencias científicas
                    </h2>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    En VidaMujer contrastamos la información con organismos
                    sanitarios oficiales y literatura médica indexada:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {post.sources.map((source, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent font-mono font-semibold">
                          [{index + 1}]
                        </span>
                        {source.url ? (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-accent underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{source.name}</span>
                            <ExternalLink
                              className="w-3.5 h-3.5 shrink-0 text-muted-foreground"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <span className="text-foreground">{source.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Medical Disclaimer */}
              {post.medicalDisclaimer && (
                <div className="mt-8">
                  <MedicalDisclaimer />
                </div>
              )}

              {/* Author Box */}
              {post.author && (
                <div className="mt-8 p-6 rounded-2xl bg-card border border-border shadow-xs flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-primary-sage/20 border border-accent/25 flex items-center justify-center shrink-0 shadow-xs text-accent">
                    <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 text-accent" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-foreground">
                        {post.author.name}
                      </h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                        Comité Científico
                      </span>
                    </div>
                    <p className="text-xs text-accent font-medium mb-1.5">
                      {post.author.role}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              )}
            </main>

            {/* Desktop Sticky Table of Contents (4 cols) */}
            <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
              <TableOfContents content={post.content} />
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border bg-muted/30">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground">
                  Artículos relacionados en {category?.name}
                </h2>
                <Link
                  href={`/categoria/${post.category}`}
                  className="text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  Ver todos →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <ArticleCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="mt-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card border border-border p-8 sm:p-12 shadow-card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
              Recibe artículos y guías de salud femenina
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              Una newsletter mensual con divulgación basada en evidencia, sin spam ni publicidad engañosa.
            </p>
            <NewsletterForm variant="default" />
          </div>
        </section>
      </article>
    </>
  )
}
