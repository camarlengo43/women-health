import Link from 'next/link'
import { ArrowRight, Search, BookOpen, Shield, Heart, Lock, CheckCircle2, ShieldCheck, Stethoscope } from 'lucide-react'
import { getFeaturedPosts, getLatestPosts } from '@/services'
import { getAllCategories } from '@/config'
import { ArticleCard } from '@/features/blog'
import { NewsletterForm, JsonLd, ScrollReveal } from '@/components/shared'
import { generateWebSiteJsonLd, generateOrganizationJsonLd } from '@/lib/seo'

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts()
  const latestPosts = await getLatestPosts(6)
  const categories = getAllCategories()

  return (
    <>
      <JsonLd data={generateWebSiteJsonLd()} />
      <JsonLd data={generateOrganizationJsonLd()} />

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-muted/60 border-b border-border/60">
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 25% 40%, var(--color-cat-menstrual-light) 0%, transparent 60%), radial-gradient(ellipse at 75% 30%, var(--color-cat-bienestar-light) 0%, transparent 60%)',
            }}
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 backdrop-blur-xs border border-border text-xs font-semibold uppercase tracking-wider text-accent mb-6 shadow-xs">
              <Stethoscope className="w-3.5 h-3.5 text-accent" />
              <span>Salud femenina basada en evidencia médica</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-family-heading)] text-foreground tracking-tight leading-[1.15] mb-6">
              Información médica clara para entender tu cuerpo en cada etapa
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Guías y artículos rigurosos sobre ciclo menstrual, perimenopausia, menopausia, fertilidad y bienestar hormonal. Sin tabúes, con referencias científicas.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <Link
                href="/buscar"
                className="flex items-center justify-between gap-3 px-5 py-3.5 bg-card rounded-2xl border border-border shadow-card hover:shadow-md hover:border-accent/40 transition-all text-muted-foreground text-sm group"
                role="search"
              >
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>Buscar síntomas, etapas, dudas hormonales…</span>
                </div>
                <span className="hidden sm:inline-block text-xs font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  Buscar ↵
                </span>
              </Link>
            </div>

            {/* Trust Endorsements Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-sage" /> Fuentes OMS, SEGO, AEEM y NICE
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-warm" /> Revisión biomédica rigurosa
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <Lock className="w-3.5 h-3.5 text-accent" /> Sin patrocinios comerciales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TOPICS ========== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
                Explora por temas
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Cinco áreas fundamentales de la salud femenina, explicadas de forma clara y accesible.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.slug} delay={idx * 60}>
                <Link
                  href={`/categoria/${cat.slug}`}
                  className="group p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 block h-full"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 15%, transparent)` }}
                  >
                    <span className="text-lg" style={{ color: cat.color }} aria-hidden="true">
                      {cat.icon === 'heart-pulse' && '♡'}
                      {cat.icon === 'sun-medium' && '☀'}
                      {cat.icon === 'moon' && '☽'}
                      {cat.icon === 'baby' && '❋'}
                      {cat.icon === 'leaf' && '🌿'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5 font-[family-name:var(--font-family-heading)]">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {cat.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED ARTICLES ========== */}
      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-muted/50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-2">
                    Artículos destacados
                  </h2>
                  <p className="text-muted-foreground">
                    Los contenidos más relevantes para empezar a informarte.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Ver todos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredPosts.slice(0, 3).map((post, idx) => (
                <ScrollReveal key={post.slug} delay={idx * 100}>
                  <ArticleCard post={post} variant="featured" />
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Ver todos los artículos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== LATEST ARTICLES ========== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-2">
                  Últimos artículos
                </h2>
                <p className="text-muted-foreground">
                  Contenido actualizado sobre salud femenina.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Ver todos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 80}>
                <ArticleCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRUST SECTION ========== */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
                Información en la que puedes confiar
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Nuestro compromiso con el rigor y la transparencia.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Fuentes contrastadas',
                text: 'Cada artículo cita fuentes de referencia: OMS, NHS, Mayo Clinic, sociedades médicas y publicaciones científicas.',
              },
              {
                icon: Shield,
                title: 'Rigor divulgativo',
                text: 'Explicamos la información de forma clara y comprensible, sin simplificar en exceso ni hacer afirmaciones infundadas.',
              },
              {
                icon: Heart,
                title: 'Enfoque humano',
                text: 'Hablamos de salud con cercanía y empatía, sin alarmismos. La información debe empoderar, no asustar.',
              },
              {
                icon: Lock,
                title: 'Privacidad primero',
                text: 'No recopilamos datos sensibles ni compartimos información personal. Tu privacidad es una prioridad.',
              },
            ].map(({ icon: Icon, title, text }, idx) => (
              <ScrollReveal key={title} delay={idx * 70}>
                <div className="text-center p-6 bg-card rounded-xl border border-border h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-family-heading)]">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-card">
              <NewsletterForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
