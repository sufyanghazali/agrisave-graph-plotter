import React from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

import '../../css/navbar.css';
import {
    Link
} from "react-router-dom";

const NavigationBar = ({ user, isAuthenticated }) => {
    return (
        <nav className="navbar p-4 flex shadow">
            <div className="navbar-logo">
                <a href="/">
                    {/* <a href="/" rel="home" aria-current="page"> */}
                    <img width="160" height="30" src="/agriweiss-logo.png" alt="Agriweiss" sizes="(max-width: 160px) 100vw, 160px"></img>
                    {/* </a> */}
                </a>
            </div>
            <div className="navbar-secondary">
                {(user && isAuthenticated) ?
                    <div className="flex items-center">
                        <div className="font-medium text-lg p-4 mr-4">
                            {user.username}
                        </div>
                        < AmplifySignOut />
                    </div>
                    :
                    <Link to="/login" history="/">
                        <button className="bg-awGreen px-6 py-3 text-white font-medium rounded">Log in</button>
                    </Link>
                }
            </div>

        </nav>
    );
}

export default NavigationBar;