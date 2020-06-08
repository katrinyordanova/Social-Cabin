import React from 'react';
import './GuestHomepage.css';
import Link from '../../links/Link';

export default function GuestHomepage() {
    return <div className="GuestHomepage">
        <div className="GuestHomepageGif">
            {/* <img src="/happy-penguin.gif" alt="happy-penguin"/> */}
        </div>
        {/* <div className="GuestHomepageTitle">
            <h1>Hello there!</h1>
            <h1>Welcome to Social Penguin!</h1>
            <br/>
            <h1>Excited?</h1>
            <h1>Let's get started!</h1>
        </div> */}
        <div className="GuestHomepageButtons">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
}