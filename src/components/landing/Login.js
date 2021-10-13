import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

const Login = ({ handleAuthStateChange }) => {

    return <AmplifyAuthenticator handleAuthStateChange={handleAuthStateChange} />;

}

export default Login;