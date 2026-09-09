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
 * Optional analytics, isolated from health data.
 *
 * - Only loads when `NEXT_PUBLIC_GA_ID` is set; otherwise
 *   no third-party script is injected.
 * - Page-view level measurement only. The tools (calculators,
 *   test, generator, postpartum selector) NEVER send events with
 *   entered values, answers, symptoms, results, medical
 *   dates, or birth type. There is no `tool_*` event with data.
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
