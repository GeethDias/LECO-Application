import React from 'react';
import { useLocation } from 'react-router-dom';
import MyNavbar from '../Components/Navbar';
import Footer from '../Components/Footer.js';
import './ResultsPage.css';

const ResultsPage = () => {
    const location = useLocation();
    const { score, totalQuestions } = location.state;

    // Define thresholds for different messages and images
    let resultMessage = "";
    let imageSrc = "";
    
    // Change the message and image based on the score percentage
    const percentageScore = (score / totalQuestions) * 100;

    if (percentageScore === 100) {
        resultMessage = "Excellent! You got a perfect score!";
        imageSrc = "/successfull-image.png";
    } else if (percentageScore >= 75) {
        resultMessage = "Great job! You scored well!";
        imageSrc = "/successfull-image.png";
    } else if (percentageScore >= 50) {
        resultMessage = "Good effort! You passed!";
        imageSrc = "/leco-logo.png";
    } else {
        resultMessage = "Don't worry, you can try again!";
        imageSrc = "/leco-logo.png";
    }

    return (
        <div className="results-page-container">
            <MyNavbar />
            <div className="results-content">
                <img
                    src={imageSrc} 
                    alt="Result Badge"
                    className="success-badge"
                />
                <h1 className="results-title">Congratulations!</h1>
                <p className="results-score">{`You scored ${score} out of ${totalQuestions}`}</p>
                <p className="results-message">{resultMessage}</p>
            </div>
            <Footer />
        </div>
    );
};

export default ResultsPage;
