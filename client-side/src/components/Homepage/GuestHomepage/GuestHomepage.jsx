import React from 'react';
import './GuestHomepage.css';
import Link from '../../Link/Link';

export default function GuestHomepage() {
    return <div className="Homepage">
        <img src="/happy-penguin.gif" alt="happy-penguin"/>
        <div className="Title">
            <h1>Hello there!</h1>
            <h1>Welcome to Social Penguin!</h1>
            <br/>
            <h1>Excited?</h1>
            <h1>Let's get started!</h1>
        </div>
        <div className="HomepageButtons">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
}