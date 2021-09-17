import React from 'react';
import { line } from 'd3-shape';


const Marks = ({ data, xScale, yScale, xValue, yValue, toolTipFormat, circleRadius }) => {
    return (
        <g className="mark">
            <path
                className="marker-line"
                d={line()
                    .x(d => xScale(xValue(d)))
                    .y(d => yScale(yValue(d)))(data)
                }
            />
        </g>
    );
}

export default Marks;