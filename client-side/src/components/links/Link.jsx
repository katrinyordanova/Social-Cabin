import React from 'react';
import './Link.css';
import { Link as ReactLinkDomLink } from 'react-router-dom';

function Link({ to, children }) {
    return <li className="list-item">
        <ReactLinkDomLink to={to}>{children}</ReactLinkDomLink>
    </li>
}

export default Link;