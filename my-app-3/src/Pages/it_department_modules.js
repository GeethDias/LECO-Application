import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Password Usage Module",
        text: "Training and Awareness Content for Password Usage",
        link: "/module/PasswordModule",
        border: "primary",
        imgSrc: "./image1.png"
    },
    {
        title: "Secure Software Development Module",
        text: "Training and Awareness content for Secure Software Development",
        link: "/module/SecureSoftwareModule",
        border: "secondary",
        imgSrc: "./hr_department.png"
    },
    {
        title: "Data Handling and Storage Module",
        text: "Training and Awareness Content for Data Handling",
        link: "/module/DataHandlingAndStorageModule",
        border: "success",
        imgSrc: "./finance_department.png"
    }
];

const ITDepartment = () => {
    return (
        <div className="page-container">     
            <div className="content-wrap">
            <h1>IT Department Modules</h1>
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

export default ITDepartment;