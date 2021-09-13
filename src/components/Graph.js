import React, { useState } from 'react';
import { scaleLinear, scaleTime, max, timeFormat, extent } from "d3";

import Dropdown from './Dropdown';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';
import Marks from './Marks';

const height = 500;
const width = 1000;
const margin = {
    top: 10,
    right: 70,
    bottom: 30,
    left: 60
};
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 60;

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
    console.log(data);
    // construct attributes from data properties


    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const initialXAttribute = "deviceTemp";
    const [xAttribute, setXAttribute] = useState(initialXAttribute);

    // Accessor function to pass in map()
    // I feel like these should be named getValue instead
    const xValue = d => new Date(d.unixTimeStamp); // convert time stamp to Date object
    const yValue = d => d[xAttribute];

    const xAxisLabel = "Time";
    const yAxisLabel = getLabel(xAttribute);

    // Function to format Date object to "day month"
    const xAxisTickFormat = timeFormat("%d %b");

    const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice();

    console.log(xAttribute);

    return (
        <>
            <label htmlFor="x-select">X:</label>
            <Dropdown
                options={attributes}
                id="x-select"
                selectedValue={xAttribute}
                onSelectedValueChange={setXAttribute}
            />
            <svg width={width} height={height}>
                <g transform={`translate(${ margin.left }, ${ margin.top })`}>
                    <AxisBottom
                        xScale={xScale}
                        innerHeight={innerHeight}
                        tickFormat={xAxisTickFormat}
                        tickOffset={20} />
                    <AxisLeft
                        yScale={yScale}
                        innerWidth={innerWidth}
                        tickOffset={10}
                    />
                    <text>{yAxisLabel}</text>
                    <Marks data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        toolTipFormat={(yValue) => (Math.round(yValue * 100) / 100).toFixed(1)}
                        circleRadius={15} />
                </g>
            </svg>
        </>
    )
}


export default Graph;