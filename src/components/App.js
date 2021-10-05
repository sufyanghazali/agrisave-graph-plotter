import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Amplify from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"
import awsconfig from '../aws-exports';

import NavigationBar from './navbar/NavigationBar';
import Dashboard from './Dashboard';
import LandingPage from "./landing/LandingPage";
import LoginPage from "./landing/LoginPage";

Amplify.configure(awsconfig);

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [authState]);

  return (
    <Router>
      <NavigationBar user={user} />

      <Switch>
        <Route exact path="/">
          {(authState === AuthState.SignedIn && user) ?
            <Dashboard />
            :
            <LandingPage />
          }
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <LoginPage />}
        </Route>


      </Switch>

    </Router>
  )
}

export default App;
