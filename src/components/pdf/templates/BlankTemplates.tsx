/**
 * Blank printable tracking templates (react-pdf).
 *
 * Empty sheets for hand-written tracking: generous row heights,
 * no pre-filled data, no inputs. Loaded exclusively through dynamic
 * `import()`, so `@react-pdf/renderer` never enters the initial bundle.
 *
 * Privacy: these documents contain no user data at all.
 *
 * Structure: every `<Document>` composes sibling `<PdfA4Page>` pages
 * (continuation pages are siblings, never nested inside another page).
 * Footers come from `PdfA4Page` itself — do not add extra footers.
 */
import { Document, Text, View } from '@react-pdf/renderer'
import { siteConfig } from '@/config'
import { PDF_FILENAMES } from '@/lib/pdf/report-data'
import { PdfA4Page, pdfStyles } from '@/components/pdf/PdfDocShell'

const SITE_NAME = siteConfig.name
const SITE_URL = siteConfig.url

const PRINT_NOTE =
  'Imprime tantas copias como necesites. Estas plantillas son un apoyo para tu registro personal y no sustituyen la valoración de un profesional sanitario.'

interface BlankColumn {
  label: string
  width: number
}

function percent(n: number) {
  return `${n}%` as const
}

function WritableTable({
  columns,
  rows,
  rowHeight = 27,
}: {
  columns: BlankColumn[]
  rows: number
  rowHeight?: number
}) {
  return (
    <View style={pdfStyles.table}>
      <View style={pdfStyles.writableHeader}>
        {columns.map((col) => (
          <Text key={col.label} style={[pdfStyles.writableHeaderCell, { width: percent(col.width) }]}>
            {col.label}
          </Text>
        ))}
      </View>
      {Array.from({ length: rows }, (_, i) => (
        <View key={i} style={[pdfStyles.writableCell, { minHeight: rowHeight, flexDirection: 'row' }]}>
          {columns.map((col) => (
            <View key={col.label} style={{ width: percent(col.width) }} />
          ))}
        </View>
      ))}
    </View>
  )
}

/** First page of a standalone template: brand header + print note + content. */
function BlankFirstPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  const now = new Date()
  return (
    <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL}>
      <View style={pdfStyles.header}>
        <Text style={pdfStyles.brand}>{SITE_NAME}</Text>
        <Text style={pdfStyles.tagline}>Salud femenina en cada etapa · Contenido orientativo y educativo</Text>
        <Text style={pdfStyles.docTitle}>{title}</Text>
        <Text style={pdfStyles.docSubtitle}>{subtitle}</Text>
        <Text style={pdfStyles.generatedAt}>Generado el {now.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
      </View>
      <Text style={[pdfStyles.paragraph, { color: '#6B6560' }]}>{PRINT_NOTE}</Text>
      {children}
    </PdfA4Page>
  )
}

function BlankDocument({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Document title={`${title} — ${SITE_NAME}`} author={SITE_NAME} subject={title}>
      {children}
    </Document>
  )
}

/** A. Registro del ciclo menstrual — 31 filas en 2 páginas. */
const CYCLE_COLUMNS: BlankColumn[] = [
  { label: 'Día', width: 8 },
  { label: 'Regla', width: 9 },
  { label: 'Intensidad', width: 12 },
  { label: 'Dolor 0–3', width: 10 },
  { label: 'Energía', width: 10 },
  { label: 'Ánimo', width: 11 },
  { label: 'Sueño', width: 10 },
  { label: 'Síntomas / notas', width: 30 },
]

const CYCLE_TITLE = 'Registro del ciclo menstrual'
const CYCLE_SUBTITLE = 'Una fila por día: marca la menstruación y anota intensidad, dolor, energía, ánimo, sueño y síntomas.'

function CycleLogPages() {
  return (
    <>
      <BlankFirstPage title={CYCLE_TITLE} subtitle={CYCLE_SUBTITLE}>
        <Text style={pdfStyles.generatedAt}>Mes y año: ________________________________</Text>
        <WritableTable columns={CYCLE_COLUMNS} rows={16} />
      </BlankFirstPage>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <Text style={pdfStyles.generatedAt}>Mes y año (continuación): ________________________________</Text>
        <WritableTable
          columns={CYCLE_COLUMNS.map((c, i) => (i === 0 ? { ...c, label: 'Día (17–31)' } : c))}
          rows={15}
        />
      </PdfA4Page>
    </>
  )
}

export function CycleLogDoc() {
  return (
    <BlankDocument title={CYCLE_TITLE}>
      <CycleLogPages />
    </BlankDocument>
  )
}

/** B. Calendario menstrual — cuadrícula mensual + leyenda. */
const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const CALENDAR_TITLE = 'Calendario menstrual'
const CALENDAR_SUBTITLE = 'Numera los días según tu mes y marca con símbolos lo que observes cada día.'

function CalendarGrid() {
  const cell = {
    width: percent(100 / 7),
    minHeight: 58,
    borderRightWidth: 1,
    borderRightColor: '#E8E4DE',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E4DE',
  }
  return (
    <View style={[pdfStyles.table, { marginTop: 8 }]}>
      <View style={pdfStyles.writableHeader}>
        {WEEKDAYS.map((d, i) => (
          <Text key={i} style={[pdfStyles.writableHeaderCell, { width: percent(100 / 7), textAlign: 'center' as const }]}>
            {d}
          </Text>
        ))}
      </View>
      {Array.from({ length: 6 }, (_, week) => (
        <View key={week} style={{ flexDirection: 'row' }}>
          {WEEKDAYS.map((_, day) => (
            <View key={day} style={cell} />
          ))}
        </View>
      ))}
    </View>
  )
}

function MenstrualCalendarPages() {
  return (
    <BlankFirstPage title={CALENDAR_TITLE} subtitle={CALENDAR_SUBTITLE}>
      <Text style={pdfStyles.generatedAt}>Mes y año: ________________________________</Text>
      <CalendarGrid />
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>Leyenda sugerida</Text>
        <Text style={pdfStyles.paragraph}>● menstruación · ◐ manchado · D dolor · A ánimo · E energía · S sueño · ✎ notas al pie o al dorso</Text>
        <Text style={pdfStyles.paragraph}>Intensidad del sangrado: 1 leve · 2 moderado · 3 abundante. Dolor y energía: 0–3.</Text>
      </View>
    </BlankFirstPage>
  )
}

export function MenstrualCalendarDoc() {
  return (
    <BlankDocument title={CALENDAR_TITLE}>
      <MenstrualCalendarPages />
    </BlankDocument>
  )
}

/** C. Diario de síntomas — 24 filas en 2 páginas. */
const SYMPTOM_COLUMNS: BlankColumn[] = [
  { label: 'Fecha', width: 12 },
  { label: 'Síntoma', width: 20 },
  { label: 'Intensidad 0–3', width: 13 },
  { label: 'Ánimo', width: 11 },
  { label: 'Energía', width: 11 },
  { label: 'Sueño', width: 10 },
  { label: 'Notas', width: 23 },
]
const SYMPTOM_TITLE = 'Diario de síntomas'
const SYMPTOM_SUBTITLE = 'Seguimiento diario: síntoma, intensidad, ánimo, energía, sueño y notas.'

function SymptomDiaryPages() {
  return (
    <>
      <BlankFirstPage title={SYMPTOM_TITLE} subtitle={SYMPTOM_SUBTITLE}>
        <WritableTable columns={SYMPTOM_COLUMNS} rows={12} rowHeight={30} />
      </BlankFirstPage>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <WritableTable columns={SYMPTOM_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
    </>
  )
}

export function SymptomDiaryDoc() {
  return (
    <BlankDocument title={SYMPTOM_TITLE}>
      <SymptomDiaryPages />
    </BlankDocument>
  )
}

/** D. Diario de perimenopausia — registro manual, sin carácter diagnóstico. */
const PERI_COLUMNS: BlankColumn[] = [
  { label: 'Fecha', width: 10 },
  { label: 'Sofocos', width: 7 },
  { label: 'Sudor noc.', width: 7 },
  { label: 'Sueño', width: 7 },
  { label: 'Ánimo', width: 7 },
  { label: 'Fatiga', width: 7 },
  { label: 'Cefalea', width: 7 },
  { label: 'Regla', width: 7 },
  { label: 'Otro', width: 9 },
  { label: 'Int. 0–3', width: 8 },
  { label: 'Notas', width: 24 },
]
const PERI_TITLE = 'Diario de perimenopausia'
const PERI_SUBTITLE = 'Hoja de registro personal: marca con una X los síntomas del día e indica intensidad y notas.'

function PerimenopauseDiaryPages() {
  return (
    <>
      <BlankFirstPage title={PERI_TITLE} subtitle={PERI_SUBTITLE}>
        <Text style={[pdfStyles.paragraph, { color: '#6B6560' }]}>
          Esta hoja sirve solo para llevar un registro personal. No es una herramienta diagnóstica: si los síntomas persisten o te preocupan, consulta a un profesional sanitario.
        </Text>
        <WritableTable columns={PERI_COLUMNS} rows={12} rowHeight={30} />
      </BlankFirstPage>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <WritableTable columns={PERI_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
    </>
  )
}

export function PerimenopauseDiaryDoc() {
  return (
    <BlankDocument title={PERI_TITLE}>
      <PerimenopauseDiaryPages />
    </BlankDocument>
  )
}

/** E. Registro de actividad física — 24 filas en 2 páginas. */
const ACTIVITY_COLUMNS: BlankColumn[] = [
  { label: 'Fecha', width: 11 },
  { label: 'Actividad', width: 19 },
  { label: 'Duración', width: 10 },
  { label: 'Intensidad', width: 11 },
  { label: 'Energía antes', width: 12 },
  { label: 'Energía después', width: 12 },
  { label: 'Observaciones', width: 25 },
]
const ACTIVITY_TITLE = 'Registro de actividad física'
const ACTIVITY_SUBTITLE = 'Anota cada sesión: actividad, duración, intensidad, energía antes y después, y observaciones.'

function ActivityLogPages() {
  return (
    <>
      <BlankFirstPage title={ACTIVITY_TITLE} subtitle={ACTIVITY_SUBTITLE}>
        <WritableTable columns={ACTIVITY_COLUMNS} rows={12} rowHeight={30} />
      </BlankFirstPage>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <WritableTable columns={ACTIVITY_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
    </>
  )
}

export function ActivityLogDoc() {
  return (
    <BlankDocument title={ACTIVITY_TITLE}>
      <ActivityLogPages />
    </BlankDocument>
  )
}

function PackSectionTitle({ children }: { children: string }) {
  return (
    <View style={pdfStyles.header}>
      <Text style={pdfStyles.brand}>{SITE_NAME}</Text>
      <Text style={pdfStyles.docTitle}>{children}</Text>
    </View>
  )
}

/** Pack de seguimiento VidaMujer — todas las plantillas en un único PDF. */
export function TrackingPackDoc() {
  const now = new Date()
  return (
    <Document title={`Pack de seguimiento — ${SITE_NAME}`} author={SITE_NAME} subject="Pack de seguimiento VidaMujer">
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL}>
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.brand}>{SITE_NAME}</Text>
          <Text style={pdfStyles.tagline}>Salud femenina en cada etapa · Contenido orientativo y educativo</Text>
          <Text style={pdfStyles.docTitle}>Pack de seguimiento VidaMujer</Text>
          <Text style={pdfStyles.docSubtitle}>Todas las plantillas de registro manual en un único documento para imprimir.</Text>
          <Text style={pdfStyles.generatedAt}>Generado el {now.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
        </View>
        <Text style={[pdfStyles.paragraph, { color: '#6B6560' }]}>{PRINT_NOTE}</Text>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Contenido del pack</Text>
          <Text style={pdfStyles.paragraph}>1. Registro del ciclo menstrual</Text>
          <Text style={pdfStyles.paragraph}>2. Calendario menstrual</Text>
          <Text style={pdfStyles.paragraph}>3. Diario de síntomas</Text>
          <Text style={pdfStyles.paragraph}>4. Diario de perimenopausia</Text>
          <Text style={pdfStyles.paragraph}>5. Registro de actividad física</Text>
        </View>
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{CYCLE_TITLE}</PackSectionTitle>
        <Text style={pdfStyles.generatedAt}>Mes y año: ________________________________</Text>
        <WritableTable columns={CYCLE_COLUMNS} rows={16} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{`${CYCLE_TITLE} (continuación)`}</PackSectionTitle>
        <WritableTable
          columns={CYCLE_COLUMNS.map((c, i) => (i === 0 ? { ...c, label: 'Día (17–31)' } : c))}
          rows={15}
        />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{CALENDAR_TITLE}</PackSectionTitle>
        <Text style={pdfStyles.generatedAt}>Mes y año: ________________________________</Text>
        <CalendarGrid />
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.sectionTitle}>Leyenda sugerida</Text>
          <Text style={pdfStyles.paragraph}>● menstruación · ◐ manchado · D dolor · A ánimo · E energía · S sueño · ✎ notas al pie o al dorso</Text>
        </View>
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{SYMPTOM_TITLE}</PackSectionTitle>
        <WritableTable columns={SYMPTOM_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{`${SYMPTOM_TITLE} (continuación)`}</PackSectionTitle>
        <WritableTable columns={SYMPTOM_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{PERI_TITLE}</PackSectionTitle>
        <Text style={[pdfStyles.paragraph, { color: '#6B6560' }]}>
          Hoja de registro personal, sin carácter diagnóstico.
        </Text>
        <WritableTable columns={PERI_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{`${PERI_TITLE} (continuación)`}</PackSectionTitle>
        <WritableTable columns={PERI_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{ACTIVITY_TITLE}</PackSectionTitle>
        <WritableTable columns={ACTIVITY_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
      <PdfA4Page siteName={SITE_NAME} siteUrl={SITE_URL} break>
        <PackSectionTitle>{`${ACTIVITY_TITLE} (continuación)`}</PackSectionTitle>
        <WritableTable columns={ACTIVITY_COLUMNS} rows={12} rowHeight={30} />
      </PdfA4Page>
    </Document>
  )
}

export const BLANK_TEMPLATE_FILENAMES = {
  cycleLog: PDF_FILENAMES.cycleLog,
  menstrualCalendar: PDF_FILENAMES.menstrualCalendar,
  symptomDiary: PDF_FILENAMES.symptomDiary,
  perimenopauseDiary: PDF_FILENAMES.perimenopauseDiary,
  activityLog: PDF_FILENAMES.activityLog,
  trackingPack: PDF_FILENAMES.trackingPack,
} as const
