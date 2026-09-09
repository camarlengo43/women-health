import { siteConfig } from '@/config'

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * Analytics opcional y aislado de los datos de salud.
 *
 * - Solo se carga si `NEXT_PUBLIC_GA_ID` está configurado; en caso
 *   contrario no se inserta ningún script de terceros.
 * - Es medición a nivel de página vista. Las herramientas (calculadoras,
 *   test, generador, selector de posparto) NUNCA envían eventos con
 *   valores introducidos, respuestas, síntomas, resultados, fechas
 *   médicas ni tipo de parto. No existe ningún `tool_*` event con datos.
 */
export function Analytics() {
  const gaId = siteConfig.analytics.gaId
  if (!gaId) return null

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { 'anonymize_ip': true });
          `,
        }}
      />
    </>
  )
}
