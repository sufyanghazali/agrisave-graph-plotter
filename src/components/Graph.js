import React from 'react';
import * as d3 from "d3";

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // need ref for d3 to select
    }

    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const data = this.getTemperatures();

        const margin = { top: 10, right: 30, bottom: 30, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // create svg element
        const svg = d3.select(this.myRef.current).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top - margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke","steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line());
   /*     

        svg.selectAll("rect")
            .data(data) // binds data to svg
            .enter() // not really sure what this does. something about a bottleneck
            .append("rect")
            .attr("x", (d, i) => i * (width / data.length))
            .attr("y", (d, i) => height - 10 * d) // calculation to invert the graph
            .attr("width", 20)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");

        svg.append("text")
            .attr("class", "x-label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6) //not sure why -6
            .text("some x label")

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            // .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("y label");

*/
    }

    getTemperatures() {
        return this.props.data.map(info => info.deviceTemp);
    }

    render() {
        return (
            <div ref={this.myRef}></div>
        )
    }
}

export default Graph;