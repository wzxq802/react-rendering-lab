import { useMemo } from 'react'
import { filterItems } from '@/shared/lib/filterItems'
import { MOCK_ITEMS } from '@/shared/lib/mockItems'
import { searchItems } from '@/shared/lib/searchItems'
import { sortItems } from '@/shared/lib/sortItems'
import type { ItemFilters, SortState } from '@/shared/types/item'

type UseItemListParams = {
  query: string
  filters: ItemFilters
  sort: SortState
}

export function useItemList({ query, filters, sort }: UseItemListParams) {
  const items = useMemo(() => {
    const searched = searchItems(MOCK_ITEMS, query)
    const filtered = filterItems(searched, filters)
    return sortItems(filtered, sort)
  }, [query, filters, sort])

  return {
    items,
    total: MOCK_ITEMS.length,
    shown: items.length,
  }
}
