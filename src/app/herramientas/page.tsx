import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Activity, HeartPulse, Sparkles, Calculator, Printer } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout'
import { JsonLd } from '@/components/shared'
import { siteConfig } from '@/config'
import { generateBreadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Herramientas gratuitas: ciclo, ovulación, embarazo y rutinas',
  description: 'Calculadoras de ciclo, ovulación, embarazo y fecha de parto, test orientativo de perimenopausia y generador de rutinas. Todo en tu navegador, sin registro.',
  alternates: { canonical: '/herramientas' },
  openGraph: {
    title: 'Herramientas gratuitas: ciclo, ovulación, embarazo y rutinas',
    description: 'Calculadoras, test orientativo de perimenopausia y generador de rutinas. Todo en tu navegador, sin registro.',
    url: '/herramientas',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas gratuitas: ciclo, ovulación, embarazo y rutinas',
    description: 'Calculadoras, test orientativo de perimenopausia y generador de rutinas. Todo en tu navegador, sin registro.',
  },
}

const tools = [
  {
    title: 'Calculadora del ciclo menstrual',
    href: '/calculadora-ciclo-menstrual',
    description: 'Estima la próxima regla, la ovulación y la ventana más útil para llevar un seguimiento.',
    icon: Calculator,
  },
  {
    title: 'Calculadora de ovulación',
    href: '/calculadora-ovulacion',
    description: 'Consulta una estimación orientativa de la fase fértil.',
    icon: HeartPulse,
  },
  {
    title: 'Calculadora de embarazo',
    href: '/calculadora-semanas-embarazo',
    description: 'Estima la semana de gestación y la fecha probable de parto.',
    icon: HeartPulse,
  },
  {
    title: 'Calculadora de fecha de parto',
    href: '/calculadora-fecha-parto',
    description: 'Calcula la fecha probable de parto desde la última regla.',
    icon: HeartPulse,
  },
  {
    title: 'Test orientativo de perimenopausia',
    href: '/test-perimenopausia',
    description: 'Explora síntomas frecuentes y observa patrones de forma informativa.',
    icon: Sparkles,
  },
  {
    title: 'Generador de rutinas',
    href: '/generador-rutinas',
    description: 'Crea una rutina sencilla según objetivo, nivel y disponibilidad.',
    icon: Activity,
  },
  {
    title: 'Plantillas de seguimiento',
    href: '/plantillas-seguimiento',
    description: 'Registro del ciclo, calendario menstrual, diarios de síntomas y pack imprimible en PDF.',
    icon: Printer,
  },
]

export default function HerramientasPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Herramientas gratuitas de salud femenina',
          description: 'Calculadoras de ciclo, ovulación, embarazo y fecha de parto, test orientativo de perimenopausia y generador de rutinas.',
          url: `${siteConfig.url}/herramientas`,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: `${siteConfig.url}/logo.png`,
          },
        }}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: 'Inicio', url: siteConfig.url },
          { name: 'Herramientas', url: `${siteConfig.url}/herramientas` },
        ])}
      />
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Herramientas' }]} />
      </div>

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Herramientas</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Herramientas gratuitas para entender mejor tu salud</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Todo funciona en el navegador y no requiere registro ni almacenamiento de datos personales. La finalidad es orientarte, no diagnosticar.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {tools.map(({ title, href, description, icon: Icon }) => (
          <Link key={title} href={href} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-accent/40">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">{title}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
              Abrir herramienta <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Importante:</strong> estas herramientas tienen un carácter orientativo y educativo. No sustituyen la valoración de un profesional sanitario ni permiten diagnosticar enfermedades.
      </div>
    </div>
  )
}
