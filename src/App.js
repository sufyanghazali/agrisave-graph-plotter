import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { queryIotCatalogsBySerialNumberIndex } from './graphql/queries.js';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const sensorData = await API.graphql(graphqlOperation(queryIotCatalogsBySerialNumberIndex));
      console.log(sensorData.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>App</div>
  )
}

export default App;
