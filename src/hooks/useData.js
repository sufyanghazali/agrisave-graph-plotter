import { useState, useEffect } from 'react';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';

const useData = () => {
    const [sensorData, setSensorData] = useState();

    // passing in argument works. should pass in sensor serial number
    // console.log(`Testing useData argument: ${message}`); 

    useEffect(() => {
        async function getSensorData() {
            try {
                // Fetch data from database
                await API.graphql({
                    query: queries.queryIotCatalogsBySerialNumberIndex,
                    variables: {
                        // TODO: serial number should be passed in as argument
                        serialNumber: "AGRIM8-SN3302",
                    }
                })
                    .then(res => {
                        // Query doesn't return data in order
                        const data = res.data.queryIotCatalogsBySerialNumberIndex;
                        // Sort data by time
                        data.items.sort((a, b) => a.unixTimeStamp - b.unixTimeStamp);
                        setCoordinates({
                            lat: +data.items[0].deviceLat,
                            lng: +data.items[0].deviceLon
                        });
                        setSensorData(data);
                    })
            } catch (err) {
                console.log(err);
            }
        }
        getSensorData();
    }, []);

    return sensorData;
}

export default useData;