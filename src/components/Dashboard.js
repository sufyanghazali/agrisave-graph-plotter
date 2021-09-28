import React from 'react';
import useData from '../hooks/useData';
import GraphContainer from './graph/GraphContainer';
import WeatherContainer from './weather/WeatherContainer';
import Map from './map/Map';

const Dashboard = () => {
    const sensorData = useData();
    // get a list of sensors - doesnt look like theres a query for that
    // const [selectedSensor, setSelectedSen] = useState();
    // const [sensors, setSensors] = useState([]);

    return (sensorData) ?
        <div className="dashboard">
            <div className="sensor-visual">
                <WeatherContainer sensor={sensorData.items[0]} />
                <Map sensor={sensorData.items[0]} zoom={16} />
            </div>
            <GraphContainer sensor={sensorData} />
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;