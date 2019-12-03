import React from 'react';
import '../App/App.css';
import Navigation from '../Navigation/Navigation';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';
import Homepage from '../Homepage/Homepage';
import AboutUs from '../AboutUs/AboutUs';

function App() {
  return (
      <BrowserRouter >
        <div className="App">
          <Navigation />
          <div className="Container" >
            <Main>
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/register" exact component={Homepage} />
                <Route path="/login" exact component={Homepage} />
                <Route path="/" exact component={Homepage} />
                <Route path="/" exact component={Homepage} />
                <Route path="/" exact component={Homepage} />
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