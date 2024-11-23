import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import axios from 'axios'; // For API requests

const HRDepartment = () => {
    const [modules, setModules] = useState([]); // State to store modules
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch modules for the HR department
        const fetchModules = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/modules?department=HR', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the Authorization header
                    }
                })
                setModules(response.data);
            } catch (err) {
                console.error('Error fetching HR modules:', err);
                setError('Failed to fetch modules.');
            } finally {
                setLoading(false);
            }
        };

        fetchModules();
    }, []);

    if (loading) {
        return <div>Loading modules...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="page-container">
            <div className="content-wrap">
                <h1>HR Department Modules</h1>
                <div className="Departments">
                    {modules.map((module, index) => (
                        <div key={index}>
                            <Card border="primary" className="Card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`http://localhost:3000/${module.imagePath}` || '../placeholder_image.png'} alt={`${module.title} Logo`} />
                                <Card.Body>
                                    <Card.Title>{module.title}</Card.Title>
                                    <Card.Text>{module.description}</Card.Text>
                                    {/* Conditionally render the label */}
                                    {module.label && (
                                        <span style={{
                                            backgroundColor: '#f75e11',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            fontSize: '12px',
                                            display: 'inline-block',
                                            marginTop: '10px'
                                        }}>
                                            {module.label}
                                        </span>
                                    )}
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link as={Link} to={`/module/${module._id}`}>View</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HRDepartment;
