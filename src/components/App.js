import React, { useEffect, useState } from 'react';
import { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import NavigationBar from './navbar/NavigationBar';
import Routes from "./Routes"

import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
console.log(awsExports);
const config = {
  ...awsExports, "aws_appsync_graphqlEndpoint": "https://5rf33fjoi5c3nmrvjmh3sie5im.appsync-api.ap-southeast-2.amazonaws.com/graphql",
  "aws_appsync_region": "ap-southeast-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-iordxcjbk5h5ng2luvpsnkx27e"
}
Amplify.configure(config);

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function onLoad() {
      try {
        const session = await Auth.currentSession();
        setAuthenticated(true); // this will only run if ^ didn't throw error
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (error) {
        if (error !== "No current user")
          console.log(error);
      }
    }
    onLoad();
  }, []);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [authState, user]);

  const handleAuthStateChange = ((nextAuthState, authData) => {
    if (nextAuthState === AuthState.SignedIn) {
      setUser(authData);
      setAuthenticated(true);
    }
  });

  return (
    <div className="App">
      <NavigationBar user={user} isAuthenticated={isAuthenticated} />
      <Routes user={user} isAuthenticated={isAuthenticated} handleAuthStateChange={handleAuthStateChange} />
    </div>
  );
}

export default App;
