import React from 'react';
import './NotFound.css';

export default function NotFound() {
    return <div className="NotFound">
        <img src="/notFound.jpeg" alt="not-found"/>
        <h2>Looks like you're trying to find something, but it isn't there.</h2>
        <h2>Try something else.</h2>
    </div>
}