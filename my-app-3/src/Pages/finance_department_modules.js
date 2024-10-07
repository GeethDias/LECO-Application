import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Secure Online Payments Modules",
        text: "Training and Awareness Content for Finance Department employees",
        link: "/module/SecureOnlinePaymentsModule",
        border: "primary",
        imgSrc: "../secure_online_payment_module.jpg",
        label: null // No label for this module
    },
    {
        title: "Password Usage Module",
        text: "Training and Awareness Content for Password Usage",
        link: "/module/PasswordModule",
        border: "primary",
        imgSrc: "../password_usage_module.webp",
        label: "General Module" // Label for this module
    }
];

const FINANCEDepartment = () => {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <h1>Finance Department Modules</h1>
                <div className="Departments">
                    {modules.map((module, index) => (
                        <div key={index}>
                            <Card border={module.border} className="Card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={module.imgSrc} alt={`${module.title} Logo`} />
                                <Card.Body>
                                    <Card.Title>{module.title}</Card.Title>
                                    <Card.Text>{module.text}</Card.Text>
                                    {/* Conditionally render the label */}
                                    {module.label && (
                                        <span style={{
                                            backgroundColor: '#f75e11', // Set the background color
                                            color: 'white', // White font color
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
                                    <Card.Link as={Link} to={module.link}>View</Card.Link>
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

export default FINANCEDepartment;
