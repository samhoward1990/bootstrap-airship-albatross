import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import AlbatrossFlag from '../../images/airship-albatross-flag.jpg';
import './navbar.css'

const NavbarMenu = () => (
    <Navbar>
        <Link to="/"><Navbar.Brand><img src={AlbatrossFlag} alt="The flag of Airship Albatross" width="50px" height="50px" /></Navbar.Brand></Link>
        <Nav className="ml-auto">
            <Link to="/"><button className="p-2">Home</button></Link>
            <Link to="/crew"><button className="p-2 ml-3" >Crew</button></Link>
        </Nav>
    </Navbar>
);

export default NavbarMenu;