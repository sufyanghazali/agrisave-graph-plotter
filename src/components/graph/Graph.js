import React, { useState, useCallback, useMemo } from 'react';
import { scaleLinear, scaleTime } from "d3";
import '../../css/graph.css';

// import Dropdown from './Dropdown';
import Marks from './Marks';
import XAxis from './XAxis';
import YAxis from './YAxis';
// import VoronoiOverlay from './VoronoiOverlay';


const height = 300;
const width = 700;
const margin = {
    top: 10,
    right: 70,
    bottom: 50,
    left: 60
};
const xAxisLabelOffset = 40;
const yAxisLabelOffset = 40;

const attributes = [
    { value: "deviceMos", label: "Moisture" },
    { value: "deviceTemp", label: "Temperature" }
]

const getLabel = (attribute) => {
    let label = "Attribute not found";
    let i = 0;
    let found = false;

    while (!found && i < attributes.length) {
        if (attribute === attributes[i].value) {
            found = true;
            label = attributes[i].label;
        }
        i++;
    }

    return label;
}



const Graph = ({ data, forecast, yAttribute }) => {
    // FOR WEATHER LINE

    const [activePoint, setActivePoint] = useState(null);

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    // Accessor function to pass in map()
    // I feel like these should be named getValue instead
    const xValue = useCallback(d => new Date(d.unixTimeStamp), []); // convert time stamp to Date object
    const yValue = useCallback(d => d[yAttribute], [yAttribute]);
    const getFutureWeatherX = useCallback(d => new Date(d.dt * 1000), []);
    const getFutureWeatherY = useCallback(d => d.temp.day, []);

    const xAxisLabel = "Time";
    const yAxisLabel = getLabel(yAttribute);

    // Function to format Date object to "day month"
    // const xAxisTickFormat = timeFormat("%d %b");

    const maxTemp = useCallback(() => {
        const weatherTemp = forecast.map(day => day.temp.day);
        const sensorTemps = data.map(reading => Number(reading[yAttribute]));
        return Math.max(...weatherTemp, ...sensorTemps);
    },
        [data, forecast, yAttribute]
    );

    const xScale = useMemo(() => scaleTime()
        .domain([xValue(data[0]), getFutureWeatherX(forecast[forecast.length - 1])])
        .range([0, innerWidth])
        .nice(),
        [data, xValue, innerWidth, forecast, getFutureWeatherX]
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

    console.log(activePoint);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${ margin.left }, ${ margin.top })`}>

                <XAxis xScale={xScale} innerHeight={innerHeight} />
                <YAxis yScale={yScale} innerWidth={innerWidth} />

                <text
                    textAnchor="middle"
                    transform={`translate(${ -yAxisLabelOffset }, ${ innerHeight / 2 }) rotate(-90)`}> {yAxisLabel}</text>
                {/* <text
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle"
                >{xAxisLabel}</text> */}

                <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    toolTipFormat={(yValue) => (Math.round(yValue * 100) / 100).toFixed(1)}
                    onHover={handleHover}
                />
                <Marks
                    tag="environment"
                    data={forecast}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={getFutureWeatherX}
                    yValue={getFutureWeatherY}
                    toolTipFormat={(yValue) => (Math.round(yValue * 100) / 100).toFixed(1)}
                    onHover={handleHover}
                />

                {/* <VoronoiOverlay
                    data={data}
                    onHover={handleHover}
                    innerWidth={innerWidth}
                    innerHeight={innerHeight}
                    lineGenerator={lineGenerator}
                /> */}
                {activePoint ?
                    (

                        <text x={10} y={10}>{`${ (activePoint[yAttribute]) }`}</text>

                    ) : null
                }
            </g>
        </svg>
    )
}


export default Graph;