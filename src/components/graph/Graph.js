import React, { useState, useCallback, useMemo } from 'react';
import { scaleLinear, scaleTime } from "d3";
import '../../css/graph.css';

// import Dropdown from './Dropdown';
import Marks from './Marks';
import XAxis from './XAxis';
import YAxis from './YAxis';
// import VoronoiOverlay from './VoronoiOverlay';

const margin = {
    top: 10,
    right: 70,
    bottom: 50,
    left: 60
};
const yAxisLabelOffset = 40;
const tooltipOffset = -7;


const Graph = ({ data, forecast, yLabel, width, height }) => {
    if (height < 300)
        height = 300;

    // FOR WEATHER LINE
    const [activePoint, setActivePoint] = useState(null);

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    console.log("innerHeight", innerHeight)

    // Accessor function to pass in map()
    const xValue = useCallback(d => new Date(d.x), []); // convert time stamp to Date object
    const yValue = useCallback(d => d.y, []);

    // Function to format Date object to "day month"
    // const xAxisTickFormat = timeFormat("%d %b");

    const maxTemp = useCallback(() => {
        const weatherTemp = forecast.map(day => day.y);
        const sensorTemps = data.map(reading => Number(reading.y));
        return Math.max(...weatherTemp, ...sensorTemps);
    },
        [data, forecast]
    );

    const xScale = useMemo(() => scaleTime()
        .domain([xValue(data[0]), xValue(forecast[forecast.length - 1])])
        .range([0, innerWidth])
        .nice(),
        [data, xValue, innerWidth, forecast]
    );

    const yScale = useMemo(() => scaleLinear()
        .domain([yValue(data[0]), maxTemp()])
        .range([innerHeight, 0])
        .nice(),
        [data, maxTemp, yValue, innerHeight]
    );

    const handleHover = useCallback(setActivePoint, [setActivePoint]);

    // const lineGenerator = useMemo(
    //     () => line()
    //         .x(d => xScale(xValue(d)))
    //         .y(d => yScale(yValue(d)))
    //     , [xScale, xValue, yScale, yValue]
    // );

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


export default Graph;