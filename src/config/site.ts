export const siteConfig = {
  name: 'VidaMujer',
  description:
    'Información rigurosa y accesible sobre salud femenina: ciclo menstrual, perimenopausia, menopausia, embarazo y bienestar.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  locale: 'es_ES',
  language: 'es',
  creator: 'VidaMujer',
  ogImage: '/og-default.jpg',
  medicalDisclaimer:
    'La información publicada en VidaMujer tiene carácter divulgativo y educativo. No sustituye en ningún caso la valoración, el diagnóstico ni el tratamiento de un profesional sanitario. Ante cualquier duda sobre tu salud, consulta siempre con tu médico o profesional de referencia.',
  contentCredibility:
    'Contenido elaborado con fuentes médicas y científicas de referencia.',
  social: {
    instagram: '',
    tiktok: '',
    pinterest: '',
    youtube: '',
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
} as const

export type SiteConfig = typeof siteConfig
