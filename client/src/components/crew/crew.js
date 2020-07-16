import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './crew.css';

import placholder from '../../images/150-placeholder.png';
const Crew = () => (
    <Container>
        <Row>
            <Col xs="12" md="3">

                <Card>
                    <Card.Img src={placholder} variant="top" />
                    <Card.Body className="card-content">
                        <Card.Title>Wisteria Cooper </Card.Title>
                        <Link to="/wisteria"><button>Open File</button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Crew;