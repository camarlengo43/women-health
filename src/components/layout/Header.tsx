'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { mainNavItems } from '@/config'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido
      </a>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="VidaMujer — Inicio"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="VidaMujer logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight font-[family-name:var(--font-family-heading)]">
              VidaMujer
            </span>
          </Link>

          {/* Desktop Nav with dropdowns */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {mainNavItems.map((item) => (
              <div key={item.href + item.label} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-accent bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  )}
                  aria-haspopup={item.children ? 'true' : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" aria-hidden="true" />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label + child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/buscar"
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              Explorar contenidos
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/buscar"
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with accordions */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden pb-4 border-t border-border pt-4 animate-fade-in"
            aria-label="Navegación principal móvil"
          >
            <div className="flex flex-col gap-1">
              {mainNavItems.map((item) => (
                <div key={item.href + item.label} className="rounded-lg">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileSection(
                            openMobileSection === item.label ? null : item.label
                          )
                        }
                        aria-expanded={openMobileSection === item.label}
                        className={cn(
                          'flex w-full items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                          isActive(item.href)
                            ? 'text-accent bg-muted'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            openMobileSection === item.label && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {openMobileSection === item.label && (
                        <div className="ml-2 mt-1 flex flex-col gap-1 border-l-2 border-border pl-2">
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm font-semibold text-foreground rounded-lg hover:bg-muted/60"
                          >
                            Ver todo {item.label}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.label + child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="px-4 py-2 text-sm text-muted-foreground rounded-lg hover:text-foreground hover:bg-muted/60"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                        isActive(item.href)
                          ? 'text-accent bg-muted'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-2 px-4">
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Explorar contenidos
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
