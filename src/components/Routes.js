import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthState } from "@aws-amplify/ui-components";
import { Redirect } from "react-router";

import Dashboard from "./Dashboard";
import LandingPage from "./landing/LandingPage";
import Login from "./landing/Login";

const Routes = ({ user, isAuthenticated, handleAuthStateChange }) => {
    return (
        <Switch>
            <Route exact path="/">
                {(isAuthenticated && user) ? <Dashboard /> : <LandingPage />}
            </Route>
            <Route path="/login">
                {(isAuthenticated && user) ? <Redirect to="/" /> : <Login handleAuthStateChange={handleAuthStateChange} />}
            </Route>
        </Switch>
    )
}

export default Routes;