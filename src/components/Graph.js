import React from 'react';
import * as d3 from "d3";

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // need ref for d3 to select
    }

    componentDidUpdate() {
        if (this.props.data.length !== 0)
            this.drawChart();
    }

    drawChart() {
        console.log("yeet yeet");
        const data = this.formatData();

        const margin = { top: 10, right: 30, bottom: 30, left: 60 },
            width = 700 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // create svg element
        const svg = d3.select(this.myRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${ margin.left },${ margin.top })`);

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => {
                console.log(d.date);
                return d.date;
            }))
            .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear()
            // .domain(d3.extent(data, d => d.temp))
            .domain([0, 100])
            .range([height, 0]);

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function(d) { return x(d.date) })
                .y(function(d) { return y(d.temp) })
            );
    }

    formatData() {
        const sensorData = this.props.data.map(info => {
            return {
                temp: info.deviceTemp,
                date: info.unixTimeStamp
            }
        });

        return sensorData;
    }

    render() {
        return (
            <div ref={this.myRef}></div>
        );
    }
}

export default Graph;