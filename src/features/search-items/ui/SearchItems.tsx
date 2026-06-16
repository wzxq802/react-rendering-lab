import { Input } from '@/shared/ui/Input'

type SearchItemsProps = {
  query: string
  onQueryChange: (query: string) => void
}

export function SearchItems({ query, onQueryChange }: SearchItemsProps) {
  return (
    <Input
      label="Search"
      name="search"
      placeholder="Search by title or description..."
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
    />
  )
}
