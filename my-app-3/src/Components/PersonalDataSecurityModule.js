import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const PersonalDataSecurityModule = () => {
  
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate answers
    const correctAnswer1 = "Check the sender’s email address and contact the company directly to verify the request.";
    const correctAnswer2 = "All of the above.";

    if (answer1 === correctAnswer1 && answer2 === correctAnswer2) {
      setAlertMessage('Correct! You’ve selected the right answers. Well done!');
    } else {
      setAlertMessage('Incorrect answers. Please review and try again.');
    }

    setShowAlert(true); // Show alert with the result
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="p-4">
            <h1>Welcome to the Personal Data Security Module! 🛡️</h1>
            <p>Hey there! Ready to dive into the world of personal data security? 🔒 In this module, we're going to show you why keeping your personal information safe is just as important as locking your front door!</p>
            <p>You'll learn:</p>
            <ul>
              <li>What personal data really is and why hackers are after it.</li>
              <li>Simple ways to protect your personal info online and offline.</li>
              <li>How to spot phishing and other sneaky scams that target your data. 🕵️‍♂️</li>
            </ul>
            <p>And don't worry, we've got some cool stuff to keep it fun:</p>
            <ul>
              <li>Interactive quizzes to see how much you've learned! 🎯</li>
              <li>Videos with tips and tricks on protecting your data from cybervillains. 💻</li>
            </ul>
            <p>By the end of this module, you'll be ready to keep your personal data safe and sound! Let’s jump in and get secure! 🚀</p>

            <h2>Introduction</h2>
            <p>Protecting personal data is crucial for maintaining the privacy and security of individuals at Lanka Electricity Company (LECO). This module outlines best practices for handling, storing, and processing personal data to ensure compliance with data protection regulations and to safeguard against unauthorized access and breaches.</p>

            <h4>1. Understanding Personal Data</h4>
            <p>Personal data refers to any information that can identify an individual, such as names, addresses, contact details, identification numbers, financial information, and more. At LECO, it is essential to recognize the types of personal data that are collected and processed.</p>

            <h4>2. Data Collection and Purpose Limitation</h4>
            <p>When collecting personal data, LECO must adhere to the principle of purpose limitation:</p>
            <ul>
              <li>Limit data collection: Only collect personal data that is necessary for specific, legitimate purposes, such as customer service, billing, and communication.</li>
              <li>Transparency: Inform individuals about the purpose of data collection and how their information will be used, stored, and shared.</li>
            </ul>

            <h4>3. Data Security Measures</h4>
            <p>Implementing robust security measures is essential for protecting personal data:</p>
            <ul>
              <li>Encryption: Encrypt personal data both in transit and at rest to prevent unauthorized access.</li>
              <li>Access controls: Implement strict access controls to ensure that only authorized personnel can access personal data. Use role-based access to limit data visibility based on job responsibilities.</li>
              <li>Regular backups: Conduct regular backups of personal data to prevent loss due to technical failures or cyberattacks.</li>
            </ul>

            <h4>4. Data Retention and Disposal</h4>
            <p>Proper management of personal data throughout its lifecycle is crucial:</p>
            <ul>
              <li>Data retention policy: Establish clear policies for how long personal data will be retained, based on legal requirements and business needs.</li>
              <li>Secure disposal: Ensure that personal data is securely deleted or anonymized when it is no longer needed. Use reliable methods for destroying electronic and physical records.</li>
            </ul>

            <h4>5. Employee Training and Awareness</h4>
            <p>All employees must be aware of their responsibilities regarding personal data security:</p>
            <ul>
              <li>Training programs: Conduct regular training sessions to educate employees about data protection laws, LECO’s data security policies, and best practices for handling personal data.</li>
              <li>Reporting incidents: Encourage employees to report any suspected data breaches or security incidents immediately to the IT department.</li>
            </ul>

            <h4>6. Compliance with Regulations</h4>
            <p>LECO must comply with applicable data protection regulations, such as the General Data Protection Regulation (GDPR) and other local laws:</p>
            <ul>
              <li>Data subject rights: Be aware of individuals' rights regarding their personal data, including the right to access, rectify, or request the deletion of their information.</li>
              <li>Documentation: Maintain documentation of data processing activities, data protection impact assessments, and compliance measures.</li>
            </ul>

            <p>Protecting personal data is a shared responsibility at LECO. By following these guidelines and implementing robust data security measures, employees can help ensure the privacy and security of personal information, maintaining trust and compliance with regulatory requirements.</p>
          </Card>
          <br/>
          <Card className="p-4">
            <h2>Scenario Based Learning</h2>
            <Form onSubmit={handleSubmit}>
              <h4>Scenario 1</h4>
              <p>You receive an email from a service you use, asking you to verify your account by clicking on a link. The email looks official, but you don’t remember requesting any verification.</p>
              <Form.Group>
                <Form.Label>Q1. What should you do next?</Form.Label>
                <Form.Control as="select" value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
                  <option>Select an answer</option>
                  <option>Click the link to verify your account immediately. </option>
                  <option>Reply to the email with your personal details to confirm your identity.</option>
                  <option>Check the sender’s email address and contact the company directly to verify the request. </option>
                  <option>Ignore the email; it’s probably just spam. </option>
                </Form.Control>
              </Form.Group>
              <br />
              <h4>Scenario 2</h4>
              <p>What is a good follow-up step after resetting your password?</p>
              <Form.Group>
                <Form.Label>Q2. Choose the best action:</Form.Label>
                <Form.Control as="select" value={answer2} onChange={(e) => setAnswer2(e.target.value)}>
                  <option>Select an answer</option>
                  <option>Log out from all devices to ensure the security of your account.</option>
                  <option>Monitor your account activity to check for any unfamiliar actions.</option>
                  <option>Set up two-factor authentication (2FA) if it’s not already in place for an added layer of security.</option>
                  <option>All of the above.</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">Submit Answers</Button>

              {/* Alert to show the result */}
              {showAlert && (
                <Alert variant={alertMessage.includes('Correct') ? 'success' : 'danger'} className="mt-3">
                  {alertMessage}
                </Alert>
              )}
            </Form>
          </Card>
          <br/>
          <Card className="p-4">
            <h2>Watch the video</h2>
            {/* Video component */}
            <video width="800" controls>
              <source src="/videos/Introduction-to-Personal-Data-Security.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalDataSecurityModule;
