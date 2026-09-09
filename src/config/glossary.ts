export interface GlossaryTerm {
  slug: string
  term: string
  short: string
  body: string
  relevance: string
  related?: { label: string; href: string }[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'estrogeno',
    term: 'Estrógeno',
    short: 'Hormona que participa en el ciclo, la salud ósea y muchos tejidos.',
    body: 'Los estrógenos son un grupo de hormonas con papel central en el desarrollo reproductivo, la regulación del ciclo menstrual y la salud ósea y cardiovascular. En perimenopausia sus niveles fluctúan y luego disminuyen de forma sostenida.',
    relevance: 'Entender el estrógeno ayuda a comprender por qué cambian el ciclo, el sueño, los sofocos o la densidad ósea en la transición menopáusica.',
    related: [
      { label: 'Perimenopausia: qué es', href: '/perimenopausia/que-es' },
      { label: 'Salud ósea en la menopausia', href: '/menopausia/salud-osea' },
      { label: 'Progesterona', href: '/glosario/progesterona' },
    ],
  },
  {
    slug: 'progesterona',
    term: 'Progesterona',
    short: 'Hormona clave en la segunda fase del ciclo y el embarazo.',
    body: 'La progesterona se produce sobre todo tras la ovulación y durante el embarazo. Influye en el endometrio, la temperatura basal y, en algunas personas, en el ánimo o el sueño.',
    relevance: 'Es una de las hormonas que más fluctúa en la perimenopausia; sus variaciones se relacionan con cambios en el sangrado y, en algunas mujeres, en el descanso.',
    related: [
      { label: 'Ovulación', href: '/glosario/ovulacion' },
      { label: 'Cambios en la menstruación', href: '/perimenopausia/cambios-menstruacion' },
    ],
  },
  {
    slug: 'fsh',
    term: 'FSH',
    short: 'Hormona foliculoestimulante, relacionada con los folículos ováricos.',
    body: 'La FSH estimula el desarrollo de los folículos en el ovario. En la transición menopáusica sus valores tienden a elevarse como respuesta a la menor reserva ovárica.',
    relevance: 'Suele medirse en analíticas para valorar la transición menopáusica, aunque un valor aislado no basta para diagnosticar: se interpreta junto con la edad y los síntomas.',
    related: [
      { label: 'Perimenopausia a los 40', href: '/perimenopausia/a-los-40' },
      { label: 'LH', href: '/glosario/lh' },
    ],
  },
  {
    slug: 'lh',
    term: 'LH',
    short: 'Hormona luteinizante, con papel central en la ovulación.',
    body: 'El pico de LH desencadena la ovulación. Fuera de ese pico, sus niveles son más bajos y varían a lo largo del ciclo.',
    relevance: 'Conocer la LH ayuda a entender cómo funciona la ovulación y por qué los test de ovulación detectan su aumento en orina.',
    related: [
      { label: 'Ovulación', href: '/glosario/ovulacion' },
      { label: 'FSH', href: '/glosario/fsh' },
    ],
  },
  {
    slug: 'ovulacion',
    term: 'Ovulación',
    short: 'Liberación del óvulo por el ovario durante el ciclo.',
    body: 'Suele ocurrir hacia la mitad del ciclo en ciclos regulares, pero puede variar. Las calculadoras ofrecen estimaciones, no fechas exactas, y no deben usarse como método anticonceptivo.',
    relevance: 'Es el evento central del ciclo: condiciona la ventana fértil, la regularidad del sangrado y parte de los síntomas de la segunda fase.',
    related: [
      { label: 'Calculadora del ciclo', href: '/calculadora-ciclo-menstrual' },
      { label: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
    ],
  },
  {
    slug: 'perimenopausia',
    term: 'Perimenopausia',
    short: 'Etapa previa a la menopausia, con cambios graduales.',
    body: 'Es el periodo de transición antes de la menopausia, que puede durar varios años, con ciclos más irregulares, sofocos, cambios de sueño o de ánimo.',
    relevance: 'Reconocer esta etapa permite interpretar cambios que a menudo se atribuyen solo al estrés o a la edad, y decidir cuándo pedir orientación.',
    related: [
      { label: 'Hub de perimenopausia', href: '/perimenopausia' },
      { label: 'Test orientativo', href: '/test-perimenopausia' },
    ],
  },
  {
    slug: 'menopausia',
    term: 'Menopausia',
    short: 'Momento que marca el fin de la etapa reproductiva.',
    body: 'Se define retrospectivamente tras 12 meses sin menstruación sin otra causa. Después comienza la postmenopausia.',
    relevance: 'Marca un cambio de prioridades preventivas: salud ósea, cardiovascular y seguimiento sanitario periódico ganan importancia.',
    related: [
      { label: 'Hub de menopausia', href: '/menopausia' },
      { label: 'Postmenopausia', href: '/etapas/postmenopausia' },
    ],
  },
  {
    slug: 'amenorrea',
    term: 'Amenorrea',
    short: 'Ausencia de menstruación fuera de lo esperado.',
    body: 'Puede tener muchas causas: embarazo, lactancia, estrés, bajo peso, ejercicio intenso, síndrome de ovario poliquístico o menopausia, entre otras. Si persiste, conviene consultar.',
    relevance: 'Es una señal que siempre merece atención cuando se sale del patrón esperado, porque orienta hacia causas tratables.',
    related: [
      { label: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
      { label: 'SOP', href: '/glosario/sop' },
    ],
  },
  {
    slug: 'dismenorrea',
    term: 'Dismenorrea',
    short: 'Dolor menstrual intenso o molesto.',
    body: 'El dolor leve puede ser frecuente, pero si es intenso, limita tu vida o empeora con el tiempo, merece valoración para descartar causas como endometriosis.',
    relevance: 'Distinguir el dolor habitual del que limita la vida diaria es clave para decidir cuándo pedir una valoración.',
    related: [
      { label: 'Endometriosis', href: '/glosario/endometriosis' },
      { label: '¿Es normal tener sangrado abundante?', href: '/es-normal/sangrado-abundante' },
    ],
  },
  {
    slug: 'sop',
    term: 'SOP',
    short: 'Síndrome de ovario poliquístico.',
    body: 'Conjunto de alteraciones hormonales con síntomas variables: ciclos irregulares, acné, aumento de vello o dificultad para ovular. El diagnóstico y el plan son individualizados.',
    relevance: 'Es una de las causas frecuentes de irregularidad menstrual en edad reproductiva y tiene manejo específico según los objetivos de cada mujer.',
    related: [
      { label: '¿Es normal tener ciclos irregulares?', href: '/es-normal/ciclos-irregulares' },
      { label: 'Amenorrea', href: '/glosario/amenorrea' },
    ],
  },
  {
    slug: 'endometriosis',
    term: 'Endometriosis',
    short: 'Tejido endometrial fuera del útero que puede causar dolor.',
    body: 'Puede asociarse a dolor menstrual intenso, dolor pélvico o dificultades reproductivas. Ante sospecha, la valoración profesional es importante.',
    relevance: 'El retraso diagnóstico es frecuente porque el dolor se normaliza; conocer el término ayuda a describir los síntomas en consulta.',
    related: [
      { label: 'Dismenorrea', href: '/glosario/dismenorrea' },
      { label: '¿Es normal tener sangrado abundante?', href: '/es-normal/sangrado-abundante' },
    ],
  },
  {
    slug: 'ths',
    term: 'THS',
    short: 'Terapia hormonal sustitutiva (ahora terapia hormonal para la menopausia).',
    body: 'Agrupa tratamientos hormonales que pueden aliviar algunos síntomas de la menopausia en personas seleccionadas. Beneficios y riesgos se valoran de forma individual con un profesional.',
    relevance: 'Es una opción con beneficios y riesgos que dependen de la edad, el momento de inicio y el perfil de cada mujer; la decisión es siempre médica e individual.',
    related: [
      { label: 'Cuándo consultar en perimenopausia', href: '/perimenopausia/cuando-consultar' },
      { label: 'Sofocos en la menopausia', href: '/menopausia/sofocos' },
    ],
  },
  {
    slug: 'osteoporosis',
    term: 'Osteoporosis',
    short: 'Pérdida de densidad ósea que aumenta el riesgo de fractura.',
    body: 'Es más frecuente tras la menopausia por la caída de estrógenos. Fuerza, impacto moderado, equilibrio, calcio, vitamina D y valoración médica ayudan a prevenirla.',
    relevance: 'Suele no dar síntomas hasta la fractura, por eso la prevención con ejercicio y hábitos desde la perimenopausia es tan importante.',
    related: [
      { label: 'Salud ósea en menopausia', href: '/menopausia/salud-osea' },
      { label: 'Osteoporosis', href: '/menopausia/osteoporosis' },
      { label: 'Salud ósea y movimiento', href: '/movimiento/salud-osea' },
    ],
  },
]

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug)
}
