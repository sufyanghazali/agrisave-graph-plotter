import { useEffect, useRef } from 'react';
import { select, axisBottom } from 'd3';

const XAxis = ({ xScale, innerHeight }) => {
    const ref = useRef();

    useEffect(() => {
        const xAxisG = select(ref.current); // x axis group element
        const xAxis = axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickPadding(10);
        xAxisG.call(xAxis);
    }, [xScale, innerHeight])

    return (
        <g ref={ref} transform={`translate(0,${ innerHeight })`} />
    )
}

export default XAxis;