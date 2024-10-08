import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = ({ user, setUser }) => {
    const navigate = useNavigate();
    const location = useLocation();  // Get current route

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
                        src={`/leco-logo-updated.png`}  // Replace with the path to your logo image
                        width="120"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Brand Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/AboutThisSystem" 
                            className={location.pathname === '/AboutThisSystem' ? 'active-link' : ''}>
                            About This System
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/AcceptableUsePolicy" 
                            className={location.pathname === '/AcceptableUsePolicy' ? 'active-link' : ''}>
                            Acceptable Use Policy
                        </Nav.Link>

                        {/* Only show these links if the user is authenticated */}
                        {user && (
                            <>
                                <Nav.Link 
                                    as={Link} 
                                    to="/MyProfileView" 
                                    className={location.pathname === '/MyProfileView' ? 'active-link' : ''}>
                                    My Profile
                                </Nav.Link>
                                <Nav.Link 
                                    as={Link} 
                                    to="/Select-Department" 
                                    className={location.pathname === '/Select-Department' ? 'active-link' : ''}>
                                    Home
                                </Nav.Link>

                                {/* Only show the Admin Dashboard link if the user is an Admin */}
                                {user.role === 'AdminUser' && (
                                    <Nav.Link 
                                        as={Link} 
                                        to="/admin/dashboard" 
                                        className={location.pathname === '/admin/dashboard' ? 'active-link' : ''}>
                                        Admin Dashboard
                                    </Nav.Link>
                                )}
                            </>
                        )}

                        <Nav.Link 
                            as={Link} 
                            to="/ContactUs" 
                            className={location.pathname === '/ContactUs' ? 'active-link' : ''}>
                            Contact Us
                        </Nav.Link>

                        {/* Show Login/Logout based on authentication status */}
                        {user ? (
                            <Nav.Link as={Link} to="/login" onClick={handleLogout}>
                                Logout
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login" className={location.pathname === '/login' ? 'active-link' : ''}>
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
