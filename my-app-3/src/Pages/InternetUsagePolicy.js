import React, { useEffect, useState } from 'react';
import MyNavbar from '../Components/Navbar';
import ImageOverlays from '../Components/ImageOverlays';
import { Container, Form, Row, Col } from 'react-bootstrap';

const InternetUsagePolicy = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

      const moduleId = "InternetUsageModule";

        fetch(`/api/questions?moduleId=${moduleId}`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setQuestions(data)
              
            })
            .catch(error => console.error('Error fetching data:', error));
            
    }, []);

    
    return (
        <div>
            <MyNavbar/>
            <ImageOverlays/>

            <Container>
                <h2>Internet Usage Policy Awareness Quiz</h2>
                
                {questions.map((question, index) => (
                    <Form.Group as={Row} className="mb-3" key={question.id}>
                        <Form.Label as="legend" column sm={12}>
                            {index + 1}. {question.questionText}
                        </Form.Label>
                        <Col sm={12}>
                            {question.options.map((option, i) => (
                                <Form.Check
                                    key={i}
                                    type="radio"
                                    label={option}
                                    name={`question${question.id}`}
                                    id={`question${question.id}option${i}`}
                                />
                            ))}
                        </Col>
                    </Form.Group>
                ))}
            </Container>
        </div>
    );
};

export default InternetUsagePolicy;
