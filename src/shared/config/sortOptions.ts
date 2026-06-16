import type { SortField } from '@/shared/types/item'

export const SORT_FIELD_OPTIONS: { value: SortField; label: string }[] = [
  { value: 'title', label: 'Title' },
  { value: 'createdAt', label: 'Date' },
  { value: 'priority', label: 'Priority' },
]
