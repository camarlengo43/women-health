import { siteConfig } from '@/config'
import { AlertTriangle } from 'lucide-react'

export function MedicalDisclaimer() {
  return (
    <aside className="callout callout-medical" role="note" aria-label="Aviso médico">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-semibold text-foreground text-sm mb-1">
            Información importante
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {siteConfig.medicalDisclaimer}
          </p>
        </div>
      </div>
    </aside>
  )
}
