import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarMenu from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';

import Photos from './components/photos/photos';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
