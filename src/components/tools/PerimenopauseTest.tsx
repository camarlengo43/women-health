'use client'

import { useMemo, useState } from 'react'

const questions = [
  'He notado cambios en la regularidad de la regla.',
  'Me despierto/a más por la noche o tengo sueño más fragmentado.',
  'He tenido sofocos o sensación de calor intensa.',
  'He observado cambios de humor o más irritabilidad.',
  'He notado sequedad vaginal o cambios de lubricación.',
]

export function PerimenopauseTest() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  // La usuaria aún no ha interactuado: no se muestra ningún resultado.
  const [hasInteracted, setHasInteracted] = useState(false)

  const checkedIndexes = useMemo(
    () => questions.map((_, index) => index).filter((index) => answers[index] === true),
    [answers],
  )
  const score = checkedIndexes.length

  const result = useMemo(() => {
    if (score === 0) {
      return 'Todavía no hay señales claras en tus respuestas, pero los síntomas pueden aparecer de forma gradual.'
    }

    if (score <= 2) {
      return 'Tus respuestas muestran algunos cambios que pueden aparecer durante la transición menopáusica.'
    }

    if (score <= 4) {
      return 'Tus respuestas indican varios síntomas que suelen aparecer con frecuencia durante la perimenopausia.'
    }

    return 'Tus respuestas reflejan varios indicios compatibles con la perimenopausia, aunque solo un profesional puede valorar tu caso.'
  }, [score])

  const toggleAnswer = (index: number) => {
    setHasInteracted(true)
    setAnswers((current) => ({
      ...current,
      [index]: !current[index],
    }))
  }

  return (
    <div className="space-y-6">
      <fieldset className="space-y-4">
        <legend className="mb-1 text-sm font-medium text-foreground">
          Marca las afirmaciones que describan lo que has notado
        </legend>
        {questions.map((question, index) => (
          <label
            key={question}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-accent/40"
          >
            <input
              type="checkbox"
              checked={!!answers[index]}
              onChange={() => toggleAnswer(index)}
              className="mt-1 h-4 w-4 accent-accent"
            />
            <span className="text-sm leading-relaxed text-foreground">{question}</span>
          </label>
        ))}
      </fieldset>

      <div className="rounded-2xl border border-border bg-muted/30 p-5" aria-live="polite" aria-atomic="true">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Resultado orientativo</p>
        {hasInteracted && score > 0 ? (
          <>
            <p className="mt-3 text-lg font-semibold text-foreground">{result}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Este test es informativo y no diagnostica perimenopausia ni ninguna otra condición. Si notas síntomas persistentes, consulta a un profesional sanitario.
            </p>
          </>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Marca las afirmaciones que describan lo que has notado y verás aquí una
            lectura orientativa. Tus respuestas no se guardan ni se envían a ningún servidor.
          </p>
        )}
      </div>
    </div>
  )
}
