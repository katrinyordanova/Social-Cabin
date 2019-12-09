import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ViewProfile from './components/Profile/ViewProfile/ViewProfile';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import DeleteProfile from './components/Profile/DeleteProfile/DeleteProfile';
import NewPost from './components/Posts/NewPost/NewPost';
import MyPosts from './components/Posts/MyPosts/MyPosts';
import EditPost from './components/Posts/EditPost/EditPost';
import DeletePost from './components/Posts/DeletePost/DeletePost';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';

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
      history.push('/home');
    });
  }
  
  logout = (history) => {
      userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
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
                  <Route path="/" exact component={Homepage} isLogged = { isLogged } />
                  <Route path="/home" component={Home} isLogged = { isLogged } />
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