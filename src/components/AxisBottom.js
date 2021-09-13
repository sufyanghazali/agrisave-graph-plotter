import React from 'react';

const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset }) => {

    console.log(xScale.ticks());
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
    // return ({xScale.ticks().map(val => (
    //     <g
    //         key={val}
    //         transform={`translate(${ xScale(val) }, 0)`}
    //     >
    //         <line
    //             className="tick"
    //             y2={innerHeight} />
    //         <text
    //             className="tick-text"
    //             y={innerHeight + tickOffset}
    //             style={{ textAnchor: "middle" }}
    //             dy="0.71em"
    //         >{val}</text>
    //     </g>
    // ))})
}

export default AxisBottom;