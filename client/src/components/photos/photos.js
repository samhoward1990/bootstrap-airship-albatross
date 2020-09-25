import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, } from 'react-bootstrap';
import './photos.css'

import crewAtSpn from '../../images/crew-at-spn.jpg';
import tiffBenAndJosh from '../../images/tiff-ben-josh.jpg';
import captainInJail from '../../images/captain-in-jail.jpg';

class Photos extends React.Component {

    state = {
        show: false,
        imgSrc: ""
    }
    handleOpen = (e) => {
        this.setState({ show: true });
        let target = e.target
        this.setState({ imgSrc: target.getAttribute("src") });
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="mt-5">
                        <Col lg="3">
                            <Image src={crewAtSpn} onClick={this.handleOpen} fluid />
                        </Col>
                        <Col lg="3">
                            <Image src={tiffBenAndJosh} onClick={this.handleOpen} fluid />
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg" centered>
                    <Modal.Header closeButton onClick={this.handleClose}>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.state.imgSrc} fluid />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
export default Photos;