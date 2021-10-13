import React, { Component, useState, useCallback, useMemo } from 'react';
import { scaleLinear, scaleTime } from "d3";
import '../../css/graph.css';

import Marks from './Marks';
import XAxis from './XAxis';
import YAxis from './YAxis';

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg width={width} height={height}>
                <g
                    transform={`translate(${ margin.left }, ${ margin.top })`}
                    onMouseLeave={() => handleHover(null)}
                >
                    <XAxis xScale={xScale} innerHeight={innerHeight} />
                    <YAxis yScale={yScale} innerWidth={innerWidth} />

                    <text
                        textAnchor="middle"
                        transform={`translate(${ -yAxisLabelOffset }, ${ innerHeight / 2 }) rotate(-90)`}>
                        {yLabel}
                    </text>

                    <Marks
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        onHover={handleHover}
                    />
                    <Marks
                        tag="environment"
                        data={forecast}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        onHover={handleHover}
                    />

                    {activePoint ?
                        <text
                            x={xScale(xValue(activePoint))}
                            y={yScale(yValue(activePoint))}
                            dy={tooltipOffset}
                            textAnchor="middle"
                            className="font-medium"
                        >
                            {`${ Math.round(activePoint.y) }`}
                        </text>
                        : null
                    }

                </g>
            </svg>
        )
    }
}