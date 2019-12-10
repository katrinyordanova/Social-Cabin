import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from './components/site/Main/Main';
import Navigation from './components/site/Navigation/Navigation';
import Footer from './components/site/Footer/Footer';
import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';
import ViewProfile from './components/profile/ViewProfile/ViewProfile';
import EditProfile from './components/profile/EditProfile/EditProfile';
import DeleteProfile from './components/profile/DeleteProfile/DeleteProfile';
import NewPost from './components/posts/NewPost/NewPost';
import MyPosts from './components/posts/MyPosts/MyPosts';
import EditPost from './components/posts/EditPost/EditPost';
import DeletePost from './components/posts/DeletePost/DeletePost';
import Contacts from './components/site/Contacts/Contacts';
import AboutUs from './components/site/AboutUs/AboutUs';
import Logout from './components/user/Logout/Logout';
import GuestHomepage from './components/homepage/GuestHomepage/GuestHomepage';
import UserHomepage from './components/homepage/UserHomepage/UserHomepage';

import { ToastContainer } from 'react-toastify';
import userService from './services/userService';

function render(Cmp, { isLogged, ...otherProps}, isProtected) {
  return function (props) {
    return !isProtected && !isLogged ? <Cmp {...props} {...otherProps}/> : <Redirect to="/homepage" />
  };
}

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
  }
  
  login = (data, history) => {
    return userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }
  
  logout = (history) => {
      userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/homepage');
      return null;
    });
  }

  render() {
    const { isLogged } = this.state;
    return (
        <BrowserRouter >
          <div className="App">
            <Navigation isLogged={ isLogged } />
            <div className="Container" >
              <Main>
                <Switch>
                  <Route path="/" exact render={render(UserHomepage, { isLogged }, true)} />
                  <Route path="/homepage" exact render={render(GuestHomepage, { isLogged }, false)} />
                  <Route path="/register" exact render={render(Register, { isLogged }, false)} />
                  <Route path="/login" exact render={render(Login, { isLogged , login: this.login }, false) } />
                  <Route path="/logout" exact render={render(Logout, { isLogged, logout: this.logout}, true) } />
                  <Route path="/view-profile" exact render={render(ViewProfile, { isLogged }, true)} />
                  <Route path="/edit-profile" exact render={render(EditProfile, { isLogged }, true)} />
                  <Route path="/delete-profile" exact render={render(DeleteProfile, { isLogged }, true)} />
                  <Route path="/new-post" exact render={render(NewPost, { isLogged }, true)} />
                  <Route path="/edit-post" exact render={render(EditPost, { isLogged }, true)} />
                  <Route path="/delete-post" exact render={render(DeletePost, { isLogged }, true)} />
                  <Route path="/my-posts" exact render={render(MyPosts, { isLogged }, true)} />
                  <Route path="/contacts" exact render={render(Contacts, { isLogged }, true)} />
                  <Route path="/about-us" exact render={render(AboutUs, { isLogged }, true)} />
                </Switch>
              </Main>
            </div>
            <Footer />
          </div>
          <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover />
        </BrowserRouter>
    )};
}

export default App;