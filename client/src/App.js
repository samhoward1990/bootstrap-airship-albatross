import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Image } from 'react-bootstrap';

import albatrossFlag from './images/airship-albatross-flag.jpg';
import Homepage from './components/homepage/homepage';
import Crew from './components/crew/crew';
import Wisteria from './components/wisteria/wisteria';
import Photos from './components/photos/photos';
import Contact from './components/contact/contact';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav className="d-flex justify-content-center">
          <Nav.Item className="mt-5">
            <Link to="/"><button>Home</button></Link>
          </Nav.Item>
          <Nav.Item className="mt-5">
            <Link to="/crew"><button>Crew</button></Link>
          </Nav.Item>
          <Nav.Item className="mt-2">
            <Link to="/"><Image src={albatrossFlag} width="200px" height="133px" /></Link>
          </Nav.Item>
          <Nav.Item className="mt-5">
            <Link to="/photos"><button>Photos</button></Link>
          </Nav.Item>
          <Nav.Item className="mt-5">
            <Link to="/contact"><button>Contact</button></Link>
          </Nav.Item>
        </Nav>
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
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
