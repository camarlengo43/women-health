import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: 'Aviso Legal y Descargo de Responsabilidad Médica',
  description:
    'Condiciones de uso, propiedad intelectual y descargo formal de responsabilidad médica de VidaMujer.',
  alternates: {
    canonical: '/legal/aviso-legal',
  },
}

export default function LegalNoticePage() {
  return (
    <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: 'Legal', href: '/legal/aviso-legal' },
            { label: 'Aviso Legal y Descargo Médico' },
          ]}
        />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
          Aviso Legal y Exención de Responsabilidad Médica
        </h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: Agosto de 2026
        </p>
      </header>

      <div className="prose max-w-none">
        <h2>1. Información General (LSSI-CE)</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente sitio web es titularidad del proyecto digital <strong>{siteConfig.name}</strong>, iniciativa de divulgación en salud femenina en fase de desarrollo.
        </p>

        <h2>2. Descargo de Responsabilidad Médica (Medical Disclaimer)</h2>
        <div className="p-5 my-6 rounded-xl bg-muted border border-border">
          <p className="font-semibold text-foreground mb-2">
            IMPORTANTE: La información facilitada en VidaMujer no constituye asesoramiento médico.
          </p>
          <p className="text-sm text-muted-foreground mb-0">
            Todo el contenido publicado en este sitio web —incluyendo textos, imágenes, gráficos, guías y enlaces— tiene una finalidad estrictamente informativa, divulgativa y educativa. En ningún caso debe interpretarse como diagnóstico, indicación terapéutica o sustitución del consejo, juicio o tratamiento de un profesional médico colegiado.
          </p>
        </div>
        <p>
          Nunca ignores ni demores la búsqueda de atención médica especializada debido a algo que hayas leído en este sitio web. Ante cualquier sospecha de enfermedad, dolor agudo, sangrado anómalo o urgencia clínica, acude inmediatamente a un centro de salud o servicio de urgencias médicas.
        </p>

        <h2>3. Propiedad Intelectual e Industrial</h2>
        <p>
          Todos los contenidos del portal (textos originales, arquitectura de información, logotipos, diseño gráfico, código fuente y código de estilos) están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida la reproducción total o parcial sin autorización previa y por escrito.
        </p>

        <h2>4. Enlaces a Terceros</h2>
        <p>
          Este sitio web incluye enlaces externos a organismos oficiales y publicaciones científicas (como la OMS, SEGO, AEEM, PubMed, ACOG). Dichos enlaces se facilitan exclusivamente para verificar fuentes; VidaMujer no asume responsabilidad sobre el contenido o disponibilidad de sitios web de terceros.
        </p>
      </div>
    </div>
  )
}
