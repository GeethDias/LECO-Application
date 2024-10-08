import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        fullName: '',
        employmentId: '',
        email: '',
        department: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Handle delete user
    const deleteUser = async (userId) => {
        try {
            await axios.delete(`/api/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Handle unlock user
    const unlockUser = async (userId) => {
        try {
            await axios.patch(`/api/users/unlock/${userId}`);
            setUsers(users.map(user =>
                user._id === userId ? { ...user, isLocked: false, lockUntil: null } : user
            ));
        } catch (error) {
            console.error('Error unlocking user:', error);
        }
    };

    // Handle new user registration
    const handleRegisterUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', newUser);
            setSuccessMessage('User registered successfully');
            setErrorMessage('');
            setUsers([...users, response.data.newUser]);
            setNewUser({
                fullName: '',
                employmentId: '',
                email: '',
                department: '',
                password: ''
            });
        } catch (error) {
            setErrorMessage(error.response.data.error || 'Error registering user');
            setSuccessMessage('');
        }
    };

    // Handle input change for new user
    const handleInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    // Handle go back action
    const handleGoBack = () => {
        navigate(-1);  // Navigate to the previous page
    };

    return (
        <Container className="mt-4">
            <Button variant="secondary" onClick={handleGoBack} className="mb-3">Go Back</Button>
            <h2>Manage Users</h2>
            
            {/* User Registration Form */}
            <h3>Register New User</h3>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form onSubmit={handleRegisterUser}>
                <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={newUser.fullName}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmploymentId">
                    <Form.Label>Employment ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="employmentId"
                        value={newUser.employmentId}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        name="department"
                        value={newUser.department}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Register User
                </Button>
            </Form>
            <br/>
            <h3>Delete and Unlock Users</h3>
            {/* Users Table */}
            <Table striped bordered hover responsive className="mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{new Date(user.lockUntil) > Date.now() ? 'Locked' : 'Active'}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => deleteUser(user._id)}
                                >
                                    Delete
                                </Button>

                                {new Date(user.lockUntil) > Date.now() && (
                                    <Button
                                        variant="warning"
                                        onClick={() => unlockUser(user._id)}
                                        className="ml-2"
                                    >
                                        Unlock User
                                    </Button>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Footer />
        </Container>
    );
};

export default ManageUsers;
