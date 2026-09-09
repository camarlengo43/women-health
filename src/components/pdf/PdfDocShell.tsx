/**
 * Shared VidaMujer PDF primitives (react-pdf).
 *
 * Common visual identity for every VidaMujer document:
 * - A4 pages with consistent margins
 * - Header with the VidaMujer name + tool-agnostic tagline
 * - Footer with page numbers, site URL and generation date
 * - Sections, label/value tables, bullet lists and a medical disclaimer box
 *
 * Rendered with built-in Helvetica on purpose: no webfont downloads,
 * so documents generate fully offline from in-memory data.
 */
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { ReactNode } from 'react'
import { formatGenerationDateEs } from '@/lib/pdf/report-data'

const ACCENT = '#8B6E5A'
const FOREGROUND = '#1A1A1A'
const MUTED = '#6B6560'
const MUTED_BG = '#F5F3EF'
const BORDER = '#E8E4DE'
const WHITE = '#FFFFFF'

export const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 48,
    fontFamily: 'Helvetica',
    fontSize: 10.5,
    lineHeight: 1.6,
    color: FOREGROUND,
    backgroundColor: WHITE,
  },
  header: {
    marginBottom: 8,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
  },
  brand: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 9,
    color: MUTED,
    marginTop: 2,
  },
  docTitle: {
    fontSize: 17,
    fontFamily: 'Helvetica-Bold',
    color: FOREGROUND,
    marginTop: 14,
    marginBottom: 2,
  },
  docSubtitle: {
    fontSize: 10.5,
    color: MUTED,
    marginBottom: 4,
  },
  generatedAt: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 12,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    color: FOREGROUND,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  table: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  rowLast: {
    flexDirection: 'row',
  },
  cellLabel: {
    width: '38%',
    paddingVertical: 7,
    paddingHorizontal: 9,
    fontSize: 10,
    color: MUTED,
    backgroundColor: MUTED_BG,
  },
  cellValue: {
    width: '62%',
    paddingVertical: 7,
    paddingHorizontal: 9,
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: FOREGROUND,
  },
  paragraph: {
    fontSize: 10.5,
    color: FOREGROUND,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bulletDot: {
    width: 12,
    fontSize: 10.5,
    color: ACCENT,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.5,
    color: FOREGROUND,
  },
  disclaimerBox: {
    marginTop: 16,
    padding: 10,
    backgroundColor: MUTED_BG,
    borderLeftWidth: 3,
    borderLeftColor: ACCENT,
    borderRadius: 3,
  },
  disclaimerTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: FOREGROUND,
    marginBottom: 3,
  },
  disclaimerText: {
    fontSize: 9.5,
    color: MUTED,
  },
  footer: {
    position: 'absolute',
    bottom: 28,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8.5,
    color: MUTED,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingTop: 8,
  },
  writableCell: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    minHeight: 30,
  },
  writableHeader: {
    flexDirection: 'row',
    backgroundColor: MUTED_BG,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  writableHeaderCell: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: FOREGROUND,
  },
})

export function PdfFooter({ siteUrl, siteName }: { siteUrl: string; siteName: string }) {
  return (
    <View style={pdfStyles.footer} fixed>
      <Text>
        {siteName} · {siteUrl}
      </Text>
      <Text
        render={({ pageNumber, totalPages }) =>
          `Página ${pageNumber} de ${totalPages}`
        }
      />
    </View>
  )
}

export function PdfHeader({
  siteName,
  title,
  subtitle,
  generatedAt,
}: {
  siteName: string
  title: string
  subtitle?: string
  generatedAt: Date
}) {
  return (
    <View style={pdfStyles.header}>
      <Text style={pdfStyles.brand}>{siteName}</Text>
      <Text style={pdfStyles.tagline}>Salud femenina en cada etapa · Contenido orientativo y educativo</Text>
      <Text style={pdfStyles.docTitle}>{title}</Text>
      {subtitle ? <Text style={pdfStyles.docSubtitle}>{subtitle}</Text> : null}
      <Text style={pdfStyles.generatedAt}>Generado el {formatGenerationDateEs(generatedAt)}</Text>
    </View>
  )
}

export function PdfSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={pdfStyles.section} wrap={false}>
      <Text style={pdfStyles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

export function PdfKeyValueTable({ rows }: { rows: { label: string; value: string }[] }) {
  if (rows.length === 0) return null
  return (
    <View style={pdfStyles.table}>
      {rows.map((row, index) => (
        <View key={`${row.label}-${index}`} style={index < rows.length - 1 ? pdfStyles.row : pdfStyles.rowLast} wrap={false}>
          <Text style={pdfStyles.cellLabel}>{row.label}</Text>
          <Text style={pdfStyles.cellValue}>{row.value}</Text>
        </View>
      ))}
    </View>
  )
}

export function PdfParagraphs({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item, index) => (
        <Text key={index} style={pdfStyles.paragraph}>
          {item}
        </Text>
      ))}
    </View>
  )
}

export function PdfBullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item, index) => (
        <View key={index} style={pdfStyles.bulletRow} wrap={false}>
          <Text style={pdfStyles.bulletDot}>•</Text>
          <Text style={pdfStyles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

export function PdfDisclaimer({ text }: { text: string }) {
  return (
    <View style={pdfStyles.disclaimerBox} wrap={false}>
      <Text style={pdfStyles.disclaimerTitle}>Aviso importante</Text>
      <Text style={pdfStyles.disclaimerText}>{text}</Text>
    </View>
  )
}

export function PdfA4Page({
  siteName,
  siteUrl,
  children,
  break: pageBreak,
}: {
  siteName: string
  siteUrl: string
  children: ReactNode
  break?: boolean
}) {
  return (
    <Page size="A4" style={pdfStyles.page} break={pageBreak}>
      {children}
      <PdfFooter siteUrl={siteUrl} siteName={siteName} />
    </Page>
  )
}

export { Document }
