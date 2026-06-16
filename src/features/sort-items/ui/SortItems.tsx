import type { SortField, SortOrder, SortState } from '@/shared/types/item'
import { SORT_FIELD_OPTIONS } from '@/shared/config/sortOptions'
import { Select } from '@/shared/ui/Select'

type SortItemsProps = {
  sort: SortState
  onFieldChange: (field: SortField) => void
  onOrderChange: (order: SortOrder) => void
}

const ORDER_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]

export function SortItems({ sort, onFieldChange, onOrderChange }: SortItemsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Select
        label="Sort by"
        name="sort-field"
        value={sort.field}
        options={SORT_FIELD_OPTIONS}
        onChange={onFieldChange}
      />
      <Select
        label="Order"
        name="sort-order"
        value={sort.order}
        options={ORDER_OPTIONS}
        onChange={onOrderChange}
      />
    </div>
  )
}
