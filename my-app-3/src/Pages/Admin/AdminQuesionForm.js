import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const AddQuestion = () => {
    const [moduleId, setModuleId] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [numOptions, setNumOptions] = useState(2);  // Default to 2 options
    const [options, setOptions] = useState(['', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [questions, setQuestions] = useState([]);  // For storing fetched questions

    // Available module IDs for the dropdown
    const moduleIds = [
        'PasswordModule',
        'BYODPolicyModule',
        'RemoteAccessModule',
        'InternetUsageModule',
        "SecureSoftwareModule",
        "DataHandlingAndStorageModule",
        "AccessControlIdentityManagement",
        "PersonalDataSecurityModule",
        "SecureOnlinePaymentsModule"
    ];

    // Fetch questions from backend when a module is selected
    useEffect(() => {
        if (moduleId) {
            fetch(`/api/questions?moduleId=${moduleId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => response.json())
            .then(data => setQuestions(data))
            .catch(error => console.error('Error fetching questions:', error));
        }
    }, [moduleId]);

    // Handle changing the number of options
    const handleNumOptionsChange = (e) => {
        let num = parseInt(e.target.value, 10);
        if (isNaN(num) || num < 2) num = 2;
        else if (num > 6) num = 6;
        setNumOptions(num);
        if (num > options.length) setOptions([...options, ...Array(num - options.length).fill('')]);
        else setOptions(options.slice(0, num));
    };

    // Handle changing individual option text
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Handle form submission for adding a question
    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = { moduleId, questionText, options, correctAnswer };
        const token = localStorage.getItem('token');

        if (!token) {
            console.error("No token found in localStorage");
            return;
        }

        fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newQuestion),
        })
        .then(response => response.json())
        .then(() => {
            alert('Question added successfully!');
            setModuleId('');
            setQuestionText('');
            setNumOptions(2);
            setOptions(['', '']);
            setCorrectAnswer('');
        })
        .catch(error => console.error('Error adding question:', error));
    };

    // Handle question deletion
    const handleDelete = (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found in localStorage");
            return;
        }

        fetch(`/api/questions/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(() => {
            alert('Question deleted successfully!');
            setQuestions(questions.filter(question => question._id !== id));  // Update state after deletion
        })
        .catch(error => console.error('Error deleting question:', error));
    };

    return (
        <div>
            <Container>
                <h2>Add a New Question</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Module ID</Form.Label>
                        <Col sm={10}>
                            <Form.Select value={moduleId} onChange={(e) => setModuleId(e.target.value)} required>
                                <option value="">Select Module</option>
                                {moduleIds.map(id => (
                                    <option key={id} value={id}>{id}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Question Text</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Enter question text"
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Number of Options</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                value={numOptions}
                                onChange={handleNumOptionsChange}
                                min={2}
                                max={6}
                                required
                            />
                        </Col>
                    </Form.Group>

                    {options.map((option, index) => (
                        <Form.Group as={Row} className="mb-3" key={index}>
                            <Form.Label column sm={2}>Option {index + 1}</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter option ${index + 1}`}
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    required
                                />
                            </Col>
                        </Form.Group>
                    ))}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Correct Answer</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Enter correct answer"
                                value={correctAnswer}
                                onChange={(e) => setCorrectAnswer(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit">Add Question</Button>
                </Form>
                    <br/>
                <h3>Existing Questions for The Selected Module</h3>
                {questions.length > 0 ? (
                    <ul>
                        {questions.map(question => (
                            <li key={question._id}>
                                {question.questionText}
                                <Button variant="danger" onClick={() => handleDelete(question._id)}>
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No questions found for this module.</p>
                )}
            </Container>
        </div>
    );
};

export default AddQuestion;
