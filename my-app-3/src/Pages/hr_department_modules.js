import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Access Control and Identity Management Module",
        text: "Training and Awareness Content for HR Department employees",
        link: "/module/AccessControlIdentityManagement",
        border: "primary",
        imgSrc: "../access_control_module.webp"
    },
    {
        title: "Personal Data Security Module",
        text: "Training and Awareness content for Personal Data Security",
        link: "/module/PersonalDataSecurityModule",
        border: "secondary",
        imgSrc: "../personal_data.png" 
    }
];

const HRDepartment = () => {
    return (
        <div className="page-container">     
            <div className="content-wrap">
            <h1>HR Department Modules</h1>
                <div className="Departments">
                    {modules.map((module, index) => (
                        <div key={index}>
                            <Card border={module.border} className="Card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={module.imgSrc} alt={`${module.title} Logo`} />
                                <Card.Body>
                                    <Card.Title>{module.title}</Card.Title>
                                    <Card.Text>{module.text}</Card.Text>
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

export default HRDepartment;