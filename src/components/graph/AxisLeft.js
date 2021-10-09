import React from 'react';

const AxisLeft = ({ yScale, innerWidth, tickOffset }) => {

    return (
        yScale.ticks().map(val => (
            <g transform={`translate(0, ${ yScale(val) })`}>
                <line
                    className="tick"
                    x2={innerWidth}
                />
                <text
                    className="tick-text axis-y"
                    x={-tickOffset}
                    dy="0.32em"
                >
                    {val}
                </text>
            </g>
        ))
    );
}

export default AxisLeft;