import { useEffect, useRef } from 'react';

const XAxis = ({ xScale }) => {
    const ref = useRef();

    useEffect(() => {
        const xAxisG = select(ref.current); // x axis group element
    }, [])

    return (
        <g ref={ref}>

        </g>
    )
}

export default XAxis;