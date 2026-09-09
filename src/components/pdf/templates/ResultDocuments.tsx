/**
 * Result PDF documents for the VidaMujer calculators.
 *
 * Each document is a pure function of an already-computed
 * `PdfReportData` object (built in `src/lib/pdf/report-data.ts` from
 * values present in browser memory). No fetching, no storage.
 *
 * Loaded exclusively through dynamic `import()` from
 * `PdfDownloadButton`, so `@react-pdf/renderer` never enters the
 * initial page bundle.
 */
import { Document } from '@react-pdf/renderer'
import type { PdfReportData } from '@/lib/pdf/report-data'
import {
  PdfA4Page,
  PdfDisclaimer,
  PdfHeader,
  PdfKeyValueTable,
  PdfParagraphs,
  PdfSection,
} from '@/components/pdf/PdfDocShell'

function ResultDoc({ data }: { data: PdfReportData }) {
  return (
    <Document title={`${data.toolName} — ${data.siteName}`} author={data.siteName} subject={data.toolName}>
      <PdfA4Page siteName={data.siteName} siteUrl={data.siteUrl}>
        <PdfHeader
          siteName={data.siteName}
          title={data.toolName}
          subtitle={data.toolSubtitle}
          generatedAt={data.generatedAt}
        />
        <PdfSection title="Datos introducidos">
          <PdfKeyValueTable rows={data.inputRows} />
        </PdfSection>
        <PdfSection title="Resultado">
          <PdfKeyValueTable rows={data.resultRows} />
        </PdfSection>
        <PdfSection title="Información">
          <PdfParagraphs items={data.infoParagraphs} />
        </PdfSection>
        <PdfDisclaimer text={data.disclaimer} />
      </PdfA4Page>
    </Document>
  )
}

export function CycleResultDoc({ data }: { data: PdfReportData }) {
  return <ResultDoc data={data} />
}

export function OvulationResultDoc({ data }: { data: PdfReportData }) {
  return <ResultDoc data={data} />
}

export function PregnancyResultDoc({ data }: { data: PdfReportData }) {
  return <ResultDoc data={data} />
}

export function PerimenopauseResultDoc({ data }: { data: PdfReportData }) {
  return <ResultDoc data={data} />
}

export function RoutineResultDoc({ data }: { data: PdfReportData }) {
  return <ResultDoc data={data} />
}
