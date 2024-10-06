import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';

const AboutThisSystem = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <h1 className="text-center mb-4">About This Application</h1>
            <p>
              Welcome to the LECO Information Security Awareness Portal. This application is designed to enhance
              employees' understanding of critical information security policies, with a special focus on the IT,
              HR, and finance departments. Our goal is to provide a comprehensive learning experience that not only
              improves your knowledge but also helps you apply security practices effectively in your daily work.
            </p>
            <p>
              The learning process begins with an initial knowledge check, allowing you to assess your current
              understanding of key information security principles. Based on your department, you will then have access
              to tailored modules that cover essential topics. Each module includes:
            </p>
            <ul>
              <li>Theoretical content for foundational knowledge,</li>
              <li>Scenario-based examples to demonstrate real-world applications,</li>
              <li>Interactive sessions to engage and reinforce learning,</li>
              <li>Videos that provide visual explanations and tutorials.</li>
            </ul>
            <p>
              Once you have completed the learning modules, you can take a final knowledge check to measure your
              progress. If you need further improvement, you can revisit the content or attempt a different module.
            </p>
            <p>
              We encourage you to explore this application to strengthen your awareness of information security,
              helping to protect both your work and the organization as a whole.
            </p>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AboutThisSystem;
