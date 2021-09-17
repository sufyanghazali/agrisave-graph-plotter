import React, { useCallback, useState, useMemo } from 'react';
import { scaleLinear, scaleTime, extent, line } from "d3";

import Dropdown from './Dropdown';
import Marks from './Marks';
import XAxis from './XAxis';
import YAxis from './YAxis';
import VoronoiOverlay from './VoronoiOverlay';

const height = 500;
const width = 1000;
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

const getLabel = (xAttribute) => {
    let label = "Attribute not found";
    let i = 0;
    let found = false;

    while (!found && i < attributes.length) {
        if (xAttribute === attributes[i].value) {
            found = true;
            label = attributes[i].label;
        }
        i++;
    }

    return label;
}

const Graph = ({ data }) => {
    const [activePoint, setActivePoint] = useState(null);

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const initialXAttribute = "deviceTemp";
    const [xAttribute, setXAttribute] = useState(initialXAttribute);

    // Accessor function to pass in map()
    // I feel like these should be named getValue instead
    const xValue = useCallback(d => new Date(d.unixTimeStamp), []); // convert time stamp to Date object
    const yValue = useCallback(d => d[xAttribute], []);

    const xAxisLabel = "Time";
    const yAxisLabel = getLabel(xAttribute);

    // Function to format Date object to "day month"
    // const xAxisTickFormat = timeFormat("%d %b");

    const xScale = useMemo(
        () => scaleTime()
            .domain(extent(data, xValue))
            .range([0, innerWidth])
            .nice(),
        [data, xValue, innerWidth]);

    const yScale = useMemo(
        () => scaleLinear()
            .domain(extent(data, yValue))
            .range([innerHeight, 0])
            .nice(),
        [data, yValue, innerHeight]);

    // const handleHover = useCallback((data) => {
    //     setActivePoint(data);
    // }, [])

    // CAN SHORTEN TO THIS
    const handleHover = useCallback(setActivePoint, []);

    const lineGenerator = useMemo(
        () => line()
            .x(d => xScale(xValue(d)))
            .y(d => yScale(yValue(d)))
        , [xScale, xValue, yScale, yValue]
    );

    return (
        <>
            <div>
                <label htmlFor="x-select">X:</label>
                <Dropdown
                    options={attributes}
                    id="x-select"
                    selectedValue={xAttribute}
                    onSelectedValueChange={setXAttribute}
                />
            </div>

            <svg width={width} height={height}>
                <g transform={`translate(${margin.left}, ${margin.top})`}>

                    <XAxis xScale={xScale} innerHeight={innerHeight} />
                    <YAxis yScale={yScale} innerWidth={innerWidth} />

                    <text
                        textAnchor="middle"
                        transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}> {yAxisLabel}</text>
                    <text
                        x={innerWidth / 2}
                        y={innerHeight + xAxisLabelOffset}
                        textAnchor="middle"
                    >{xAxisLabel}</text>

                    <Marks
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        toolTipFormat={(yValue) => (Math.round(yValue * 100) / 100).toFixed(1)}
                        circleRadius={15}
                    />
                    <VoronoiOverlay
                        data={data}
                        onHover={handleHover}
                        innerWidth={innerWidth}
                        innerHeight={innerHeight}
                        lineGenerator={lineGenerator}
                    />
                    {activePoint ?

                        (
                            <g className="tooltip" transform={`translate(${lineGenerator.x()(activePoint)},${lineGenerator.y()(activePoint)})`}>
                                <circle
                                    r={5}
                                />
                                <text x={-5} y={-7}>{`${(activePoint.deviceTemp)}\u00B0C`}</text>
                            </g>
                        ) : null
                    }


                </g>
            </svg>
        </>
    )
}


export default Graph;