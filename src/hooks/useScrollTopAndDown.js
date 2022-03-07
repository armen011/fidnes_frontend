import { useCallback, useEffect, useState } from "react"

export const useScrollTopAndDown = (ref) => {
    const [isOpened, setIsOpened] = useState(true)
    const [top, setTop] = useState(0)

    const handleScroll = useCallback(({ srcElement: { scrollTop } }) => {
        if (scrollTop < top || scrollTop === 0) {
            setIsOpened(true)
        } else {
            setIsOpened(false)
        }
        setTop(scrollTop)
    }, [top])

    useEffect(() => {
        const current = ref.current
        if (current) {
            current.addEventListener('scroll', handleScroll)
        }
        return () => {
            current.removeEventListener('scroll', handleScroll)
        }

    }, [ref, handleScroll])

    return isOpened
}
