import { useState } from 'react'

export function useSearchQuery(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery)

  return {
    query,
    setQuery,
    reset: () => setQuery(''),
  }
}
