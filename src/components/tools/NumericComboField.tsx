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
 * Numeric field with manual entry + picker.
 *
 * - The user can type, clear, paste, or pick a value from the list.
 * - Manual typing and the picker update the same state (`value`).
 * - Never blocks editing: accepts empty and invalid input as text and
 *   delegates validation to the app logic (`getCycleLengthError`, …).
 * - Accessible: `min`/`max`/`step`/`inputMode`, `aria-invalid`, and error with
 *   `role="alert"`. Real validation happens in JS, not just in HTML.
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
