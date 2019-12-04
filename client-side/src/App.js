import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
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
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
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