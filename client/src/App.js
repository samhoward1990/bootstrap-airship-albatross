import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarMenu from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
