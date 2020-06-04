import React,{ Component }  from 'react';
import './Navigation.scss';
import Link from '../../links/Link';

class Navigation extends Component {   
    render() {
        const { isLogged } = this.props;
    return <nav className="navigation">
        <ul>
            <div className="navigation__logo-and-name">
                <img className="navigation__logo-and-name__logo" src="/penguin.png" alt="penguin-logo" />
                <p className="navigation__logo-and-name__name">Social Penguin</p>
            </div>
            <div className="navigation__links">
                { !isLogged && <Link to='/login'>Login</Link> }
                { !isLogged && <Link to='/register'>Register</Link> }
                { isLogged && <Link to='/'>Home</Link> }
                { isLogged && <Link to='/new-post'>New Post</Link> }
                {/* { isLogged && <Link to='/view-profile'>Profile</Link> }
                { isLogged && <Link to='/my-posts'>My Posts</Link> } */}
                { isLogged && <Link to='/logout'>Logout</Link> }
                { isLogged && <Link to='/contacts'>Contacts</Link> }
                { isLogged && <Link to='/about-us'>About us</Link> }
            </div>
        </ul>
    </nav>
    }
}

export default Navigation;