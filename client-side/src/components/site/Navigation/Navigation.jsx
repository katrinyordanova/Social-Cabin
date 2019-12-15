import React,{ Component }  from 'react';
import './Navigation.css';
import Link from '../../links/Link';

class Navigation extends Component {   
    render() {
        const { isLogged } = this.props;
    return <nav className="Navigation">
        <ul>
            <div className="LogoAndName">
                <img src="/penguin.png" alt="planet-icon" id="logo" />
                <p>Social Penguin</p>
            </div>
            { isLogged && <Link to='/'>Home</Link> }
            { isLogged && <Link to='/new-post'>New Post</Link> }
            {/* { isLogged && <Link to='/view-profile'>Profile</Link> }
            { isLogged && <Link to='/my-posts'>My Posts</Link> } */}
            { isLogged && <Link to='/logout'>Logout</Link> }
            { isLogged && <Link to='/contacts'>Contacts</Link> }
            { isLogged && <Link to='/about-us'>About us</Link> }
        </ul>
    </nav>
    }
}

export default Navigation;