import { useEffect, useState } from 'react'
import { MOBILE_BREAKPOINT } from '../utils/constants'

type WindowSizeState = {
    width?: number
    height?: number
    isMobileView: boolean
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeState>({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobileView: window.innerWidth < MOBILE_BREAKPOINT,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
                isMobileView: window.innerWidth <= MOBILE_BREAKPOINT,
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}
