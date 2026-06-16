import type { ItemFilters } from '@/shared/types/item'
import {
  ITEM_PRIORITIES,
  ITEM_STATUSES,
} from '@/shared/types/item'
import { Button } from '@/shared/ui/Button'

type FilterItemsProps = {
  filters: ItemFilters
  onStatusToggle: (status: ItemFilters['status'][number]) => void
  onPriorityToggle: (priority: ItemFilters['priority'][number]) => void
  onReset: () => void
}

export function FilterItems({
  filters,
  onStatusToggle,
  onPriorityToggle,
  onReset,
}: FilterItemsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-900">Filters</h2>
        <Button variant="ghost" onClick={onReset}>
          Reset
        </Button>
      </div>

      <fieldset className="space-y-2">
        <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
          Status
        </legend>
        <div className="flex flex-wrap gap-2">
          {ITEM_STATUSES.map((status) => (
            <FilterChip
              key={status}
              label={status.replace('_', ' ')}
              active={filters.status.includes(status)}
              onClick={() => onStatusToggle(status)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-4 space-y-2">
        <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
          Priority
        </legend>
        <div className="flex flex-wrap gap-2">
          {ITEM_PRIORITIES.map((priority) => (
            <FilterChip
              key={priority}
              label={priority}
              active={filters.priority.includes(priority)}
              onClick={() => onPriorityToggle(priority)}
            />
          ))}
        </div>
      </fieldset>
    </div>
  )
}

type FilterChipProps = {
  label: string
  active: boolean
  onClick: () => void
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border px-3 py-1 text-sm capitalize transition-colors',
        active
          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
