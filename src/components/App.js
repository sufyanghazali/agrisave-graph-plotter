import React, { useEffect, useState } from 'react';

import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"
import { AppContext } from "../lib/contextLib";

import NavigationBar from './navbar/NavigationBar';
import Routes from "./Routes"


import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);


const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      userHasAuthenticated(true);
    });
  }, [authState, user]);

  return (
    <div className="App">
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <NavigationBar user={user} />
        <Routes />
      </AppContext.Provider>
    </div>
    /* <Switch>
  <Route exact path="/">
    {(authState === AuthState.SignedIn && user) ? <Dashboard /> : <LandingPage />
    }
  </Route>
  <Route path="/login">
    {(authState === AuthState.SignedIn && user) ? <Redirect to="/" /> : <LoginPage authState={authState} />}
  </Route>
</Switch> */
  );
}

export default App;
