/**
 * Metadata for the printable tracking templates section.
 *
 * Serializable data only (id, copy, filenames): the actual document
 * loaders live in the client-side `TemplateDownloadCard`, because
 * server components cannot pass functions to client components.
 */
import { PDF_FILENAMES } from './report-data'

export type BlankTemplateId =
  | 'cycleLog'
  | 'menstrualCalendar'
  | 'symptomDiary'
  | 'perimenopauseDiary'
  | 'activityLog'
  | 'trackingPack'

export interface BlankTemplateMeta {
  id: BlankTemplateId
  title: string
  description: string
  fileName: string
  fields: string[]
  isPack?: boolean
}

export const BLANK_TEMPLATES: BlankTemplateMeta[] = [
  {
    id: 'cycleLog',
    title: 'Registro del ciclo menstrual',
    description:
      'Hoja mensual para anotar cada día la menstruación, su intensidad y cómo te encuentras.',
    fileName: PDF_FILENAMES.cycleLog,
    fields: ['Día', 'Menstruación', 'Intensidad', 'Dolor', 'Energía', 'Ánimo', 'Sueño', 'Síntomas y notas'],
  },
  {
    id: 'menstrualCalendar',
    title: 'Calendario menstrual',
    description:
      'Calendario mensual imprimible para marcar la regla, los síntomas y tu estado de ánimo de un vistazo.',
    fileName: PDF_FILENAMES.menstrualCalendar,
    fields: ['Menstruación', 'Síntomas', 'Dolor', 'Ánimo', 'Energía', 'Notas'],
  },
  {
    id: 'symptomDiary',
    title: 'Diario de síntomas',
    description:
      'Tabla de seguimiento diario para observar patrones en tus síntomas a lo largo del tiempo.',
    fileName: PDF_FILENAMES.symptomDiary,
    fields: ['Fecha', 'Síntoma', 'Intensidad', 'Ánimo', 'Energía', 'Sueño', 'Notas'],
  },
  {
    id: 'perimenopauseDiary',
    title: 'Diario de perimenopausia',
    description:
      'Registro manual de señales frecuentes de la transición menopáusica. Hoja personal, sin carácter diagnóstico.',
    fileName: PDF_FILENAMES.perimenopauseDiary,
    fields: ['Sofocos', 'Sudoración nocturna', 'Sueño', 'Ánimo', 'Fatiga', 'Cefalea', 'Cambios menstruales', 'Intensidad y notas'],
  },
  {
    id: 'activityLog',
    title: 'Registro de actividad física',
    description:
      'Anota tus sesiones de movimiento y cómo influyen en tu energía antes y después.',
    fileName: PDF_FILENAMES.activityLog,
    fields: ['Fecha', 'Actividad', 'Duración', 'Intensidad', 'Energía antes y después', 'Observaciones'],
  },
]

export const TRACKING_PACK: BlankTemplateMeta = {
  id: 'trackingPack',
  title: 'Pack de seguimiento VidaMujer',
  description:
    'Las cinco plantillas en un único PDF listo para imprimir: ciclo, calendario, síntomas, perimenopausia y actividad.',
  fileName: PDF_FILENAMES.trackingPack,
  fields: ['Las 5 plantillas', 'Un solo archivo', 'Listo para imprimir'],
  isPack: true,
}
