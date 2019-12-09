import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
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

function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps}/>
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
                  <Route path="/" exact component={UserHomepage} isLogged = { isLogged } />
                  <Route path="/homepage" exact component={GuestHomepage} isLogged = { isLogged } />
                  <Route path="/register" component={Register} isLogged = { isLogged } />
                  <Route path="/login" render={render(Login, { isLogged , login: this.login }) } />
                  <Route path="/logout" render={render(Logout, { isLogged, logout: this.logout}) } />
                  <Route path="/view-profile" component={ViewProfile} isLogged = { isLogged } />
                  <Route path="/edit-profile" component={EditProfile} isLogged = { isLogged } />
                  <Route path="/delete-profile" component={DeleteProfile} isLogged = { isLogged } />
                  <Route path="/new-post" component={NewPost} isLogged = { isLogged } />
                  <Route path="/edit-post" component={EditPost} isLogged = { isLogged } />
                  <Route path="/delete-post" component={DeletePost} isLogged = { isLogged } />
                  <Route path="/my-posts" component={MyPosts} isLogged = { isLogged } />
                  <Route path="/contacts" component={Contacts} isLogged = { isLogged } />
                  <Route path="/about-us" component={AboutUs} isLogged = { isLogged } />
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