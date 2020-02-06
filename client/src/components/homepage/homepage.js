import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './homepage.css'
import Crew from '../../images/airship-crew.jpg';
import AlbatrossFlag from '../../images/airship-albatross-flag.jpg';
const Homepage = () => (
    <div>
        <div className="d-flex justify-content-center flag-border flag-bg">
            <Image src={AlbatrossFlag} className="m-5" width="200px" height="200px" alt=" Airship Albatross Flag" />
        </div>
        <Container>
            <Row>
                <Col xs="12" className="d-flex justify-content-center">
                    <h1 className="styled-header m-4">Welcome Steampunks!</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4" lg="4">
                    <Image className="crew-border" src={Crew} fluid />
                </Col>
                <Col xs="12" md="8" lg="8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis tincidunt elementum. Maecenas imperdiet, turpis et euismod gravida, lacus nulla posuere ante, sit amet ultricies sem nisi eget lorem. Phasellus varius eleifend pretium. Quisque vestibulum mauris odio, in scelerisque tortor finibus a. Phasellus vitae finibus magna, et suscipit lectus. Proin aliquam nunc a mauris fermentum, id accumsan odio pharetra. Nam sagittis ultrices nibh. Praesent gravida vestibulum eleifend. Sed vel sagittis sem, a tristique tortor. Donec cursus, sapien in lobortis tincidunt, ligula ligula aliquet tortor, et convallis metus arcu nec neque. Cras bibendum mollis pulvinar. Phasellus rhoncus ut dui vel pulvinar. Etiam malesuada dui nec mollis accumsan.</p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Homepage;