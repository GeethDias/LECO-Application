import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyNavbar from '../Components/Navbar';
import Footer from '../Components/Footer.js';
import { Button } from 'react-bootstrap';
import './ResultsPage.css';

// Implementation of the result function
const ResultsPage = () => {
    const location = useLocation();
    const { score, totalQuestions } = location.state;
    const navigate = useNavigate();  // useNavigate hook for navigation

    

    // Define thresholds for different messages and images
    let resultMessage = "";
    let imageSrc = "";
    let resultTitle = "Congratulations";

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
        imageSrc = "/good-score.jpg";
    } else {
        resultTitle = "Keep Trying!";
        resultMessage = "Don't be discouraged, you can improve with another attempt!.";
        imageSrc = "/try-again.png";
    }

    // Function to navigate back to the dashboard or previous page
    const handleGoBack = () => {
        navigate(-1);  // This will navigate back to the previous page
    };

    return (
        <div className="results-page-container">
            <MyNavbar />
            <div className="results-content">
                <img
                    src={imageSrc}
                    alt="Result Badge"
                    className="success-badge"
                />

                <h1 className="results-title">{resultTitle}!</h1>
                <p className="results-score">{`You scored ${score} out of ${totalQuestions}`}</p>
                <p className="results-message">{resultMessage}</p>

                {/* Go Back Button */}
                <Button variant="primary" onClick={handleGoBack} className="go-back-button">
                    Go Back
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default ResultsPage;