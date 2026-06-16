import type { Item } from '@/entities/item/model/types'
import { Badge } from '@/shared/ui/Badge'
import { memo } from 'react'

const STATUS_TONE = {
  todo: 'neutral',
  in_progress: 'warning',
  done: 'success',
} as const

const PRIORITY_TONE = {
  low: 'neutral',
  medium: 'warning',
  high: 'danger',
} as const

type ItemCardProps = {
  item: Item
}
export const ItemCard = memo(function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
        <div className="flex flex-wrap gap-2">
          <Badge tone={STATUS_TONE[item.status]}>
            {item.status.replace('_', ' ')}
          </Badge>
          <Badge tone={PRIORITY_TONE[item.priority]}>{item.priority}</Badge>
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{item.description}</p>
      <time
        className="mt-3 block text-xs text-slate-400"
        dateTime={item.createdAt}
      >
        {new Date(item.createdAt).toLocaleDateString()}
      </time>
    </article>
  )
})
