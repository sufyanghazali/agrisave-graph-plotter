import React from 'react';
import useData from '../hooks/useData';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import GraphContainer from './GraphContainer';

const Dashboard = ({ user }) => {
    const sensorData = useData("hi");
    // get a list of sensors - doesnt look like theres a query for that
    // const [selectedSensor, setSelectedSen] = useState();
    // const [sensors, setSensors] = useState([]);


    return (sensorData) ?
        <div>
            <h1>Welcome {user.username}</h1>
            <GraphContainer sensor={sensorData} />
            <AmplifySignOut />
        </div>
        :
        <div>
            Loading
        </div>
}

export default Dashboard;