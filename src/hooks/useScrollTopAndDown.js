import { useCallback, useEffect, useState } from 'react'

export const useScrollTopAndDown = () => {
  const [isOpened, setIsOpened] = useState(true)

  const handleScroll = useCallback(() => {
    setIsOpened(!window.pageYOffset)
  }, [])

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll)
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return isOpened
}
