import React from 'react';
import Graph from './Graph';
import '../../css/graph.css';

const GraphContainer = ({ sensor }) => {
    return (
        <div className="graph-container">
            <h2>{sensor.items[0].serialNumber}</h2>
            <div className="graphs">
                <Graph data={sensor.items} yAttribute="deviceTemp" />
                {/* <Graph data={sensor.items} yAttribute="deviceMos" /> */}
            </div>
        </div>
    )
}

export default GraphContainer;