import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './homepage.css'
import Crew from '../../images/airship-crew.jpg';

const Homepage = () => (
    <Container>
        <Row>
            <Col className="d-flex justify-content-center" xs="12">
                <h1 className="styled-header">Airship Albatross</h1>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <Image className="mt-4" src={Crew} width="200px" height="auto" />
            </Col>
        </Row>
    </Container>
);

export default Homepage;