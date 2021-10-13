import React, { useEffect, useState } from 'react';
import { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import NavigationBar from './navbar/NavigationBar';
import Routes from "./Routes"

import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
console.log(Amplify);

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
