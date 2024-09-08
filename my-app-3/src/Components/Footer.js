import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-3">
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">Copyrights @ Lanka Electricity Private Company</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
