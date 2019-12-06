import React from 'react';
import './Navigation.css';
import Link from '../Link/Link';

function Navigation() {
    return <nav className="Navigation">
        <ul>
            <div className="LogoAndName">
                <img src="/penguin.png" alt="planet-icon" id="logo" />
                <p>Social Penguin</p>
            </div>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/new-post'>New Post</Link>
            <Link to='/view-profile'>Profile</Link>
            <Link to='/logout'>Logout</Link>
            <Link to='/contacts' id="contacts">Contacts</Link>
            <Link to='/about-us' id="about-us">About us</Link>
        </ul>
    </nav>
}

export default Navigation;