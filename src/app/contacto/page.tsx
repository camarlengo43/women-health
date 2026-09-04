import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { Mail, MessageSquare, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto y Sugerencias Editoriales',
  description:
    'Ponte en contacto con el equipo de VidaMujer para sugerencias de contenido, colaboraciones divulgativas o consultas institucionales.',
  alternates: {
    canonical: '/contacto',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs items={[{ label: 'Contacto', href: '/contacto' }]} />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
            Contacto y Colaboraciones
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Agradecemos sugerencias temáticas, correcciones de fuentes y consultas de divulgación científica.
          </p>
        </div>

        {/* Important Notice */}
        <div className="p-5 rounded-xl bg-muted border border-border flex items-start gap-4 mb-10">
          <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-semibold block mb-1">
              Aviso importante sobre consultas clínicas individuales
            </strong>
            VidaMujer es una plataforma digital de información y divulgación de salud. No prestamos servicios de diagnóstico, telemedicina ni prescripción personalizada. Si tienes una duda médica o una urgencia de salud, debes consultar directamente con tu médico de familia, ginecólogo o centro de urgencias.
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-foreground mb-1">
              Equipo Editorial
            </h2>
            <p className="text-xs text-muted-foreground mb-3">
              Para aportaciones sobre artículos, corrección de referencias o propuestas de divulgación científica.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              Canal en configuración
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-foreground mb-1">
              Contacto General y Sugerencias
            </h2>
            <p className="text-xs text-muted-foreground mb-3">
              Para cuestiones técnicas, sugerencias de usabilidad y colaboraciones.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              Próximamente disponible
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
