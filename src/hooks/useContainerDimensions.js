import { useState, useEffect, useCallback } from 'react';

const useContainerDimensions = ref => {
    const getDimensions = useCallback(() => {
        console.log(ref.current)
        return {
            width: ref.current.offsetWidth,
            height: 300
        }
    }, [ref]);


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