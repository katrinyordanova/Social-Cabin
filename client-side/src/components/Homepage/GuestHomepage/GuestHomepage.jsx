import React from 'react';
import './GuestHomepage.scss';
import Link from '../../links/Link';

export default function GuestHomepage() {
    return <div className="guest-homepage">
        <div className="guest-homepage__title">
            <h1>Hello and welcome to Social Penguin!</h1>
        </div>
        <div className="guest-homepage__options">
            <div className="guest-homepage__options__login">
                <p>Have a profile?</p>
                <Link to="/login">Login</Link>
            </div>
            <div className="guest-homepage__options__register">
                <p>Don't have one?</p>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
}