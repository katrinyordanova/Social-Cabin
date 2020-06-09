import React from 'react';
import './Link.scss';
import { Link as ReactLinkDomLink } from 'react-router-dom';

function Link({ to, children }) {
    return <li className="navigation__link">
        <ReactLinkDomLink className="navigation__link__href" to={to}>{children}</ReactLinkDomLink>
    </li>
}

export default Link;