import React from 'react';
import './Homepage.css';

function Homepage() {
    return <div className="Homepage">
        <img src="/happy-penguin.gif" alt="happy-penguin"/>
        <div className="Title">
            <h1>Hello there!</h1>
            <h1>Welcome to Social Penguin!</h1>
            <br/>
            <h1>Excited?</h1>
            <h1>Let's get started!</h1>
        </div>
        {/* <div className="Buttons">
            <Link className="RegisterButton" to="/register">Register</Link>
            <Link className="LoginButton" to="/login">Login</Link>
        </div> */}
    </div>
}

export default Homepage;