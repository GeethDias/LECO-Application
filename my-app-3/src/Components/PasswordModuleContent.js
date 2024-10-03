import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PasswordModuleContent = () => {
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

            {/* Video component */}
            <video width="800" controls>
              <source src="/videos/Network_Fundamentals_Security_Module.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

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
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordModuleContent;
