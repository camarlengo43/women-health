import Link from 'next/link'
import { footerNavItems } from '@/config'
import { siteConfig } from '@/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background/80" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="VidaMujer logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-semibold text-background font-[family-name:var(--font-family-heading)]">
                VidaMujer
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Información rigurosa y accesible sobre salud femenina en cada etapa de la vida.
            </p>
          </div>

          {/* Contenido */}
          <div>
            <h3 className="text-sm font-semibold text-background tracking-wide uppercase mb-4">
              Contenido
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.contenido.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Proyecto */}
          <div>
            <h3 className="text-sm font-semibold text-background tracking-wide uppercase mb-4">
              Proyecto
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.proyecto.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-background tracking-wide uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerNavItems.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-t border-background/10">
          <p className="text-xs text-background/40 leading-relaxed max-w-3xl">
            {siteConfig.medicalDisclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-background/40">
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background/40">
            {siteConfig.contentCredibility}
          </p>
        </div>
      </div>
    </footer>
  )
}
