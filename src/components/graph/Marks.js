import React from 'react';
import { line } from 'd3-shape';


const Marks = ({ data, xScale, yScale, xValue, yValue, tag, onHover }) => {

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
            {data.map((d, i) => {
                return (
                    <circle
                        key={i}
                        cx={xScale(xValue(d))}
                        cy={yScale(yValue(d))}
                        r={6}
                        onMouseEnter={() => {
                            onHover(data[i])
                        }}
                        fill="transparent"
                    ></circle>
                )
            }
            )}
        </>
    );
}

export default Marks;