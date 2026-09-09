import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartPulse,
  Lock,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Activity,
} from 'lucide-react'
import { getFeaturedPosts, getLatestPosts } from '@/services'
import { getAllCategories } from '@/config'
import { ArticleCard } from '@/features/blog'
import { NewsletterForm, JsonLd, ScrollReveal } from '@/components/shared'
import { generateWebSiteJsonLd, generateOrganizationJsonLd } from '@/lib/seo'

const stageCards = [
  { label: 'Adolescencia', href: '/categoria/salud-menstrual', tone: 'bg-[#F3EDF1]' },
  { label: 'Edad reproductiva', href: '/categoria/salud-menstrual', tone: 'bg-[#FBF3EB]' },
  { label: 'Embarazo', href: '/categoria/embarazo', tone: 'bg-[#EFF3ED]' },
  { label: 'Posparto', href: '/categoria/bienestar', tone: 'bg-[#EBF4F4]' },
  { label: 'Perimenopausia', href: '/perimenopausia', tone: 'bg-[#F9F0EB]' },
  { label: 'Menopausia', href: '/categoria/menopausia', tone: 'bg-[#F3EDF1]' },
  { label: 'Postmenopausia', href: '/categoria/menopausia', tone: 'bg-[#EEF4F1]' },
]

const questionCards = [
  { title: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
  { title: '¿Es normal tener sofocos a los 40?', href: '/es-normal/sofocos-a-los-40' },
  { title: '¿Es normal despertarse por la noche?', href: '/es-normal/despertarse-por-la-noche-menopausia' },
  { title: '¿Cuándo consultar por sangrado abundante?', href: '/perimenopausia/cuando-consultar' },
]

const toolCards = [
  { title: 'Calculadora del ciclo', text: 'Comprende tus fases y estima una ventana útil de seguimiento.', href: '/calculadora-ciclo-menstrual' },
  { title: 'Calculadora de ovulación', text: 'Estima una ventana fértil orientativa con una base práctica.', href: '/calculadora-ovulacion' },
  { title: 'Test orientativo de perimenopausia', text: 'Explora síntomas frecuentes y mira patrones orientativos.', href: '/test-perimenopausia' },
  { title: 'Calculadora de embarazo', text: 'Estima semanas y una fecha orientativa del parto.', href: '/calculadora-semanas-embarazo' },
  { title: 'Generador de rutinas', text: 'Crea una rutina práctica según tu objetivo, nivel y disponibilidad.', href: '/generador-rutinas' },
]

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts()
  const latestPosts = await getLatestPosts(6)
  const categories = getAllCategories()

  return (
    <>
      <JsonLd data={generateWebSiteJsonLd()} />
      <JsonLd data={generateOrganizationJsonLd()} />

      <section className="relative overflow-hidden border-b border-border/60 bg-muted/60">
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 25% 40%, var(--color-cat-menstrual-light) 0%, transparent 60%), radial-gradient(ellipse at 75% 30%, var(--color-cat-bienestar-light) 0%, transparent 60%)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent shadow-xs backdrop-blur-xs">
              <Stethoscope className="h-3.5 w-3.5 text-accent" />
              <span>Salud femenina basada en evidencia</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Entiende tu cuerpo en cada etapa de tu vida
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Información basada en evidencia, herramientas gratuitas y recursos prácticos para cuidar tu salud femenina con más claridad y confianza.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/perimenopausia"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                Explorar mi etapa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/herramientas"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:bg-muted"
              >
                Ver herramientas
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-sage" /> Fuentes médicas verificadas
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-warm" /> Información clara y útil
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
                <Lock className="h-3.5 w-3.5 text-accent" /> Tus datos se quedan en tu dispositivo
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">¿Qué quieres consultar?</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Haz tu consulta por tema</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Mi ciclo', href: '/categoria/salud-menstrual', icon: '◌' },
              { title: 'Perimenopausia', href: '/perimenopausia', icon: '☼' },
              { title: 'Menopausia', href: '/categoria/menopausia', icon: '☾' },
              { title: 'Embarazo', href: '/categoria/embarazo', icon: '✦' },
              { title: 'Síntomas', href: '/es-normal', icon: '◎' },
              { title: 'Movimiento', href: '/movimiento', icon: '↗' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-border bg-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-xl text-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Etapas de la vida</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Explora tu etapa</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stageCards.map((card, index) => (
              <ScrollReveal key={card.label} delay={index * 60}>
                <Link
                  href={card.href}
                  className={`block rounded-2xl border border-border p-5 transition hover:-translate-y-1 hover:border-accent/40 ${card.tone}`}
                >
                  <div className="mb-4 h-11 w-11 rounded-xl bg-white/70" />
                  <h3 className="text-xl font-semibold text-foreground">{card.label}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex items-end justify-between gap-3">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramientas gratuitas</p>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Te ayudamos a interpretarlo mejor</h2>
              </div>
              <Link href="/herramientas" className="hidden items-center gap-1 text-sm font-medium text-accent sm:inline-flex">
                Ver todas las herramientas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {toolCards.map((tool) => (
              <Link key={tool.title} href={tool.href} className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-4 inline-flex rounded-lg bg-muted p-2 text-accent">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{tool.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">¿Es normal?</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Preguntas frecuentes que merecen respuesta clara</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {questionCards.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-border bg-card p-5 transition hover:border-accent/40 hover:shadow-md">
                <p className="text-base font-medium leading-relaxed text-foreground">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Movimiento</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Muévete según tu etapa</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Fuerza', text: 'Preservar masa muscular y fuerza funcional.' },
              { title: 'Cardio', text: 'Mantener salud cardiovascular y energía.' },
              { title: 'Salud ósea', text: 'Apoyar huesos y movilidad a lo largo de la vida.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="mb-4 inline-flex rounded-lg bg-muted p-2 text-accent">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Confianza</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Cómo cuidamos la información</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { icon: BookOpen, title: 'Fuentes médicas', text: 'Priorizamos guías y sociedades de referencia.' },
              { icon: Shield, title: 'Metodología editorial', text: 'Se revisa el rigor, claridad y actualización del contenido.' },
              { icon: Sparkles, title: 'Actualización', text: 'Se corrigen y revisan los textos cuando la evidencia cambia.' },
              { icon: Lock, title: 'Privacidad', text: 'Sin almacenamiento de síntomas ni datos sensibles.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contenido destacado</p>
                  <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Artículos que ayudan a orientar</h2>
                </div>
                <Link href="/blog" className="hidden items-center gap-1 text-sm font-medium text-accent sm:inline-flex">
                  Ver todos <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 100}>
                  <ArticleCard post={post} variant="featured" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
              <NewsletterForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
