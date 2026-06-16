import { useState } from 'react'
import type { ItemFilters, ItemPriority, ItemStatus } from '@/shared/types/item'

const EMPTY_FILTERS: ItemFilters = {
  status: [],
  priority: [],
}

export function useFilters(initialFilters: ItemFilters = EMPTY_FILTERS) {
  const [filters, setFilters] = useState<ItemFilters>(initialFilters)

  const toggleStatus = (status: ItemStatus) => {
    setFilters((current) => ({
      ...current,
      status: toggleValue(current.status, status),
    }))
  }

  const togglePriority = (priority: ItemPriority) => {
    setFilters((current) => ({
      ...current,
      priority: toggleValue(current.priority, priority),
    }))
  }

  return {
    filters,
    toggleStatus,
    togglePriority,
    reset: () => setFilters(EMPTY_FILTERS),
  }
}

function toggleValue<T extends string>(values: T[], value: T): T[] {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value]
}
