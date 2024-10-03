import React from 'react';
import './SelectDepartment.css';  // Import the new CSS file
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Information Technology Department",
        text: "Training and Awareness Content for Employees at Information Technology Department",
        link: "/Select-Department/IT-Department",
        border: "primary",
        imgSrc: "./it_department.png"
    },
    {
        title: "Human Resource Department",
        text: "Training and Awareness content for Employees at Human Resource Department",
        link: "/Select-Department/HR-Department",
        border: "secondary",
        imgSrc: "./hr_department.png"
    },
    {
        title: "Financial Department",
        text: "Training and Awareness Content for Employees in Financial Department",
        link: "/Select-Department/Finance-Department",
        border: "success",
        imgSrc: "./finance_department.png"
    },
    {
        title: "Check Your Initial Knowledge",
        text: "This Quiz will test your currentl knowledge on security awareness",
        link: "/module/InternetUsagePolicy",
        border: "success",
        imgSrc: "./initial_quiz.png"
    }
];

const SelectDepartment = () => {
    return (
        <div className="page-container">     
            <div className="content-wrap">
            <h1>Select Your Department</h1>
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

export default SelectDepartment;
