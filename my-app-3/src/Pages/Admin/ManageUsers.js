import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';


const ManageUsers = () => {
    const [users, setUsers] = useState([]);
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

    // Handle go back action
    const handleGoBack = () => {
        navigate(-1);  // Navigate to the previous page
    };

    return (
        <Container className="mt-4">
            <Button variant="secondary" onClick={handleGoBack} className="mb-3">Go Back</Button>
            <h2>Manage Users</h2>
            <Table striped bordered hover responsive>
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
