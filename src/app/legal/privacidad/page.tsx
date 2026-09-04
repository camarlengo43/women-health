import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Información sobre cómo VidaMujer protege y trata los datos personales de acuerdo con el RGPD y la LOPDGDD.',
  alternates: {
    canonical: '/legal/privacidad',
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: 'Legal', href: '/legal/aviso-legal' },
            { label: 'Política de Privacidad' },
          ]}
        />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: Agosto de 2026
        </p>
      </header>

      <div className="prose max-w-none">
        <p>
          En <strong>{siteConfig.name}</strong>, la privacidad de nuestras usuarias es un pilar fundamental. Esta Política de Privacidad describe qué información recogemos, con qué fines legítimos la tratamos y cómo garantizamos tus derechos conforme al Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>

        <h2>1. Responsable del Tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos recabados en este sitio web es el equipo gestor de VidaMujer. Para cualquier consulta sobre privacidad, puedes contactar con el equipo a través de los canales de comunicación de la plataforma.
        </p>

        <h2>2. Datos que recabamos</h2>
        <ul>
          <li><strong>Datos de suscripción al boletín (Newsletter):</strong> Dirección de correo electrónico cuando la usuaria se suscribe voluntariamente a nuestras publicaciones.</li>
          <li><strong>Datos técnicos y de navegación:</strong> Dirección IP anonimizada, tipo de navegador y páginas visitadas con fines exclusivamente estadísticos agregados, sin vincular a identidades personales.</li>
        </ul>

        <h2>3. Finalidad y Base Jurídica</h2>
        <p>
          La base legal para el envío de nuestro boletín informativo es el <strong>consentimiento expreso</strong> otorgado por la persona interesada al marcar la casilla de aceptación y enviar el formulario. La base para el análisis técnico básico es el <strong>interés legítimo</strong> en mantener la seguridad y el correcto funcionamiento del portal.
        </p>

        <h2>4. Conservación de los Datos</h2>
        <p>
          Los correos electrónicos de suscripción se conservarán mientras la usuaria no revoque su consentimiento o solicite su baja a través del enlace facilitado en cada comunicación.
        </p>

        <h2>5. Derechos de la Persona Interesada</h2>
        <p>
          Puedes ejercitar tus derechos de acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad y oposición mediante solicitud formal dirigida al equipo gestor de la plataforma con copia de tu documento identificativo.
        </p>
      </div>
    </div>
  )
}
