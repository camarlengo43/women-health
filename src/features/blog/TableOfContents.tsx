'use client'

import { useState, useEffect } from 'react'
import { cn, extractHeadings } from '@/lib/utils'
import { List } from 'lucide-react'

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const headings = extractHeadings(content)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <>
      {/* Mobile TOC */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full p-3 bg-muted rounded-lg"
          aria-expanded={isOpen}
          aria-controls="toc-mobile"
        >
          <List className="w-4 h-4" aria-hidden="true" />
          Tabla de contenidos
        </button>
        {isOpen && (
          <nav id="toc-mobile" className="mt-2 p-3 bg-muted rounded-lg animate-fade-in" aria-label="Tabla de contenidos">
            <ol className="space-y-1.5">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block text-sm py-1 transition-colors',
                      heading.level === 3 && 'pl-4',
                      activeId === heading.id
                        ? 'text-accent font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      {/* Desktop TOC (Sidebar) */}
      <aside className="hidden lg:block" aria-label="Tabla de contenidos">
        <div className="sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            En este artículo
          </p>
          <nav>
            <ol className="space-y-1 border-l border-border pl-4">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={cn(
                      'block text-sm py-1 transition-colors',
                      heading.level === 3 && 'pl-3 text-xs',
                      activeId === heading.id
                        ? 'text-accent font-medium border-l-2 border-accent -ml-[17px] pl-[15px]'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </aside>
    </>
  )
}
