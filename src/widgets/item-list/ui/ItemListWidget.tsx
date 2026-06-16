import { ItemCard } from '@/entities/item'
import { FilterItems, useFilters } from '@/features/filter-items'
import { SearchItems, useSearchQuery } from '@/features/search-items'
import { SortItems, useSort } from '@/features/sort-items'
import { Button } from '@/shared/ui/Button'
import { useItemList } from '../model/useItemList'
import { useDebouncedValue } from '@/shared/lib/useDebouncedValue'



export function ItemListWidget() {
  const { query, setQuery, reset: resetSearch } = useSearchQuery()
  const debouncedQuery = useDebouncedValue(query, 250)
  const { sort, setField, setOrder, reset: resetSort } = useSort()
  const {
    filters,
    toggleStatus,
    togglePriority,
    reset: resetFilters,
  } = useFilters()

  const { items, total, shown } = useItemList({ query: debouncedQuery, filters, sort })

  const handleResetAll = () => {
    resetSearch()
    resetSort()
    resetFilters()
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Items</h1>
          <p className="mt-1 text-sm text-slate-500" aria-live="polite">
            Showing {shown} of {total}
          </p>
        </div>
        <Button variant="secondary" onClick={handleResetAll}>
          Clear all
        </Button>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          <SearchItems query={query} onQueryChange={setQuery} />
          <SortItems
            sort={sort}
            onFieldChange={setField}
            onOrderChange={setOrder}
          />

          {items.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              No items match your search or filters.
            </p>
          ) : (
            <ul className="grid gap-3">
              {items.map((item) => (
                <li key={item.id}>
                  <ItemCard item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside>
          <FilterItems
            filters={filters}
            onStatusToggle={toggleStatus}
            onPriorityToggle={togglePriority}
            onReset={resetFilters}
          />
        </aside>
      </div>
    </section>
  )
}
