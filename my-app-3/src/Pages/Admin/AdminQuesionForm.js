import React, { useState } from 'react';
import MyNavbar from '../../Components/Navbar';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const AddQuestion = () => {
    const [moduleId, setModuleId] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [numOptions, setNumOptions] = useState(2);  // Default to 2 options
    const [options, setOptions] = useState(['', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    // Available module IDs for the dropdown
    const moduleIds = [
        'PasswordModule',
        'BYODPolicyModule',
        'RemoteAccessModule',
        'InternetUsageModule'
    ];

    // Handle changing the number of options
    const handleNumOptionsChange = (e) => {
        let num = parseInt(e.target.value, 10);
        
        // Prevent invalid values
        if (isNaN(num) || num < 2) {
            num = 2;
        } else if (num > 6) {
            num = 6;
        }
        
        setNumOptions(num);
        
        // Adjust the options array size based on selected number
        if (num > options.length) {
            setOptions([...options, ...Array(num - options.length).fill('')]);
        } else {
            setOptions(options.slice(0, num));
        }
    };

    // Handle changing individual option text
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestion = {
            moduleId,
            questionText,
            options,
            correctAnswer
        };

        // Make a POST request to your backend to add the question
        fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuestion),
        })
        .then(response => response.json())
        .then(data => {
            alert('Question added successfully!');
            // Reset the form after successful submission
            setModuleId('');
            setQuestionText('');
            setNumOptions(2);
            setOptions(['', '']);
            setCorrectAnswer('');
        })
        .catch(error => console.error('Error adding question:', error));
    };

    return (
        <div>
            <MyNavbar />
            <Container>
                <h2>Add a New Question</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Module ID</Form.Label>
                        <Col sm={10}>
                            <Form.Select 
                                value={moduleId} 
                                onChange={(e) => setModuleId(e.target.value)} 
                                required
                            >
                                <option value="">Select Module</option>
                                {moduleIds.map((id) => (
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
                                min="2" 
                                max="6" 
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
                            <Form.Select 
                                value={correctAnswer} 
                                onChange={(e) => setCorrectAnswer(e.target.value)} 
                                required
                            >
                                <option value="">Select Correct Answer</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option}>{`Option ${index + 1}`}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Question
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddQuestion;
