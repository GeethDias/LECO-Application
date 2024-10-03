import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MyNavbar = ({ user, setUser }) => {

    console.log("user ", user)
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token and role from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        // Update the user state
        setUser(null);

        // Redirect to the login page
        navigate('/login');
    };

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

                        {/* Only show these links if the user is authenticated */}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/MyProfileView">My Profile</Nav.Link>
                                <Nav.Link as={Link} to="/ReportIncident">Report Issues</Nav.Link>
                            </>
                        )}

                        <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>

                        {/* Show Login/Logout based on authentication status */}
                        {user ? (
                            <Nav.Link as={Link} to="/login" onClick={handleLogout}>Logout</Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        )}

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
