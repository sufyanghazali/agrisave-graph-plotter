import React, { useEffect, useState } from 'react';
import Amplify, { API } from 'aws-amplify';
import * as queries from './graphql/queries';

import Graph from './components/Graph';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [sensorData, setSensorData] = useState([]);

  // get a list of sensors - doesnt look like theres a query for that
  // const [selectedSensor, setSelectedSen] = useState();
  // const [sensors, setSensors] = useState([]);

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

  // async function getSensors() {
  //   // fetch a list
  // }


  return (
    <div>
      There should be a graph here
      <Graph data={sensorData} />
    </div>
  )
}

export default App;
