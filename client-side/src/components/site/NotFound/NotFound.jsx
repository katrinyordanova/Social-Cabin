import React from 'react';
import './NotFound.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

const NotFound = ({ isLogged }) => {
const history = useHistory();
return <div className="not-found">
        <img className="not-found__picture" src="/pictures/not-found.png" alt="not-found" />
        <div className="not-found__buttons">
            { isLogged && <button className="not-found__buttons__guest-button" onClick={() => history.push('/')}>
                <FontAwesomeIcon icon={ faHome }></FontAwesomeIcon> Home</button>}
            { !isLogged && <button className="not-found__buttons__user-button" onClick={() => history.push('/homepage')}>
                <FontAwesomeIcon icon={ faHome }></FontAwesomeIcon> Home</button> }
        </div>
    </div>
}

export default NotFound;