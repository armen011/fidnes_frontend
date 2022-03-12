import { useMemo } from 'react'
import { useLocation } from 'react-router'

export const useQuery = (queryName) => {
  const { search } = useLocation()
  return useMemo(
    () => new URLSearchParams(search).get(queryName),
    [search, queryName]
  )
}
