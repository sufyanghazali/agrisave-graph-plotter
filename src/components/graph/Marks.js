import React from 'react';
import { line } from 'd3-shape';


const Marks = ({ data, xScale, yScale, xValue, yValue, toolTipFormat, tag, onHover }) => {

    return (
        <>
            <g className="mark">
                <path
                    className={`${ tag } marker-line`}
                    d={line()
                        .x(d => xScale(xValue(d)))
                        .y(d => yScale(yValue(d)))(data)
                    }
                />
            </g>
            {data.map((d, i) => (
                <circle
                    cx={xScale(xValue(d))}
                    cy={yScale(yValue(d))}
                    r={10}
                    onMouseEnter={() => {
                        onHover(data[i])
                    }}
                ></circle>
            ))}
        </>
    );
}

export default Marks;