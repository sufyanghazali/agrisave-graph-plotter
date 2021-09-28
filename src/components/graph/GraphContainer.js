import React from 'react';
import Graph from './Graph';

const GraphContainer = ({sensor}) => {
    return (
        <div>
            <h2>{sensor.items[0].serialNumber}</h2>
            <Graph data={sensor.items} />
        </div>
    )
}  

export default GraphContainer;