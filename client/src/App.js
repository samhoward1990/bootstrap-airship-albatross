import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarMenu from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Crew from './components/crew/crew';
import Wisteria from './components/wisteria/wisteria';
import Contact from './components/contact/contact';
function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/wisteria">
            <Wisteria />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
