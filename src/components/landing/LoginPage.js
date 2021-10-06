import React from "react";
import { AmplifyAuthenticator, AmplifyConfirmSignUp } from "@aws-amplify/ui-react";

const LoginPage = ({ authState }) => {
    return (
        <AmplifyAuthenticator>
            {
                authState === "confirmSignUp" &&
                <AmplifyConfirmSignUp
                    headerText="My Custom Confirm Sign In Text"
                    slot="confirm-sign-in">
                </AmplifyConfirmSignUp>
            }

        </AmplifyAuthenticator>
    )
}

export default LoginPage;