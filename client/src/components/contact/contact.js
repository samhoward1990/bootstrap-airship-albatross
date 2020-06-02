import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import './contact.css';

class Contact extends React.Component {
    handleSubmit(event) {
        event.preventDefault()
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let message = document.getElementById("message").value;

        axios.post("/send", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };



    render() {
        return (
            <Container>
                <Row>
                    <Col xsm="12" lg="6">
                        <Form>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className="field-content" type="text" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs="12" lg="6">
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control className="field-content" type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="6">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="field-content" type="email" />
                        </Form.Group>
                    </Col>
                    <Col xs="12" lg="6">
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control className="field-content" type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className="field-content" as="textarea" rows="6" />
                        </Form.Group>
                    </Col>
                </Row>
                <button onClick={this.handleSubmit} type="submit">Submit</button>
            </Container>
        )
    };
};

export default Contact;