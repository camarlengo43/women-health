/**
 * Client download card button for a blank template or the full pack.
 *
 * Receives only a serializable `templateId` (server components cannot
 * pass loader functions down) and resolves the dynamic document import
 * locally, keeping `@react-pdf/renderer` out of the page bundle.
 */
'use client'

import type { ReactElement } from 'react'
import type { DocumentProps } from '@react-pdf/renderer'
import { PdfDownloadButton } from '@/components/pdf/PdfDownloadButton'
import type { BlankTemplateId } from '@/lib/pdf/templates-meta'
import { BLANK_TEMPLATES, TRACKING_PACK } from '@/lib/pdf/templates-meta'

async function loadTemplateDocument(id: BlankTemplateId): Promise<ReactElement<DocumentProps>> {
  const templates = await import('@/components/pdf/templates/BlankTemplates')
  switch (id) {
    case 'cycleLog':
      return templates.CycleLogDoc()
    case 'menstrualCalendar':
      return templates.MenstrualCalendarDoc()
    case 'symptomDiary':
      return templates.SymptomDiaryDoc()
    case 'perimenopauseDiary':
      return templates.PerimenopauseDiaryDoc()
    case 'activityLog':
      return templates.ActivityLogDoc()
    case 'trackingPack':
      return templates.TrackingPackDoc()
  }
}

export function TemplateDownloadButton({ id }: { id: BlankTemplateId }) {
  const meta =
    id === 'trackingPack'
      ? TRACKING_PACK
      : BLANK_TEMPLATES.find((template) => template.id === id) ?? BLANK_TEMPLATES[0]
  return (
    <PdfDownloadButton
      label={meta.isPack ? 'Descargar pack completo en PDF' : `Descargar ${meta.title.toLowerCase()} en PDF`}
      fileName={meta.fileName}
      loadDocument={() => loadTemplateDocument(id)}
    />
  )
}
