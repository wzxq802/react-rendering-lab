export const ITEM_STATUSES = ['todo', 'in_progress', 'done'] as const
export type ItemStatus = (typeof ITEM_STATUSES)[number]

export const ITEM_PRIORITIES = ['low', 'medium', 'high'] as const
export type ItemPriority = (typeof ITEM_PRIORITIES)[number]

export type SortField = 'title' | 'createdAt' | 'priority'
export type SortOrder = 'asc' | 'desc'

export type SortState = {
  field: SortField
  order: SortOrder
}

export type ItemFilters = {
  status: ItemStatus[]
  priority: ItemPriority[]
}

export type Item = {
  id: string
  title: string
  description: string
  status: ItemStatus
  priority: ItemPriority
  createdAt: string
}
