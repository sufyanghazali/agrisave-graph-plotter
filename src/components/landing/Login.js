import React from "react";
import { AmplifyAuthenticator, AmplifyConfirmSignUp } from "@aws-amplify/ui-react";
import { useAppContext } from "../../lib/contextLib";

const Login = ({ authState }) => {
    const { userHasAuthenticated } = useAppContext();

    switch (authState) {
        case 'confirmSignUp':
            return (
                <AmplifyAuthenticator>
                    {authState === "confirmSignUp" &&
                        <AmplifyConfirmSignUp
                            headerText="My Custom Confirm Sign In Text"
                            slot="confirm-sign-in">
                        </AmplifyConfirmSignUp>
                    }
                </AmplifyAuthenticator>
            );
        default:
            return <AmplifyAuthenticator />
    }

}

export default Login;