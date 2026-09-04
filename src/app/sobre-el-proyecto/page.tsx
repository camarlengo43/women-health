import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { Shield, BookOpen, Heart, Lock, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre el Proyecto y Metodología Editorial',
  description:
    'Conoce los principios, la metodología científica y el compromiso de rigor y privacidad que guían a VidaMujer como portal de salud femenina.',
  alternates: {
    canonical: '/sobre-el-proyecto',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs
          items={[{ label: 'Sobre el proyecto', href: '/sobre-el-proyecto' }]}
        />
      </div>

      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 block">
          Nuestra Filosofía y Misión
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-6 leading-tight">
          Información científica de salud femenina, explicada con claridad y empatía
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          VidaMujer nace como respuesta a un problema recurrente: el exceso de desinformación, mitos y remedios no contrastados en internet sobre el cuerpo de la mujer. Construimos una plataforma de referencia médica donde el rigor no está reñido con la cercanía.
        </p>
      </div>

      {/* 4 Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
          <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
            Evidencia Biomédica Contrastada
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cada artículo está fundamentado en consensos clínicos y publicaciones de organismos de máxima solvencia: la OMS, la Sociedad Española de Ginecología y Obstetricia (SEGO), la Asociación Española para el Estudio de la Menopausia (AEEM), The Menopause Society y guías NICE. Todas las fuentes se citan abiertamente para su verificación.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
          <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-6">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
            Estándares YMYL y Honestidad Médica
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Abordamos la salud bajo los más estrictos criterios YMYL (Your Money or Your Life). No prometemos curas milagrosas ni promocionamos productos comerciales encubiertos. Si un tratamiento carece de evidencia sólida, lo indicamos con transparencia.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
          <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-6">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
            Privacidad como Principio Innegociable
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Los datos sobre la salud femenina son datos íntimos y especialmente sensibles. En VidaMujer no vendemos ni compartimos datos con terceros publicitarios. Nuestra arquitectura está concebida desde el primer día bajo los preceptos de &ldquo;Privacy by Design&rdquo;.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-border bg-card shadow-card">
          <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-6">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-3">
            Sin Tabúes y con Lenguaje Accesible
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hablamos con naturalidad del flujo vaginal, el dolor en el coito, los sofocos o la salud mental premenstrual. Traducimos la jerga médica a un lenguaje cotidiano, riguroso y respetuoso que empodera a las mujeres para tomar decisiones informadas.
          </p>
        </div>
      </div>

      {/* The Vision: Next Phases */}
      <div className="p-8 sm:p-12 rounded-3xl bg-muted border border-border mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hoja de Ruta del Proyecto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
            Hacia una plataforma integral de salud femenina
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            Esta primera fase establece la base editorial y técnica: una web pública rápida, accesible, optimizada para SEO y enriquecida con contenido verificado. Las siguientes etapas integrarán progresivamente:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Área privada con control de datos por la usuaria
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Registro y análisis del ciclo ovárico y fertilidad
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Monitorización de síntomas en perimenopausia y menopausia
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Calculadoras de salud y seguimiento de hábitos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Integración segura con wearables y aplicación móvil (PWA)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">✓</span> Espacio comunitario moderado y resolución de dudas
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
