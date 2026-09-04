import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/layout'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Información sobre el uso de cookies y tecnologías similares en VidaMujer conforme a la normativa europea.',
  alternates: {
    canonical: '/legal/cookies',
  },
}

export default function CookiesPage() {
  return (
    <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: 'Legal', href: '/legal/aviso-legal' },
            { label: 'Política de Cookies' },
          ]}
        />
      </div>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-family-heading)] text-foreground mb-4">
          Política de Cookies
        </h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: Agosto de 2026
        </p>
      </header>

      <div className="prose max-w-none">
        <p>
          En <strong>{siteConfig.name}</strong> utilizamos cookies y tecnologías de almacenamiento local únicamente cuando es necesario para prestar un servicio seguro, rápido y adaptado a las preferencias de las personas usuarias.
        </p>

        <h2>¿Qué es una cookie?</h2>
        <p>
          Una cookie es un pequeño fichero de texto que un sitio web descarga en tu ordenador, tableta o teléfono móvil al visitarlo. Permite que el sitio recuerde información sobre tu visita, como tus preferencias de navegación o idioma.
        </p>

        <h2>Tipos de cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>Cookies técnicas indispensables:</strong> Son necesarias para la navegación y la correcta interacción con el sitio web (por ejemplo, gestión de sesiones, equilibrio de carga y seguridad). No requieren consentimiento expreso según el artículo 22.2 de la LSSI-CE.
          </li>
          <li>
            <strong>Cookies de personalización / preferencias:</strong> Permiten recordar opciones seleccionadas por el usuario, como el consentimiento de privacidad o el estado de menús plegables.
          </li>
          <li>
            <strong>Cookies analíticas con IP anonimizada:</strong> Solo se activan si la plataforma implementa medición de métricas de rendimiento y la usuaria lo acepta. La dirección IP se trunca para evitar la identificación individual.
          </li>
        </ul>

        <h2>Cómo gestionar o desactivar las cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices:
        </p>
        <ul>
          <li>Google Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
          <li>Mozilla Firefox: Ajustes &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
          <li>Apple Safari: Preferencias &gt; Privacidad.</li>
          <li>Microsoft Edge: Configuración &gt; Cookies y permisos del sitio.</li>
        </ul>
      </div>
    </div>
  )
}
