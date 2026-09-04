'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'

export function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') || ''
  const currentCategory = searchParams.get('categoria') || ''
  const [query, setQuery] = useState(currentQuery)
  const [isPending, startTransition] = useTransition()

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
    startTransition(() => {
      const params = new URLSearchParams()
      if (newQuery.trim()) params.set('q', newQuery.trim())
      if (currentCategory) params.set('categoria', currentCategory)
      router.push(`/buscar?${params.toString()}`)
    })
  }

  const handleClear = () => {
    setQuery('')
    startTransition(() => {
      const params = new URLSearchParams()
      if (currentCategory) params.set('categoria', currentCategory)
      const queryString = params.toString()
      router.push(queryString ? `/buscar?${queryString}` : '/buscar')
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSearch(query)
      }}
      className="relative w-full"
      role="search"
    >
      <div className="relative flex items-center">
        <Search
          className={`absolute left-4 w-5 h-5 transition-colors ${
            isPending ? 'text-accent animate-pulse' : 'text-muted-foreground'
          }`}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar síntomas, tratamientos, fases del ciclo, dudas..."
          className="w-full pl-12 pr-12 py-3.5 bg-card text-foreground rounded-xl border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all text-base shadow-sm"
          autoFocus
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  )
}
