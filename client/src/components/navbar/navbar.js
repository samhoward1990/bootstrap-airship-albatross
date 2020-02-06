import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image } from 'react-bootstrap';


import './navbar.css'


const NavbarMenu = () => (
    <Nav className="m-3 d-flex justify-content-center">
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