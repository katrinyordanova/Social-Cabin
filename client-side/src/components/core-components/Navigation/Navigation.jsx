import React, { Component }  from 'react';
import './Navigation.scss';
import Link from '../../links/Link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faCashRegister, faIgloo, faBars,
         faPlus, faSignOutAlt, faMitten } from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component { 
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }  
    
    handleClick() {
        let links = document.getElementsByClassName('navigation__right-side')[0];
        if(links.style.display === "block" ) {
            links.style.display = "none";
        }else {
            links.style.display = "block";
        }
    }
    
    render() {
    const { isLogged } = this.props;
    return <nav className="navigation">
        <ul>
            <div className="navigation__left-side">
                <img className="navigation__left-side__logo" src="/cabin-logo.png" alt="cabin-logo" />
                <p className="navigation__left-side__name">Social Cabin</p>
            </div>
            <div className="navigation__right-side">
                { !isLogged && <Link to='/login'><FontAwesomeIcon icon={ faSignInAlt }></FontAwesomeIcon> Login</Link> }
                { !isLogged && <Link to='/register'><FontAwesomeIcon icon={ faCashRegister }></FontAwesomeIcon> Register</Link> }
                { isLogged && <Link to='/'><FontAwesomeIcon icon={ faIgloo }></FontAwesomeIcon> Home</Link> }
                { isLogged && <Link to='/new-post'><FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon> New Post</Link> }
                { isLogged && <Link to='/logout'><FontAwesomeIcon icon={ faSignOutAlt }></FontAwesomeIcon> Logout</Link> }
                { isLogged && <Link to='/about-us'><FontAwesomeIcon icon={ faMitten }></FontAwesomeIcon> About us</Link> }
                {/* { isLogged && <Link to='/view-profile'>Profile</Link> }
                { isLogged && <Link to='/my-posts'>My Posts</Link> } */}
            </div>
            <button className="navigation__right-side__button" onClick={this.handleClick}>
                <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
            </button>
        </ul>
    </nav>
    }
}

export default Navigation;