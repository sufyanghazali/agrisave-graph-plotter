import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components"
import awsconfig from '../aws-exports';

import Dashboard from './Dashboard';


Amplify.configure(awsconfig);

const App = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ?
    <Dashboard user={user} /> : <AmplifyAuthenticator />
}

export default App;
