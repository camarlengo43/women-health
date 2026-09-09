'use client'

interface NumericComboFieldProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  min: number
  max: number
  error?: string | null
  hint?: string
  placeholder?: string
}

/**
 * Campo numérico con introducción manual + selector.
 *
 * - La usuaria puede escribir, borrar, pegar o elegir un valor de la lista.
 * - Escritura manual y selector actualizan el mismo estado (`value`).
 * - No bloquea la edición: acepta vacío e inválidos como texto y delega
 *   la validación a la lógica de la aplicación (`getCycleLengthError`, …).
 * - Accesible: `min`/`max`/`step`/`inputMode`, `aria-invalid` y error con
 *   `role="alert"`. La validación real ocurre en JS, no solo en HTML.
 */
export function NumericComboField({
  id,
  label,
  value,
  onChange,
  onBlur,
  min,
  max,
  error,
  hint,
  placeholder,
}: NumericComboFieldProps) {
  const listId = `${id}-options`
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const options: number[] = []
  for (let i = min; i <= max; i += 1) options.push(i)
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={1}
        inputMode="numeric"
        list={listId}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-accent"
      />
      <datalist id={listId}>
        {options.map((n) => (
          <option key={n} value={n} />
        ))}
      </datalist>
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
