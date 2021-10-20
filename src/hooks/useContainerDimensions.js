import { useState, useEffect, useCallback } from 'react';

const useContainerDimensions = ref => {
    const getDimensions = useCallback(() => ({
        width: ref.current.offsetWidth - 32, // 32 is padding-x value
        height: 300
        // height: ref.current.offsetHeight
    }), [ref]);

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions());
        }

        if (ref.current) {
            setDimensions(getDimensions());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [ref, getDimensions]);

    return dimensions
}

export default useContainerDimensions;