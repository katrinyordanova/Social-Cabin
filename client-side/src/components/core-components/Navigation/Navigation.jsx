import React from 'react';
import './Navigation.scss';
import Link from '../../links/Link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faCashRegister, faIgloo, faBars,
         faPlus, faUserEdit, faSignOutAlt, faMitten } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ isLogged }) => {  
    const handleClick = () => {
        let links = document.getElementsByClassName('navigation__right-side')[0];
        if(links.style.display === "block" ) {
            links.style.display = "none";
        }else {
            links.style.display = "block";
        }
    }
    
    return <nav className="navigation">
        <ul>
            <div className="navigation__left-side">
                <img className="navigation__left-side__logo" src="pictures/cabin-logo.png" alt="cabin-logo" />
                <p className="navigation__left-side__name">Social Cabin</p>
            </div>
            <div className="navigation__right-side">
                { !isLogged && <Link to='/login'><FontAwesomeIcon icon={ faSignInAlt }></FontAwesomeIcon> Login</Link> }
                { !isLogged && <Link to='/register'><FontAwesomeIcon icon={ faCashRegister }></FontAwesomeIcon> Register</Link> }
                { isLogged && <Link to='/'><FontAwesomeIcon icon={ faIgloo }></FontAwesomeIcon> Home</Link> }
                { isLogged && <Link to='/new-post'><FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon> New Post</Link> }
                { isLogged && <Link to='/my-posts'><FontAwesomeIcon icon={ faUserEdit }></FontAwesomeIcon> My Posts</Link> } 
                { isLogged && <Link to='/logout'><FontAwesomeIcon icon={ faSignOutAlt }></FontAwesomeIcon> Logout</Link> }
                { isLogged && <Link to='/about-us'><FontAwesomeIcon icon={ faMitten }></FontAwesomeIcon> About us</Link> }
            </div>
            <button className="navigation__right-side__button" onClick={handleClick}>
                <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
            </button>
        </ul>
    </nav>
}

export default Navigation;