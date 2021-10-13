import React from 'react';
import Dropdown from './Dropdown';
import '../../css/navbar.css';
import {
    Link
} from "react-router-dom";

const NavigationBar = ({ user, isAuthenticated }) => {
    return (
        <nav className="navbar shadow">
            <div className="navbar-logo">
                <a href="/">
                    {/* <a href="/" rel="home" aria-current="page"> */}
                    <img width="160" height="30" src="/agriweiss-logo.png" alt="Agriweiss" sizes="(max-width: 160px) 100vw, 160px"></img>
                    {/* </a> */}
                </a>
            </div>
            <div className="navbar-secondary">
                {(user && isAuthenticated) ? <Dropdown user={user} /> :
                    <Link to="/login" history="/">
                        <button className="bg-awGreen px-6 py-3 text-white font-medium rounded">Log in</button>
                    </Link>
                }
            </div>

        </nav>
    );
}

export default NavigationBar;