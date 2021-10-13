import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import LandingPage from "./landing/LandingPage";
import Login from "./landing/Login";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                {/* {(authState === AuthState.SignedIn && user) ? <Dashboard /> : <LandingPage />
                } */}
                <Dashboard />
            </Route>
            <Route path="/login">
                {/* {(authState === AuthState.SignedIn && user) ? <Redirect to="/" /> : <LoginPage authState={authState} />} */}
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes;