import { useState, useEffect } from 'react';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';

const useData = () => {
    const [sensorData, setSensorData] = useState(null);

    useEffect(() => {
        async function getSensorData() {
            try {
                await API.graphql({
                    query: queries.queryIotCatalogsBySerialNumberIndex,
                    variables: {
                        serialNumber: "AGRIM8-SN3302",
                    }
                })
                    .then(res => {
                        const items = res.data.queryIotCatalogsBySerialNumberIndex.items;
                        items.sort((a, b) => a.unixTimeStamp - b.unixTimeStamp);
                        setSensorData(items);
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