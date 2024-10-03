import React, { useEffect, useState } from 'react';
import PasswordModuleContent from '../Components/PasswordModuleContent';
import Footer from '../Components/Footer';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
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


    const calculateScore = () => {
        let score = 0;
        questions.forEach(question => {
            if (answers[question._id] === question.correctAnswer) {
                score += 1;
            }
        });
        navigate('/ResultsPage', { state: { score, totalQuestions: questions.length } });
    };

    const handleAnswerChange = (questionId, selectedOption) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedOption
        }));
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

                {Array.isArray(questions) && questions.length > 0 ? (
                    questions.map((question, index) => (
                        <React.Fragment key={question._id}>
                            {/* Display question content if available */}
                            {/* {question.content && <div>{question.content}</div>} */}

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
