import React from 'react';
import useData from '../hooks/useData';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Graph from './Graph';

const Dashboard = ({ user }) => {
    const sensorData = useData("hi");
    // get a list of sensors - doesnt look like theres a query for that
    // const [selectedSensor, setSelectedSen] = useState();
    // const [sensors, setSensors] = useState([]);


    return (sensorData) ?
        <div>
            <h1>Yeet yeet! </h1>
            <h2>What's up {user.username}?</h2>
            <Graph data={sensorData.data} />
            <AmplifySignOut />
        </div> 
        :
        <div>
            Loading
        </div>
}

export default Dashboard;