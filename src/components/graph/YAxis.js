import { useEffect, useRef } from 'react';
import { select, axisLeft } from 'd3';

const YAxis = ({ yScale, innerWidth }) => {
    const ref = useRef();

    useEffect(() => {
        const yAxisG = select(ref.current);
        const yAxis = axisLeft(yScale)
            .tickSize(-innerWidth)
            .tickPadding(10);
        yAxisG.call(yAxis);
    }, [yScale, innerWidth])

    return (
        <g ref={ref} />
    )
}

export default YAxis;