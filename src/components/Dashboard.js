import React from 'react';
import useData from '../hooks/useData';
import GraphContainer from './GraphContainer';

const Dashboard = () => {
    const sensorData = useData();
    const weatherData = useWeather();
    
    // get a list of sensors - doesnt look like theres a query for that
    // const [selectedSensor, setSelectedSen] = useState();
    // const [sensors, setSensors] = useState([]);

    return (sensorData) ?
        <div className="dashboard">
            <GraphContainer sensor={sensorData} width={1000} />
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;