import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router, } from "react-router-dom";
import App from './components/App';

import Amplify from "aws-amplify";
import AWSAppSyncClient from "aws-appsync";
import awsconfig from "./aws-exports";
import gql from 'graphql-tag';

import * as queries from './graphql/queries';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
  }
});

client.query({
  query: gql(queries.queryIotCatalogsBySerialNumberIndex),
  variables: {
    // TODO: serial number should be passed in as argument
    serialNumber: "AGRIM8-SN3302",
  }
}).then(response => console.log(response));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
