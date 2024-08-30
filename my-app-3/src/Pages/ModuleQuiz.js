import React, { useEffect, useState } from 'react';
import MyNavbar from '../Components/Navbar';
import ImageOverlays from '../Components/ImageOverlays';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ModuleQuiz = () => {
    const { moduleId } = useParams();  // Get the moduleId from the URL
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/api/questions?moduleId=${moduleId}`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
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

    
    console.log("Module id is ", moduleId)
    return (
        <div>
            <MyNavbar />
            <ImageOverlays />
            <Container>
                <h2>{moduleId} Quiz</h2>
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
                <Button onClick={calculateScore}>Submit</Button>
            </Container>
        </div>
    );
};

export default ModuleQuiz;
