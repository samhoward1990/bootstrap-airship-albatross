import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './wisteria.css';

import placeholder from '../../images/500x700-placeholder.png';
import { Link } from 'react-router-dom';
const Wisteria = () => (
    <Container>
        <Row>
            <Col className="d-flex justify-content-center" xs="12">
                <Link to="/crew"><button>Close File</button></Link>
            </Col>
        </Row>
        <Row>
            <Col xs="12" lg="4">
                <Image src={placeholder} fluid />
            </Col>
            <Col lg="8">
                <p className="p-3 name">Wisteria Cooper (Aka: “Waif” or “Wisp”)</p>
                <p className="d-flex justify-content-end">Ship Ghost</p>
                <p>Born: April 26, 1839 in Wilkes County, North Carolina<br /> Died: July 18, 1861 in Horizon, Missouri</p>
                <p>Background:	Wisteria worked as a maidservant for Concord and Elaine Paterson of Guilford County, North Carolina.  The Patersons of Sunwood Manor owned a number of textile mills, affording them wealth and leisure time to dedicate to scientific and technological pursuits, heading? the Scientific Order of the Kronos Field.  The Order developed the Nautilus Device over the later years of the 1850s, during which Wisteria often tended to the scientists hosted at Sunwood Manor.  In the wake of Fort Sumter, the Patersons, upon the Order’s decision, entrusted the device to Wisteria and charged her to smuggle it west to keep it out of military hands on both sides.  After escaping capture by the Rebels and evading Union troops, Wisteria hid the device in the junkyard outside Horizon, Missouri and left the scene in hopes of leading the Rebels away from the device, which she planned to return for.  Not far outside of town, Wisteria was apprehended by Union spies who, ignorant of the decoy and the real device's hiding place, tried to forcibly take the Nautilus Device from her.  The encounter left Wisteria dead, strangled in the struggle, while the Union spies were left empty handed.</p>
                <p>She was buried in a pauper’s grave, only retaining her identity due to the letters she carried.  Rather than passing on, Wisteria returned to the junkyard as a ghost where she continues to watch over the Nautilus Device.</p>
                <p>Personality:  A bit of a starry-eyed dreamer type before her death, Wisteria has become quietly resentful of the world in the wake of her murder.  The disappointment of failing the one and only adventure she ever had crushed every scrap of joy she possessed.  She tries to not let her bitterness show around the rest of the crew, for the sake of the peace, which results in stiff and unpersonable behavior.  In a way, her existence as a ghost is a means of atonement to her own self-worth.  To think that her life was devoid of use or meaning was too troubling to let her pass on.</p>
            </Col>

        </Row>
    </Container>
);

export default Wisteria;
