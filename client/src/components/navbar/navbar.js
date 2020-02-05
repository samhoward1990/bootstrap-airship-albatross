import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image } from 'react-bootstrap';


import './navbar.css'
import AlbatrossFlag from '../../images/airship-albatross-flag.jpg';

const NavbarMenu = () => (
    <Nav className="d-flex justify-content-center m-3">
        <Nav.Item>
            <Link to="/"><button>Home</button></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/crew"><button>Crew</button></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/photos"><button>Photos</button></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/contact"><button>Contact</button></Link>
        </Nav.Item>
    </Nav>
);

export default NavbarMenu;