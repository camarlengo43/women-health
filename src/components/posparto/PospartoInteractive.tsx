'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * Selector contextual de posparto según tipo de parto.
 *
 * GARANTÍAS DE PRIVACIDAD (requisito funcional):
 * - Solo `useState` en memoria (estado local del navegador).
 * - NO localStorage, NO sessionStorage, NO cookies.
 * - NO URL params, NO fetch/API, NO analytics.
 * - El dato desaparece al refrescar o abandonar la página.
 *
 * GARANTÍAS MÉDICAS:
 * - No diagnostica, no prescribe, no personaliza.
 * - Solo alterna bloques de contenido general ya publicados.
 * - El contenido completo general siempre está accesible sin elegir nada.
 */

type BirthType = 'vaginal' | 'cesarea' | 'sin-indicar' | null

function SectionCard({
  id,
  title,
  body,
  list,
  accent = false,
}: {
  id?: string
  title: string
  body: string
  list?: string[]
  accent?: boolean
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className={
        accent
          ? 'scroll-mt-24 rounded-2xl border border-accent/25 bg-accent/5 p-6'
          : 'scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-card'
      }
    >
      <h2 className="mb-3 text-2xl font-semibold text-foreground">{title}</h2>
      <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
      {list && list.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {list.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export function PospartoInteractive() {
  // Estado efímero: vive solo en memoria durante esta visita.
  const [birthType, setBirthType] = useState<BirthType>(null)

  const showVaginal = birthType === 'vaginal'
  const showCesarea = birthType === 'cesarea'

  return (
    <div>
      {/* ---------- 1. SELECCIÓN OPCIONAL ---------- */}
      <section
        aria-labelledby="tipo-parto-titulo"
        className="mb-8 rounded-2xl border border-border bg-muted/40 p-6"
      >
        <h2 id="tipo-parto-titulo" className="text-xl font-semibold text-foreground">
          ¿Cómo ha sido tu parto?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Selección opcional. Solo sirve para mostrar contenido contextual sobre recuperación.
          Puedes leer toda la página sin elegir nada. Esta elección no se guarda, no se envía
          a ningún servidor y desaparece al refrescar o salir de la página.
        </p>

        <fieldset className="mt-4">
          <legend className="sr-only">Tipo de parto (opcional, solo cambia el contenido visible)</legend>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap" role="radiogroup" aria-label="Tipo de parto">
            {(
              [
                { value: 'vaginal', label: 'Parto vaginal' },
                { value: 'cesarea', label: 'Cesárea' },
                { value: 'sin-indicar', label: 'Prefiero no indicarlo' },
              ] as const
            ).map((option) => {
              const checked = birthType === option.value
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    checked
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-card text-foreground hover:border-accent/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="tipo-parto"
                    value={option.value}
                    checked={checked}
                    onChange={() => setBirthType(option.value)}
                    className="h-4 w-4 accent-accent"
                  />
                  {option.label}
                </label>
              )
            })}
          </div>
        </fieldset>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Información general y orientativa. No es un diagnóstico ni una recomendación personal.
          El ritmo de recuperación depende de factores individuales y de las indicaciones de tu
          equipo sanitario.
        </p>
      </section>

      {/* ---------- 2. CONTENIDO COMÚN (siempre visible) ---------- */}
      <div className="space-y-6" aria-label="Contenido común del posparto">
        <SectionCard
          title="Recuperación general"
          body="Las primeras semanas el cuerpo se recupera del embarazo y del parto: el útero reduce su tamaño, el sangrado posparto (loquios) disminuye progresivamente y el cansancio suele ser intenso. El reposo relativo, la higiene habitual y la paciencia con el ritmo ayudan más que intentar volver cuanto antes a la normalidad."
          list={['Reposo relativo las primeras semanas', 'Sangrado que disminuye poco a poco', 'Paciencia con el ritmo propio']}
        />
        <SectionCard
          title="Sueño y descanso"
          body="El descanso en el posparto suele estar fragmentado por las tomas y los despertares del bebé. Dormir por bloques cuando sea posible, repartir los cuidados nocturnos y bajar la exigencia durante el día protege la energía y el ánimo."
          list={['Dormir por bloques cuando sea posible', 'Repartir cuidados y tareas', 'Aceptar ayuda de la red cercana']}
        />
        <SectionCard
          title="Alimentación"
          body="Una alimentación suficiente y variada sostiene la recuperación y la lactancia cuando existe: hidratos, proteínas, grasas saludables, fibra, agua y alimentos frescos. No es momento de dietas restrictivas; ante molestias digestivas, dudas de peso o lactancia, conviene consultar con un profesional."
          list={['Comidas suficientes y regulares', 'Fibra, agua y variedad', 'Evitar restricciones sin indicación']}
        />
        <SectionCard
          title="Suelo pélvico"
          body="El embarazo y el parto solicitan el suelo pélvico con independencia del tipo de parto. Caminar, evitar empujar en exceso al ir al baño, cuidar la postura y retomar el trabajo de suelo pélvico de forma gradual son hábitos útiles. Ante pérdidas de orina, sensación de peso o dolor persistente, una valoración de fisioterapia puede orientar."
          list={['Evitar empujar en exceso', 'Postura y movimiento variado', 'Valoración si hay síntomas persistentes']}
        />
        <SectionCard
          title="Bienestar emocional"
          body="Cambios de humor, sensibilidad, llanto fácil o ambivalencia son frecuentes en los primeros días por el cansancio y los cambios hormonales. Hablar de lo que ocurre, mantener una red de apoyo y pedir ayuda pronto marca la diferencia. La tristeza profunda o persistente, la ansiedad intensa o la dificultad para el día a día merecen atención profesional sin demora."
          list={['Hablar y pedir apoyo pronto', 'Red cercana y descanso', 'Consultar si el malestar persiste']}
        />
      </div>

      {/* ---------- 3. CONTENIDO CONTEXTUAL ---------- */}
      <div className="mt-6" aria-live="polite" aria-atomic="false" aria-label="Contenido contextual según tipo de parto">
        {showVaginal && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6">
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Recuperación después de un parto vaginal</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                La recuperación después de un parto vaginal puede variar considerablemente. Algunas
                mujeres presentan molestias perineales, puntos o desgarros, mientras que otras no.
                Esta información es general y no describe tu caso: el ritmo depende de tu evolución
                y de las indicaciones de tu equipo sanitario.
              </p>
            </div>
            <SectionCard
              title="Recuperación inicial y molestias habituales"
              body="Es habitual notar molestias en la zona perineal, sensibilidad al sentarse o al caminar, y sangrado que va disminuyendo. La higiene suave con agua, cambiar las compresas con frecuencia y el reposo relativo suelen aliviar. El dolor que aumenta en lugar de mejorar, el sangrado muy abundante o con mal olor, o la fiebre, justifican consultar pronto."
              list={['Molestias perineales variables', 'Sangrado que disminuye con los días', 'Consultar si el dolor aumenta o hay fiebre']}
            />
            <SectionCard
              title="Puntos, desgarros y episiotomía"
              body="No todas las mujeres tienen puntos, desgarros o episiotomía. Cuando existen, suelen reabsorberse solos y mejorar en días o semanas con higiene habitual y evitando esfuerzos que aumenten el dolor. No es necesario aplicar productos sin indicación. Ante enrojecimiento creciente, apertura, secreción con mal olor o dolor intenso, conviene una revisión."
              list={['No siempre hay puntos ni desgarros', 'Higiene habitual y reposo relativo', 'Revisión si hay signos de infección']}
            />
            <SectionCard
              title="Suelo pélvico tras parto vaginal"
              body="Tras un parto vaginal, el suelo pélvico puede estar más sensible o debilitado de forma temporal. La reconexión gradual (respiración, contracciones suaves cuando no duelan) y evitar cargas pesadas e impactos al inicio son enfoques habituales. La progresión la marcan la ausencia de dolor, de pérdidas y de sensación de peso."
              list={['Reconexión gradual y sin dolor', 'Evitar impactos y cargas al inicio', 'Fisioterapia si hay pérdidas o peso pélvico']}
            />
          </div>
        )}

        {showCesarea && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6">
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Recuperación después de una cesárea</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Después de una cesárea, la recuperación puede requerir una progresión diferente
                porque existe una incisión abdominal en cicatrización. Esta información es general
                y debe adaptarse a tu evolución y a las indicaciones de tu equipo sanitario. No
                indica si una actividad concreta es segura para ti.
              </p>
            </div>
            <SectionCard
              title="Incisión y cuidado general de la herida"
              body="La incisión necesita higiene habitual según las indicaciones recibidas, mantener la zona limpia y seca, y observar su evolución. Un enrojecimiento leve inicial puede ser normal, pero la apertura, el sangrado persistente, la secreción con mal olor, el aumento del dolor o la fiebre son motivos para consultar sin demora."
              list={['Higiene según indicaciones del equipo', 'Zona limpia y seca', 'Consultar ante apertura, secreción o fiebre']}
            />
            <SectionCard
              title="Molestias abdominales y limitaciones iniciales"
              body="Es habitual notar dolor o tirantez abdominal, molestias con los cambios de postura y cansancio con esfuerzos pequeños durante las primeras semanas. Moverse con ayuda al incorporarse, evitar cargar peso y repartir las tareas del hogar ayuda. Cada evolución es distinta: las indicaciones del equipo sanitario prevalecen sobre cualquier pauta general."
              list={['Dolor y tirantez al inicio', 'Incorporarse con apoyo', 'Evitar cargar peso y esfuerzos']}
            />
            <SectionCard
              title="Movilidad progresiva tras cesárea"
              body="La movilidad temprana y suave (paseos cortos, cambios de postura frecuentes) suele recomendarse para favorecer la circulación y la recuperación, siempre dentro del umbral del dolor y salvo indicación contraria. Aumentar poco a poco la distancia y el tiempo, sin forzar la zona abdominal, es más útil que avanzar por plazos rígidos."
              list={['Paseos cortos según tolerancia', 'Cambios de postura frecuentes', 'Progresión por sensaciones, no por calendario rígido']}
            />
          </div>
        )}

        {!showVaginal && !showCesarea && (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-2 text-xl font-semibold text-foreground">Recuperación según el tipo de parto</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              La recuperación puede variar según cómo haya sido el parto. Si quieres, elige una
              opción arriba para ver contenido contextual, o explora las guías específicas. En
              todos los casos, el ritmo depende de factores individuales y de las indicaciones
              de tu equipo sanitario.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/etapas/posparto/parto-vaginal"
                className="inline-flex items-center justify-center rounded-full border border-border bg-muted/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50"
              >
                Recuperación tras parto vaginal
              </Link>
              <Link
                href="/etapas/posparto/cesarea"
                className="inline-flex items-center justify-center rounded-full border border-border bg-muted/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50"
              >
                Recuperación tras cesárea
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ---------- 4. MOVIMIENTO Y EJERCICIO (adaptado al contexto) ---------- */}
      <div className="mt-6 space-y-6" aria-label="Movimiento y recuperación">
        {showVaginal && (
          <>
            <SectionCard
              accent
              title="Movimiento tras parto vaginal: progresión orientativa"
              body="Después de un parto vaginal, la vuelta al movimiento suele ser gradual: primero movilidad y paseos suaves, después reconexión del suelo pélvico y fuerza progresiva, y más adelante cardio progresivo si no hay dolor, pérdidas ni sensación de peso. Esto no es una prescripción: la progresión depende de tu evolución y del visto bueno profesional."
              list={['Movilidad y paseos suaves primero', 'Suelo pélvico: reconexión gradual', 'Fuerza progresiva y después cardio progresivo']}
            />
            <SectionCard
              title="Vuelta gradual a la actividad física"
              body="Aumentar poco a poco tiempo e intensidad, descansar entre esfuerzos y pausar ante dolor, sangrado que aumenta, pérdidas o peso pélvico son criterios más útiles que un calendario fijo. La fisioterapia de suelo pélvico o la matrona pueden ayudar a decidir el momento de intensificar."
              list={['Aumentar tiempo antes que intensidad', 'Pausar ante dolor, pérdidas o peso', 'Visto bueno profesional antes de impactos']}
            />
          </>
        )}

        {showCesarea && (
          <>
            <SectionCard
              accent
              title="Movimiento tras cesárea: progresión orientativa"
              body="Después de una cesárea, la progresión suele empezar con movilidad suave (paseos cortos, cambios de postura), respetando la cicatrización de la pared abdominal y la incisión. La fuerza progresiva y el cardio progresivo llegan después, de forma gradual y sin forzar el abdomen. Los plazos son orientativos: dependen de tu evolución y de las indicaciones de tu equipo sanitario."
              list={['Movilidad progresiva y paseos cortos', 'Respetar la cicatrización abdominal', 'Fuerza y cardio progresivos, sin forzar']}
            />
            <SectionCard
              title="Actividad física progresiva sin plazos rígidos"
              body="No existen semanas universales del tipo «a las X semanas puedes hacer X». Algunas recuperaciones avanzan rápido y otras necesitan más tiempo. Aumentar poco a poco, evitar ejercicios que eleven la presión abdominal o provoquen dolor en la incisión, y consultar ante dudas son criterios generales prudentes."
              list={['Sin plazos rígidos universales', 'Evitar forzar la zona abdominal', 'Consultar ante dolor, sangrado o dudas']}
            />
          </>
        )}

        {!showVaginal && !showCesarea && (
          <SectionCard
            accent
            title="Movimiento y recuperación"
            body="En general, el posparto avanza de la movilidad suave a la fuerza progresiva y después al cardio progresivo, con atención al suelo pélvico y, tras cesárea, a la pared abdominal y la incisión. Elige arriba tu situación para ver una progresión contextual, o consulta las guías específicas. En todos los casos, el ritmo lo marcan tus sensaciones y tu equipo sanitario."
            list={['Movilidad primero, fuerza después', 'Atención al suelo pélvico', 'Progresión individual, sin prisas']}
          />
        )}
      </div>

      {/* ---------- 5. CUÁNDO CONSULTAR + FUENTES ---------- */}
      <div className="mt-6 space-y-6">
        <SectionCard
          accent
          title="Cuándo consultar"
          body="Pide atención pronta ante fiebre, sangrado muy abundante o con mal olor, dolor intenso o que aumenta, enrojecimiento o secreción de la herida o del periné, dolor de cabeza intenso, dificultad para respirar, dolor en las piernas, tristeza profunda persistente o dificultad para el día a día. Ante cualquier duda, consulta antes que esperar."
          list={['Fiebre, dolor intenso o sangrado preocupante', 'Signos de infección en herida o periné', 'Malestar emocional persistente']}
        />

        <section aria-label="Fuentes" className="scroll-mt-24 rounded-2xl border border-border bg-muted/40 p-6">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Fuentes</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <a href="https://www.who.int/es/news-room/fact-sheets/detail/maternal-health" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                Organización Mundial de la Salud (OMS) — salud materna y posparto
              </a>
            </li>
            <li>
              <a href="https://www.nhs.uk/conditions/baby/support-and-services/baby-and-you/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                NHS — recuperación tras el parto y cuidado del recién nacido
              </a>
            </li>
            <li>
              <a href="https://www.acog.org/womens-health/infographics/postpartum-care" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                ACOG — cuidado posparto (información para pacientes)
              </a>
            </li>
            <li>
              <a href="https://sego.es/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                Sociedad Española de Ginecología y Obstetricia (SEGO)
              </a>
            </li>
            <li>
              <a href="https://www.nice.org.uk/guidance/ng194" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                NICE NG194 — cuidado postnatal (guía clínica)
              </a>
            </li>
          </ul>
        </section>

        <p className="text-xs leading-relaxed text-muted-foreground">
          La selección de tipo de parto solo muestra contenido contextual. No diagnostica, no
          decide si una actividad es segura para ti y no sustituye las indicaciones de tu equipo
          sanitario. Futura herramienta prevista (no incluida en esta fase):{' '}
          <span className="font-mono">/herramientas/recuperacion-posparto</span>.
        </p>
      </div>
    </div>
  )
}
