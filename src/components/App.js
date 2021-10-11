import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"

import NavigationBar from './navbar/NavigationBar';
import Dashboard from './Dashboard';
import LandingPage from "./landing/LandingPage";
import LoginPage from "./landing/LoginPage";

import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [authState, user]);

  console.log(user);

  return (
    <Router>
      <NavigationBar user={user} />

      <Switch>
        <Route exact path="/">
          {(authState === AuthState.SignedIn && user) ? <Dashboard /> : <LandingPage />
          }
        </Route>
        <Route path="/login">
          {(authState === AuthState.SignedIn && user) ? <Redirect to="/" /> : <LoginPage authState={authState} />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
