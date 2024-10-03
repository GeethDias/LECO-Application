import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AccessControlIdentityManagementModule = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="p-4">
            <h1>Welcome to the Access Control & Identity Management Module! 🚪🔑</h1>
            <p>Ever wonder how LECO keeps track of who’s doing what on our systems? 🤔 Well, this module is all about controlling who gets access to what, and making sure the right people have the right permissions. It's like being the bouncer of the digital world! 💻🕶️</p>
            <p>In this module, you’ll discover:</p>
            <ul>
              <li>How access control works and why it’s important.</li>
              <li>The different types of access controls, like role-based access and multi-factor authentication 🔐.</li>
              <li>How identity management helps keep track of everyone in the system without losing your mind!</li>
            </ul>
            <p>And yes, we've kept it interactive:</p>
            <ul>
              <li>Short, engaging quizzes to see if you’ve got the hang of it 💡.</li>
              <li>Videos that break down tricky concepts and show real-life examples 🎬.</li>
            </ul>
            <p>By the end, you'll know how to manage digital identities like a pro and keep LECO's systems secure from unauthorized access! Let’s dive in! 🚀</p>

            <h2>Introduction</h2>
            <p>Access control and identity management are essential for ensuring that only authorized individuals can access sensitive systems and information at Lanka Electricity Company (LECO). This module outlines best practices for managing user access, ensuring security, and maintaining control over who can access LECO's critical resources.</p>

            <h4>1. Access Control Basics</h4>
            <p>Access control defines how permissions are granted to employees and systems to access specific data or resources. At LECO, strict access control ensures that:</p>
            <ul>
              <li><b>Access is role-based:</b> Permissions are granted based on job responsibilities, ensuring employees only access the information they need to perform their duties.</li>
              <li><b>Principle of least privilege:</b> Users are given the minimum level of access required to complete their tasks, reducing the risk of unauthorized data exposure.</li>
            </ul>

            <h4>2. Identity Management Practices</h4>
            <p>Identity management involves securely managing user identities to ensure the right people have the right access. Key practices include:</p>
            <ul>
              <li><b>Unique user accounts:</b> Each employee must have their own unique account to avoid shared credentials and to ensure accountability.</li>
              <li><b>Authentication:</b> LECO requires strong passwords and may implement multi-factor authentication (MFA) to verify users’ identities before granting access.</li>
              <li><b>Regular account reviews:</b> User access is reviewed periodically to ensure permissions remain appropriate and outdated accounts are disabled or removed.</li>
            </ul>

            <h4>3. Authentication Methods</h4>
            <p>Strong authentication methods ensure that access to systems and data is secure:</p>
            <ul>
              <li><b>Password policies:</b> Employees must follow strong password guidelines, including using complex passwords and changing them regularly.</li>
              <li><b>Multi-factor authentication (MFA):</b> For critical systems, MFA may be required, adding an extra layer of security by combining something you know (password) with something you have (authentication app or device).</li>
            </ul>

            <h4>4. Handling Privileged Accounts</h4>
            <p>Privileged accounts, such as those used by system administrators, have elevated permissions and therefore require stricter controls:</p>
            <ul>
              <li><b>Strict monitoring:</b> Activities on privileged accounts are closely monitored to prevent misuse.</li>
              <li><b>Limited use:</b> Privileged accounts should only be used when necessary and must not be used for routine tasks.</li>
            </ul>

            <h4>5. Access Request and Approval</h4>
            <p>At LECO, gaining access to systems or data requires a formal request and approval process:</p>
            <ul>
              <li><b>Request procedure:</b> Employees must submit access requests that specify their needs. Approval must be granted by a supervisor or the IT department before access is provided.</li>
              <li><b>Documentation:</b> All access requests, changes, and removals are documented to ensure a clear audit trail.</li>
            </ul>

            <h4>6. Handling Access Changes and Terminations</h4>
            <p>To maintain security, access changes must be managed effectively:</p>
            <ul>
              <li><b>Access revocation:</b> When an employee changes roles or leaves the organization, their access must be promptly reviewed and adjusted or revoked.</li>
              <li><b>Immediate action:</b> In the case of terminations, access should be disabled immediately to prevent unauthorized access.</li>
            </ul>

            <p>Effective access control and identity management are critical to safeguarding LECO’s systems and information. By following these guidelines, employees help ensure that access is limited to those who are authorized, and that sensitive information remains secure.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccessControlIdentityManagementModule;
