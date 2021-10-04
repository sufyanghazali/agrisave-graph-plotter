import { useState, useEffect } from 'react';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';

const useData = () => {
    const [sensorData, setSensorData] = useState();

    // passing in argument works. should pass in sensor serial number
    // console.log(`Testing useData argument: ${message}`); 

    useEffect(() => {
        async function getSensorData() {
            
        }
        getSensorData();
    }, []);

    return sensorData;
}

export default useData;