import React from 'react';
import Graph from './Graph';
import '../../css/graph.css';
import { useRef } from 'react';
import useContainerDimensions from "../../hooks/useContainerDimensions";

const GraphContainer = ({ data, forecast, label, symbol }) => {
    const ref = useRef();
    const { width, height } = useContainerDimensions(ref);

    console.log(width);
    console.log(height);
    return (
        <div className="graph-container" ref={ref}>
            <span className="font-medium text-xl mt-6 mb-4 inline-block">{label}</span>
            <Graph data={data} forecast={forecast} width={width} height={height} symbol={symbol} />
        </div>
    );
}

export default GraphContainer;