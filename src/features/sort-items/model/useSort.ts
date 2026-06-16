import { useState } from 'react'
import type { SortField, SortOrder, SortState } from '@/shared/types/item'

const DEFAULT_SORT: SortState = {
  field: 'createdAt',
  order: 'desc',
}

export function useSort(initialSort: SortState = DEFAULT_SORT) {
  const [sort, setSort] = useState<SortState>(initialSort)

  const setField = (field: SortField) => {
    setSort((current) => ({ ...current, field }))
  }

  const setOrder = (order: SortOrder) => {
    setSort((current) => ({ ...current, order }))
  }

  return {
    sort,
    setField,
    setOrder,
    reset: () => setSort(DEFAULT_SORT),
  }
}
