import useData from './hooks/useData';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

import Graph from './components/Graph';

Amplify.configure(awsExports);

const App = () => {

  const sensorData = useData();
  // get a list of sensors - doesnt look like theres a query for that
  // const [selectedSensor, setSelectedSen] = useState();
  // const [sensors, setSensors] = useState([]);

  if (!sensorData) {
    return (
      <div>
        Loading
      </div>
    )
  }


  return (
    <div>
      <Graph data={sensorData} />
    </div>
  )

  // async function getSensors() {
  //   // fetch a list
  // }

}

export default App;
