import { Breadcrumbs } from '@/components/layout'
import { ExpandableGrid, type ExpandableCardItem } from './ExpandableCard'

export interface HubItem extends ExpandableCardItem {
  href: string
}

export function HubLayout({
  eyebrow,
  title,
  intro,
  items,
  breadcrumbLabel,
}: {
  eyebrow: string
  title: string
  intro: string
  items: HubItem[]
  breadcrumbLabel: string
}) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: breadcrumbLabel }]} />
      </div>

      <header className="mb-6 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </header>

      <p className="mb-8 text-sm text-muted-foreground">
        Toca cada tarjeta para desplegar la información aquí mismo, sin cambiar de pantalla.
      </p>

      <ExpandableGrid items={items} />
    </div>
  )
}
