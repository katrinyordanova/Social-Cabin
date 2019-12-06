import React from 'react';
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
import NewPost from './components/Post/NewPost/NewPost';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
      <BrowserRouter >
        <div className="App">
          <Navigation />
          <div className="Container" >
            <Main>
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/view-profile" component={ViewProfile} />
                <Route path="/edit-profile" component={EditProfile} />
                <Route path="/delete-profile" component={DeleteProfile} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/about-us" component={AboutUs} />
              </Switch>
            </Main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;