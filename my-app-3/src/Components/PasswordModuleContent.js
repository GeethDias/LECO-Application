import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const PasswordModuleContent = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate answers
    const correctAnswer1 = "Deny the login and immediately reset your password – This could be an unauthorized attempt, and securing your account is the priority.";
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
            <h1>Welcome to the Password Policy Module! 🔐</h1>
            <p>Hey there! Ready to level up your password game? 🛡️ In this module, we're going to show you why having a strong password isn't just a good idea—it's crucial for keeping you and LECO safe from cyber baddies! 🦹‍♂️</p>
            <p>You'll learn:</p>
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
            <p>By the end, you'll be a password expert, ready to guard against those pesky cyber threats! 💪 Let’s get started!</p>

            <h2>Introduction</h2>
            <p>Your password is the key to securing your access to company resources. At Lanka Electricity Company Private Limited (LECO), the safety of our information systems depends heavily on the strength and confidentiality of employee passwords. This module will guide you on the best practices to follow when creating and managing your passwords to ensure the highest level of security.</p>

            <h4>1. Personal Responsibility</h4>
            <p>As an employee of LECO, you are personally responsible for all activities performed under your logon credentials. Every action taken using your account is attributed to you, so it's essential to keep your password secure and confidential at all times.</p>
            <p>Do not share your password with anyone, including IT staff, administrators, or colleagues. This policy applies under all circumstances.</p>
            <p>If someone asks for your password, kindly direct them to this password policy or refer them to the Head of Engineering.</p>

            <h4>2. Password Confidentiality</h4>
            <p>Keeping your password secure is your responsibility. To ensure its confidentiality:</p>
            <ul>
              <li>Never give, tell, share, or even hint at your password to anyone, including friends, family, or colleagues.</li>
              <li>Avoid using the "remember password" feature in browsers and applications (e.g., email programs, web browsers).</li>
            </ul>


            <h4>3. Reporting Compromised Passwords</h4>
            <p>If you suspect or are aware that your password has been compromised, you must:</p>
            <ul>
              <li>Immediately report the issue to the Head of Engineering.</li>
              <li>Change your password without delay to prevent unauthorized access.</li>
            </ul>

            <h4>4. Strong Password Guidelines</h4>
            <p>Creating a strong password is critical to preventing unauthorized access. Follow these tips:</p>
            <ul>
              <li>Passwords should be at least 8 characters long.</li>
              <li>Use a combination of letters (upper and lowercase), numbers, and special characters to increase complexity.</li>
              <li>Avoid using easily guessable personal information, such as your name, date of birth, or common phrases.</li>
              <li>Change your password every 45 days to maintain security.</li>
            </ul>

            <h4>5. Different Passwords for Different Systems</h4>
            <p>To further enhance security, it’s advisable to use different passwords for various systems. This way, if one password is compromised, your other accounts remain protected.</p>

            <h4>6. Technical Enforcements</h4>
            <p>Some password security measures, such as password length or expiration, may be enforced automatically by our IT systems. These policies are in place to support your efforts in maintaining secure access to our systems.</p>
            <p>Your password is the first line of defense in protecting LECO’s systems and information. By following these guidelines, you contribute to a safer, more secure workplace. Always remember that password security is not just an IT issue but a personal responsibility.</p>
          </Card>

          <br />
          <Card className="p-4">
            <h2>Scenario Based Learning</h2>
            <Form onSubmit={handleSubmit}>
              <h4>Scenario 1</h4>
              <p>You receive a notification on your phone about a login attempt to your work account from an unfamiliar location. You didn’t try to log in, and the notification asks you to either allow or deny the login.</p>
              <Form.Group>
                <Form.Label>Q1. What should you do next?</Form.Label>
                <Form.Control as="select" value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
                  <option>Select an answer</option>
                  <option>Allow the login – It might be a glitch, and there's no harm in allowing it.</option>
                  <option>Ignore the notification – It’s probably nothing important.</option>
                  <option>Deny the login and immediately reset your password – This could be an unauthorized attempt, and securing your account is the priority.</option>
                  <option>Contact the IT department – Report the suspicious activity before taking further action.</option>
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
          <br/>
          <Card className="p-4">
            <h2>Watch the video</h2>
            {/* Video component */}
            <video width="800" controls>
              <source src="/videos/Introduction-to-Password-Security-Awareness.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordModuleContent;