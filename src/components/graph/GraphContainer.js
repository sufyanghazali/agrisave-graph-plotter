import React from 'react';
import Graph from './Graph';
import '../../css/graph.css';

const GraphContainer = ({ data, forecast, label, width, height, symbol }) => {

    console.log("GraphContainer rendering");

    return (
        <div className="graph-container">
            <span className="font-medium text-xl mt-6 mb-4 inline-block">{label}</span>
            <Graph data={data} forecast={forecast} width={width} height={height - 100} symbol={symbol} />
        </div>
    );
}

export default GraphContainer;