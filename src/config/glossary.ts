export interface GlossaryTerm {
  slug: string
  term: string
  short: string
  body: string
  related?: { label: string; href: string }[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'estrogeno',
    term: 'Estrógeno',
    short: 'Hormona que participa en el ciclo, la salud ósea y muchos tejidos.',
    body: 'Los estrógenos son un grupo de hormonas con papel central en el desarrollo reproductivo, la regulación del ciclo menstrual y la salud ósea y cardiovascular. En perimenopausia sus niveles fluctúan y luego disminuyen de forma sostenida.',
    related: [{ label: 'Perimenopausia: qué es', href: '/perimenopausia/que-es' }],
  },
  {
    slug: 'progesterona',
    term: 'Progesterona',
    short: 'Hormona clave en la segunda fase del ciclo y el embarazo.',
    body: 'La progesterona se produce sobre todo tras la ovulación y durante el embarazo. Influye en el endometrio, la temperatura basal y, en algunas personas, en el ánimo o el sueño.',
  },
  {
    slug: 'fsh',
    term: 'FSH',
    short: 'Hormona foliculoestimulante, relacionada con los folículos ováricos.',
    body: 'La FSH estimula el desarrollo de los folículos en el ovario. En la transición menopáusica sus valores tienden a elevarse como respuesta a la menor reserva ovárica.',
    related: [{ label: 'Perimenopausia a los 40', href: '/perimenopausia/a-los-40' }],
  },
  {
    slug: 'lh',
    term: 'LH',
    short: 'Hormona luteinizante, con papel central en la ovulación.',
    body: 'El pico de LH desencadena la ovulación. Fuera de ese pico, sus niveles son más bajos y varían a lo largo del ciclo.',
  },
  {
    slug: 'ovulacion',
    term: 'Ovulación',
    short: 'Liberación del óvulo por el ovario durante el ciclo.',
    body: 'Suele ocurrir hacia la mitad del ciclo en ciclos regulares, pero puede variar. Las calculadoras ofrecen estimaciones, no fechas exactas, y no deben usarse como método anticonceptivo.',
    related: [{ label: 'Calculadora del ciclo', href: '/calculadora-ciclo-menstrual' }],
  },
  {
    slug: 'perimenopausia',
    term: 'Perimenopausia',
    short: 'Etapa previa a la menopausia, con cambios graduales.',
    body: 'Es el periodo de transición antes de la menopausia, que puede durar varios años, con ciclos más irregulares, sofocos, cambios de sueño o de ánimo.',
    related: [{ label: 'Hub de perimenopausia', href: '/perimenopausia' }],
  },
  {
    slug: 'menopausia',
    term: 'Menopausia',
    short: 'Momento que marca el fin de la etapa reproductiva.',
    body: 'Se define retrospectivamente tras 12 meses sin menstruación sin otra causa. Después comienza la postmenopausia.',
    related: [{ label: 'Hub de menopausia', href: '/menopausia' }],
  },
  {
    slug: 'amenorrea',
    term: 'Amenorrea',
    short: 'Ausencia de menstruación fuera de lo esperado.',
    body: 'Puede tener muchas causas: embarazo, lactancia, estrés, bajo peso, ejercicio intenso, síndrome de ovario poliquístico o menopausia, entre otras. Si persiste, conviene consultar.',
  },
  {
    slug: 'dismenorrea',
    term: 'Dismenorrea',
    short: 'Dolor menstrual intenso o molesto.',
    body: 'El dolor leve puede ser frecuente, pero si es intenso, limita tu vida o empeora con el tiempo, merece valoración para descartar causas como endometriosis.',
  },
  {
    slug: 'sop',
    term: 'SOP',
    short: 'Síndrome de ovario poliquístico.',
    body: 'Conjunto de alteraciones hormonales con síntomas variables: ciclos irregulares, acné, aumento de vello o dificultad para ovular. El diagnóstico y el plan son individualizados.',
  },
  {
    slug: 'endometriosis',
    term: 'Endometriosis',
    short: 'Tejido endometrial fuera del útero que puede causar dolor.',
    body: 'Puede asociarse a dolor menstrual intenso, dolor pélvico o dificultades reproductivas. Ante sospecha, la valoración profesional es importante.',
  },
  {
    slug: 'ths',
    term: 'THS',
    short: 'Terapia hormonal sustitutiva (ahora terapia hormonal para la menopausia).',
    body: 'Agrupa tratamientos hormonales que pueden aliviar algunos síntomas de la menopausia en personas seleccionadas. Beneficios y riesgos se valoran de forma individual con un profesional.',
  },
  {
    slug: 'osteoporosis',
    term: 'Osteoporosis',
    short: 'Pérdida de densidad ósea que aumenta el riesgo de fractura.',
    body: 'Es más frecuente tras la menopausia por la caída de estrógenos. Fuerza, impacto moderado, equilibrio, calcio, vitamina D y valoración médica ayudan a prevenirla.',
    related: [{ label: 'Salud ósea en menopausia', href: '/menopausia/salud-osea' }],
  },
]

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug)
}
