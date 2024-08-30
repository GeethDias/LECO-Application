import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const MyNavbar = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#eaed21' }}>
            <Container>
            <Navbar.Brand as={Link} to="/">
                <img
                    src={`/leco-logo.png`}  // Replace with the path to your logo image
                    width="120"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Brand Logo"
                />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/AboutThisSystem">About This System</Nav.Link>
                        <Nav.Link as={Link} to="/AcceptableUsePolicy">Acceptable Use Policy</Nav.Link>
                        <Nav.Link as={Link} to="/MyProfileView">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/ReportIncident">Report Incident</Nav.Link>
                        <NavDropdown title="More Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
