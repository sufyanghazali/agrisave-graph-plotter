import { useEffect, useRef } from 'react';
import { select, axisBottom,timeFormat } from 'd3';

const XAxis = ({ xScale, innerHeight }) => {
    const ref = useRef();

    useEffect(() => {
        const xAxisG = select(ref.current); // x axis group element
        const xAxis = axisBottom(xScale)
            .tickSize(-innerHeight)
            .tickPadding(10)
        xAxisG.call(xAxis);
        

        // abbreviate month names in tick labels
        xAxisG.selectAll(".tick").each(function(d) {
            if (this.textContent === timeFormat("%B")(d)) {
                select(this).select("text").text(timeFormat("%b")(d))
            }
        })
    }, [xScale, innerHeight])

    return (
        <g ref={ref} transform={`translate(0,${ innerHeight })`} className="x-axis" />
    )
}

export default XAxis;