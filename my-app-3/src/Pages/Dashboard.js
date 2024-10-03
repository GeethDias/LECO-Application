import React from 'react';
import MyNavbar from '../Components/Navbar';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';

const modules = [
    {
        title: "Password Module",
        text: "Ensure your password is strong and secure, combining letters, numbers, and symbols. Update it regularly to protect sensitive information and prevent unauthorized access.",
        link: "/module/PasswordModule",
        border: "primary",
        imgSrc: "./download.png"
    },
    {
        title: "BYOD Policy Module",
        text: "Understand the risks and responsibilities of using personal devices at work. Follow guidelines to protect company data and ensure compliance with security policies.",
        link: "/module/BYODPolicyModule",
        border: "secondary",
        imgSrc: "./download.png"
    },
    {
        title: "Internet Usage Policy",
        text: "Use the internet responsibly and ethically at work. Access only work-related sites and avoid activities that could compromise network security or company reputation.",
        link: "/module/InternetUsagePolicy",
        border: "success",
        imgSrc: "./download.png"
    },
    {
        title: "Email Usage",
        text: "Use your work email responsibly. Avoid sending sensitive information to unauthorized recipients.",
        link: "/module/EmailUsagePolicy",
        border: "danger",
        imgSrc: "./download.png"
    },
    {
        title: "Mobile Computer and Usage Guidelines",
        text: "Follow company guidelines for mobile device usage. Ensure your device is secure and compliant with company policies.",
        link: "/module/MobileUsagePolicy",
        border: "warning",
        imgSrc: "./download.png"
    },
    {
        title: "Remote Access Policy",
        text: "Understand the risks and responsibilities of using personal devices at work. Follow guidelines to protect company data and ensure compliance with security policies.",
        link: "/module/RemoteAccessPolicy",
        border: "info",
        imgSrc: "./download.png"
    },
    {
        title: "Unacceptable Usage Policy",
        text: "Use the internet responsibly and ethically at work. Avoid activities that could compromise network security or company reputation.",
        link: "/module/UnacceptableUsagePolicy",
        border: "dark",
        imgSrc: "./download.png"
    },
    {
        title: "Module 8",
        text: "Ensure your password is strong and secure, combining letters, numbers, and symbols. Update it regularly to protect sensitive information and prevent unauthorized access.",
        link: "/module/Module8",
        border: "danger",
        imgSrc: "./download.png"
    },
];

const Dashboard = () => {
    return (
        <div>
            
            <div className='Modules'>
                {modules.map((module, index) => (
                    <div key={index}>
                        <Card border={module.border} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={module.imgSrc} alt={`${module.title} Logo`} />
                            <Card.Body>
                                <Card.Title>{module.title}</Card.Title>
                                <Card.Text>{module.text}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link as={Link} to={module.link} className="no-underline">View Module</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;