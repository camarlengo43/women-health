'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If user prefers reduced motion, the CSS @media query will display it immediately without animation
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsRevealed(true)
            }, delay)
          } else {
            setIsRevealed(true)
          }
          observer.unobserve(node)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={delay > 0 && !isRevealed ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
