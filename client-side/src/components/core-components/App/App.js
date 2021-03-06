import React, { Component } from 'react';
import './App.scss';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Register from '../../user/Register/Register';
import Login from '../../user/Login/Login';
import NewPost from '../../posts/NewPost/NewPost';
import MyPosts from '../../posts/MyPosts/MyPosts';
import EditPost from '../../posts/EditPost/EditPost';
import AboutUs from '../../site/AboutUs/AboutUs';
import Logout from '../../user/Logout/Logout';
import GuestHomepage from '../../homepage/GuestHomepage/GuestHomepage';
import UserHomepage from '../../homepage/UserHomepage/UserHomepage';
import NotFound from '../../site/NotFound/NotFound';

import { ToastContainer } from 'react-toastify';
import userService from '../../../services/userService';

function render(Cmp, { isLogged, ...otherProps }, isProtected) {
  return function (props) {
    if(!isProtected && !isLogged) {
      return <Redirect to="/homepage" />
    }else {
      return <Cmp {...props} {...otherProps}/>
    }
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
  
  login = (history, data) => {
    return userService.login(data).then(() => {
      localStorage.setItem('user', data.username);
      this.setState({ isLogged: true });
      history.push('/');
    });
  }
  
  logout = (history) => {
    userService.logout().then(() => {
      localStorage.removeItem('user');
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
                  <Route path="/" exact render={render(UserHomepage, { isLogged }, false)} />
                  <Route path="/homepage" exact render={render(GuestHomepage, { isLogged }, true)} />
                  <Route path="/register" exact render={render(Register, { isLogged }, true)} />
                  <Route path="/login" exact render={render(Login, { isLogged , login: this.login }, true) } />
                  <Route path="/logout" exact render={render(Logout, { isLogged, logout: this.logout}, false) } />
                  <Route path="/new-post" exact render={render(NewPost, { isLogged }, false)} />
                  <Route path="/edit-post/:id" exact render={render(EditPost, { isLogged }, false)} />
                  <Route path="/my-posts" exact render={render(MyPosts, { isLogged }, false)} />
                  <Route path="/about-us" exact render={render(AboutUs, { isLogged }, false)} />
                  <Route path="*" exact render={render(NotFound, { isLogged })}>
                    <Main title="Not Found"><NotFound /></Main>
                  </Route>
                </Switch>
              </Main>
            </div>
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