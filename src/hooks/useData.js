import { useState, useEffect } from 'react';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';

const useData = (message) => {
    const [sensorData, setSensorData] = useState(null);

    console.log(`Testing useData argument: ${message}`);

    useEffect(() => {
        async function getSensorData() {
            try {
                // Fetch data from database
                await API.graphql({
                    query: queries.queryIotCatalogsBySerialNumberIndex,
                    variables: {
                        serialNumber: "AGRIM8-SN3302",
                    }
                })
                    .then(res => {
                        console.log(res.data.queryIotCatalogsBySerialNumberIndex);
                        const items = res.data.queryIotCatalogsBySerialNumberIndex.items;
                        items.sort((a, b) => a.unixTimeStamp - b.unixTimeStamp);

                        const test = {
                            data: items,
                            serialNumber: items[0].serialNumber
                        }
                        setSensorData(test);
                    });

            } catch (err) {
                console.log(err);
            }
        }
        getSensorData();
    }, []);

    return sensorData;
}

export default useData;