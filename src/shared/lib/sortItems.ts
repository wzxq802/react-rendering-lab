import type { Item, ItemPriority, SortState } from '@/shared/types/item'

const PRIORITY_WEIGHT: Record<ItemPriority, number> = {
  low: 1,
  medium: 2,
  high: 3,
}

export function sortItems(items: Item[], sort: SortState): Item[] {
  const sorted = [...items]

  sorted.sort((a, b) => {
    let comparison = 0

    switch (sort.field) {
      case 'title':
        comparison = a.title.localeCompare(b.title)
        break
      case 'createdAt':
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        break
      case 'priority':
        comparison = PRIORITY_WEIGHT[a.priority] - PRIORITY_WEIGHT[b.priority]
        break
    }

    return sort.order === 'asc' ? comparison : -comparison
  })

  return sorted
}
