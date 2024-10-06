import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Initial Quiz for Information Technology Department",
        text: "This quiz will help you to identify your current knowledge of security awareness",
        link: "/module/ITDepartmentInitialQuiz",
        border: "primary",
        imgSrc: "../initial-quiz.png"
    },
    {
        title: "Initial Quiz for Human Resource Department",
        text: "This quiz will help you to identify your current knowledge of security awareness",
        link: "/module/HRDepartmentInitialQuiz",
        border: "secondary",
        imgSrc: "../initial-quiz.png" 
    },
    {
        title: "Initial Quiz for Finance Department",
        text: "This quiz will help you to identify your current knowledge of security awareness",
        link: "/module/FinanceInitialQuiz",
        border: "secondary",
        imgSrc: "../initial-quiz.png" 
    }
];

const InitialQuiz = () => {
    return (
        <div className="page-container">     
            <div className="content-wrap">
            <h1>Initial Quiz Selection</h1>
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

export default InitialQuiz;