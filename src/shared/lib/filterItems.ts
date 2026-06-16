import type { Item, ItemFilters } from '@/shared/types/item'

export function filterItems(items: Item[], filters: ItemFilters): Item[] {
  const { status, priority } = filters

  return items.filter((item) => {
    const matchesStatus = status.length === 0 || status.includes(item.status)
    const matchesPriority =
      priority.length === 0 || priority.includes(item.priority)

    return matchesStatus && matchesPriority
  })
}
