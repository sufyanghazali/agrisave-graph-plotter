import React from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

const NavigationBar = ({ user }) => {
    return (
        <nav className="navbar">
            <div>
                <a href="/" class="custom-logo-link" rel="home" aria-current="page"><img width="160" height="30" src="https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-160x30.png" class="custom-logo" alt="agrisavetech.com" srcset="https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-160x30.png 160w, https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-300x56.png 300w, https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6.png 690w" sizes="(max-width: 160px) 100vw, 160px"></img></a>
            </div>
            <div>
                <AmplifySignOut />
            </div>
        </nav>
    );
}

export default NavigationBar;