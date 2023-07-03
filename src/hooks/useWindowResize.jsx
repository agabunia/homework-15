import { useEffect, useState } from "react"

const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener
    }, [])

    return {width}
}

export default useWindowResize