import React from 'react';

const Graph = ({ message, sensorData }) => {
    return (
        <div>
            {message}
            {console.log(sensorData)}
        </div>
    )
}

export default Graph;