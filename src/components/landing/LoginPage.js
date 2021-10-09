import React from "react";
import { AmplifyAuthenticator, AmplifyConfirmSignUp } from "@aws-amplify/ui-react";

const LoginPage = ({ authState }) => {
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

export default LoginPage;