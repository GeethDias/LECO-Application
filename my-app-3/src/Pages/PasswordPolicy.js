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
        //fetching password module questions
        fetch(`/api/questions?moduleId=${moduleId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setQuestions(data)

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
    
        //alert(`Your score is: ${score} out of ${questions.length}`);
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
            <ImageOverlays />

            <Container>
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
