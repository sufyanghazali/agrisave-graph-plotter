import React from 'react';
import Dropdown from './Dropdown';
import '../../css/navbar.css';

const NavigationBar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/" rel="home" aria-current="page">
                    <img width="160" height="30" src="https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-160x30.png" alt="agrisavetech.com" srcSet="https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-160x30.png 160w, https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6-300x56.png 300w, https://agrisave.com.au/wp-content/uploads/2019/09/Agrisavelogo6.png 690w" sizes="(max-width: 160px) 100vw, 160px"></img></a>
            </div>
            <div className="navbar-secondary">
                {user && <Dropdown user={user} />}
            </div>

        </nav>
    );
}

export default NavigationBar;