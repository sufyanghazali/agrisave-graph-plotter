import React from 'react';
import Graph from './Graph';
import '../../css/graph.css';

const GraphContainer = ({ sensor, forecast }) => {

    console.log("GraphContainer rendering");

    return (
        <div className="graph-container">
            <h2>{sensor.items[0].serialNumber}</h2>
            <div className="graphs">
                <Graph data={sensor.items} yAttribute="deviceTemp" forecast={forecast} />
                <Graph data={sensor.items} yAttribute="deviceMos" forecast={forecast} />
            </div>
        </div>
    );
}

export default GraphContainer;