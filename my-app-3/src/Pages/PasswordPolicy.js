import React, { useEffect, useState } from 'react';
import MyNavbar from '../Components/Navbar';
import ImageOverlays from '../Components/ImageOverlays';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PasswordPolicy = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const moduleId = "PasswordModule";
        
        // Fetching password module questions
        fetch(`/api/questions?moduleId=${moduleId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setQuestions(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const calculateScore = () => {
        console.log("User's Answers:", answers);
        let score = 0;
    
        questions.forEach(question => {
            if (answers[question._id] === question.correctAnswer) {
                score += 1;  // Increment score for each correct answer
                console.log(`Checking question: ${question._id}, User's Answer: ${answers[question._id]}, Correct Answer: ${question.correctAnswer} score:${score}`);
            }
        });
    
        // Navigate to results page
        navigate('/ResultsPage', { state: { score, totalQuestions: questions.length } });
    };

    const handleAnswerChange = (questionId, selectedOption) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedOption
        }));
    };

    return (
        <div>
            <MyNavbar />
            

            <Container>
                {/* Welcome Note */}
                <section className="welcome-note">
                    <h2>Welcome to the Password Policy Module! 🔐</h2>
                    <p>Hey there! Ready to level up your password game? 🛡️ In this module, we're going to show you why having a strong password isn't just a good idea—it's crucial for keeping you and LECO safe from cyber baddies! 🦹‍♂️</p>
                    <h4>You'll learn:</h4>
                    <ul>
                        <li>How to create a password that's both strong and easy to remember.</li>
                        <li>Why length matters more than complexity.</li>
                        <li>What the most common password mistakes are (and how to avoid them like a pro).</li>
                    </ul>
                    <p>And it won’t be just boring reading! We’ve added:</p>
                    <ul>
                        <li>Fun quizzes to test your knowledge 🧠</li>
                        <li>Videos that break down the do's and don'ts in under 5 minutes 🎥</li>
                    </ul>
                </section>

                {/* Quiz Section */}
                <h2>Security Awareness Quiz</h2>
                {questions.map((question, index) => (
                    <Form.Group as={Row} className="mb-3" key={question._id}>
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
                ))}

                <button onClick={calculateScore}>Submit</button>
            </Container>
        </div>
    );
};

export default PasswordPolicy;
