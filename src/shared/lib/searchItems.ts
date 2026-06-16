import type { Item } from '@/shared/types/item'

export function searchItems(items: Item[], query: string): Item[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return items

  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(normalized) ||
      item.description.toLowerCase().includes(normalized),
  )
}
