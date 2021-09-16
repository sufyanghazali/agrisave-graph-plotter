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
            {/* {
                data.map(d => (
                    <circle
                        cx={xScale(xValue(d))}
                        cy={yScale(yValue(d))}
                        r={circleRadius}
                    >
                        <title>{`${ toolTipFormat(yValue(d)) }\xB0C`}</title>
                    </circle>
                ))
            } */}
        </g>
    );
}

export default Marks;