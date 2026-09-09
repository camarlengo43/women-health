/**
 * Reusable client-side PDF download button.
 *
 * - Generates the document in the browser from in-memory data only.
 * - `@react-pdf/renderer` is loaded through dynamic `import()`, so it
 *   never enters the initial page bundle and never runs on the server.
 * - No backend calls, no storage, no analytics: builds a Blob, triggers
 *   a temporary anchor download, and revokes the object URL.
 * - Guards against double clicks (disabled while generating) and
 *   exposes generation status through an `aria-live` region.
 */
'use client'

import { useState } from 'react'
import type { ReactElement } from 'react'
import type { DocumentProps } from '@react-pdf/renderer'
import { AlertTriangle, Check, FileDown, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type DownloadStatus = 'idle' | 'generating' | 'done' | 'error'

export function PdfDownloadButton({
  label,
  fileName,
  loadDocument,
  className,
}: {
  /** Visible accessible label, e.g. "Descargar resultado en PDF". */
  label: string
  /** SEO-friendly filename, e.g. "registro-ciclo-menstrual-vidamujer.pdf". */
  fileName: string
  /**
   * Lazily builds the react-pdf `<Document>` element. The factory itself
   * must dynamically import its template so `@react-pdf/renderer` stays
   * out of the page bundle until the user actually downloads.
   */
  loadDocument: () => Promise<ReactElement<DocumentProps>>
  className?: string
}) {
  const [status, setStatus] = useState<DownloadStatus>('idle')
  const generating = status === 'generating'

  async function handleClick() {
    if (generating) return
    setStatus('generating')
    try {
      const element = await loadDocument()
      const { pdf } = await import('@react-pdf/renderer')
      const blob = await pdf(element).toBlob()
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = fileName
      anchor.rel = 'noopener'
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 1000)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={generating}
        aria-busy={generating}
        className={cn(
          'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-70',
          className,
        )}
      >
        {generating ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : status === 'done' ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <FileDown className="h-4 w-4" aria-hidden="true" />
        )}
        {generating ? 'Generando PDF…' : status === 'done' ? '¡PDF descargado!' : label}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === 'error' && (
          <p role="alert" className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-red-600">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            No se ha podido generar el PDF. Comprueba tu conexión y vuelve a intentarlo.
          </p>
        )}
        {status === 'done' && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Descarga completada. El documento se ha generado en tu dispositivo, sin enviar ningún dato.
          </p>
        )}
      </div>
    </div>
  )
}
