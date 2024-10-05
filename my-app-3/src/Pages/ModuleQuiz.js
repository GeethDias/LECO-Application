import React, { useEffect, useState } from 'react';
import PasswordModuleContent from '../Components/PasswordModuleContent';
import Footer from '../Components/Footer';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';  // Import Alert
import { useParams, useNavigate } from 'react-router-dom';
import SecureSoftwareDevelopmentModule from '../Components/SecureSoftwareDevelopmentModule';
import DataHandlingAndStorageModule from '../Components/DataHandlingAndStorageModule';
import AccessControlIdentityManagementModule from '../Components/AccessControlIdentityManagementModule';
import PersonalDataSecurityModule from '../Components/PersonalDataSecurityModule';
import SecureOnlinePaymentsModule from '../Components/SecureOnlinePaymentsModule';


const ModuleQuiz = () => {
    const { moduleId } = useParams();  // Get the moduleId from the URL
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [unanswered, setUnanswered] = useState(false); // State for unanswered check
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');  // Get the token from localStorage
        if (!token) {
            console.error('No token found, authorization denied');
            return;
        }

        fetch(`/api/questions?moduleId=${moduleId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Add the token to the request header
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Authorization failed');
                }
                return response.json();
            })
            .then(data => {
                setQuestions(data);
                console.log("DATA ", data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [moduleId]);

    const getModuleName = (moduleId) => {
        return moduleId.replace(/([A-Z])/g, ' $1').trim();  // Add a space before each capital letter
    };

    // Updated calculateScore function to check for unanswered questions
    // Updated calculateScore function to check for unanswered questions
    const calculateScore = () => {
        let unansweredFound = false;

        // Check if any question is unanswered
        questions.forEach(question => {
            if (!answers.hasOwnProperty(question._id)) {
                unansweredFound = true;
            }
        });

        if (unansweredFound) {
            setUnanswered(true);  // Set state to true to display an alert
            return;  // Prevent submission
        }

        // Calculate score if all questions are answered
        let score = 0;
        questions.forEach(question => {
            if (answers[question._id] === question.correctAnswer) {
                score += 1;
            }
        });

        // Send the calculated score to the backend
        const token = localStorage.getItem('token');
        const moduleName = getModuleName(moduleId);

        fetch(`/api/user/marks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                userId: localStorage.getItem('id'),
                moduleId: moduleId,
                moduleName: moduleName,
                newMarks: score
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Marks updated successfully' || data.message === 'New marks added successfully') {
                    console.log("Score submitted successfully", data);
                    navigate('/ResultsPage', { state: { score, totalQuestions: questions.length } });
                } else {
                    console.error('Error submitting score:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    const handleAnswerChange = (questionId, selectedOption) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedOption
        }));
        setUnanswered(false);  // Reset unanswered state if user selects an answer
    };

    // Function to handle navigation back to the previous page
    const handleGoBack = () => {
        navigate(-1);  // Navigate back to the previous page
    };

    return (
        <div>
            {/* Conditionally load PasswordModuleContent before the Container */}
            {moduleId === "PasswordModule" && <PasswordModuleContent />}
            {moduleId === "SecureSoftwareModule" && <SecureSoftwareDevelopmentModule />}
            {moduleId === "DataHandlingAndStorageModule" && <DataHandlingAndStorageModule />}
            {moduleId === "AccessControlIdentityManagement" && <AccessControlIdentityManagementModule />}
            {moduleId === "PersonalDataSecurityModule" && <PersonalDataSecurityModule />}
            {moduleId === "SecureOnlinePaymentsModule" && <SecureOnlinePaymentsModule />}

            <Container>
                    <h2>{moduleId} Quiz</h2>

                    {unanswered && (  // Display alert if unanswered questions exist
                        <Alert variant="danger">
                            Please answer all questions before submitting the quiz.
                        </Alert>
                    )}

                    {Array.isArray(questions) && questions.length > 0 ? (
                        questions.map((question, index) => (
                            <React.Fragment key={question._id}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={12}>
                                        {index + 1}. {question.questionText}
                                    </Form.Label>
                                    <Col sm={12}>
                                        {question.options.map((option, i) => (
                                            <Form.Check
                                                key={i}
                                                type="radio"
                                                label={option}
                                                name={`question${question._id}`}
                                                id={`question${question._id}option${i}`}
                                                onChange={() => handleAnswerChange(question._id, option)}
                                            />
                                        ))}
                                    </Col>
                                </Form.Group>
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No questions available</p>
                    )}

                    {/* Submit Button */}
                    <Button onClick={calculateScore}>Submit</Button>

                    {/* Green Go Back Button with a small gap */}
                    <Button
                        variant="success"  // Bootstrap class for green color
                        onClick={handleGoBack}
                        className="ms-2"  // Adds a small left margin
                    >
                        Go Back
                    </Button>
            </Container>
            <Footer />
        </div>
    );
};

export default ModuleQuiz;
