import React from 'react';

const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset }) => {
    return (
        xScale.ticks().map(val => (
            <g
                className="axis-x"
                transform={`translate(${ xScale(val) }, 0)`}>
                <line className="tick" y2={innerHeight} />
                <text className="tick-text"
                    y={innerHeight + tickOffset}
                >{tickFormat(val)}</text>
            </g>

        ))
    )
}

export default AxisBottom;