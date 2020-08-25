import React from 'react';
import './NotFound.scss';
import Link from '../../links/Link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = ({ isLogged }) => {
return <div className="not-found">
        <img className="not-found__picture" src="/pictures/not-found.png" alt="not-found" />
        { !isLogged && <Link className="not-found__guest-button" to='/homepage'><FontAwesomeIcon icon={ faHome }></FontAwesomeIcon> Home</Link> }
        { isLogged && <Link className="not-found__user-button" to='/'><FontAwesomeIcon icon={ faHome }></FontAwesomeIcon> Home</Link> }
    </div>
}

export default NotFound;