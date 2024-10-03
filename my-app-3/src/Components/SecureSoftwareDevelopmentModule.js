import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SecureSoftwareDevelopmentModule = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="p-4">
            <h1>Welcome to the Secure Software Development Module! 💻🔐</h1>
            <p>Ready to dive into the world of secure coding? 🌐 Whether you’re a seasoned developer or just getting started, this module will walk you through the essentials of writing code that stands up to security threats! 🛡️</p>
            <p>Here’s what we’ll cover:</p>
            <ul>
              <li>Best practices for keeping your code airtight and free from vulnerabilities.</li>
              <li>Why thinking about security from day one can save a lot of headaches later.</li>
              <li>Common pitfalls like SQL injection, XSS attacks, and how to avoid them.</li>
            </ul>
            <p>And, of course, it’s interactive!</p>
            <ul>
              <li>Challenge yourself with quizzes to see how secure your coding knowledge is 🔍</li>
              <li>Watch videos that explain complex security concepts in simple terms 🎬</li>
            </ul>
            <p>By the end, you’ll have the tools to write cleaner, safer code and keep LECO’s systems running smooth and secure! Let’s get coding! 👨‍💻👩‍💻</p>

            <h2>Introduction</h2>
            <p>As technology advances, so do the threats to the systems and software we develop. At Lanka Electricity Company (LECO), ensuring the security of software from the earliest stages of development is essential to safeguarding our operations and data. This module provides guidance for IT department employees on best practices and principles for secure software development.</p>

            <h4>1. Embrace a Security-First Mindset</h4>
            <p>Security should be integrated into every stage of the software development lifecycle (SDLC). Whether designing, coding, or testing, security must always be a priority:</p>
            <ul>
              <li><strong>Secure by design:</strong> Make security a part of your design from the start, not as an afterthought.</li>
              <li><strong>Threat modeling:</strong> Before coding begins, identify potential security risks and vulnerabilities that may affect the application and address them during development.</li>
            </ul>

            <h4>2. Secure Coding Practices</h4>
            <p>Using secure coding practices helps prevent common vulnerabilities that attackers might exploit. Follow these guidelines to write secure code:</p>
            <ul>
              <li><strong>Input validation:</strong> Always validate user input to ensure it’s of the expected format and within permitted parameters. This prevents attacks such as SQL injection, cross-site scripting (XSS), and buffer overflows.</li>
              <li><strong>Sanitize outputs:</strong> Ensure that data sent to the browser or database is sanitized to avoid the introduction of malicious code.</li>
              <li><strong>Authentication and authorization:</strong> Implement strong authentication mechanisms, such as multi-factor authentication, and ensure that users are authorized to access only the resources they need.</li>
              <li><strong>Use encryption:</strong> Ensure sensitive data, such as passwords or personally identifiable information (PII), is encrypted both in transit and at rest.</li>
              <li><strong>Error handling:</strong> Avoid displaying detailed error messages that might provide attackers with information about the system’s internals.</li>
              <li><strong>Avoid hardcoding credentials:</strong> Never embed sensitive information like passwords or API keys directly into the source code.</li>
            </ul>

            <h4>3. Follow Secure Development Frameworks and Standards</h4>
            <p>Where possible, use frameworks and libraries that promote secure development:</p>
            <ul>
              <li><strong>OWASP Secure Coding Guidelines:</strong> Follow the Open Web Application Security Project (OWASP) secure coding practices to protect against common vulnerabilities.</li>
              <li><strong>ISO/IEC 27034:</strong> Implement standards like ISO/IEC 27034, which provide a framework for secure application development.</li>
              <li><strong>Use trusted libraries:</strong> Ensure that third-party libraries and open-source components are from trusted sources, and regularly check for vulnerabilities.</li>
            </ul>

            <h4>4. Conduct Regular Code Reviews and Security Testing</h4>
            <p>It’s crucial to identify security issues as early as possible:</p>
            <ul>
              <li><strong>Code reviews:</strong> Engage in peer code reviews with a focus on identifying potential security weaknesses.</li>
              <li><strong>Static Application Security Testing (SAST):</strong> Use static analysis tools to detect vulnerabilities in the code before deployment.</li>
              <li><strong>Dynamic Application Security Testing (DAST):</strong> Test the application in real-world environments to identify security issues that could arise during runtime.</li>
              <li><strong>Automated testing:</strong> Incorporate automated security testing to find security issues during the development process.</li>
            </ul>

            <h4>5. Secure Software Configuration</h4>
            <p>Once the software is deployed, ensure its configuration is secure:</p>
            <ul>
              <li><strong>Principle of least privilege:</strong> Ensure that software components run with the minimum level of permissions required to perform their tasks.</li>
              <li><strong>Secure default configurations:</strong> Ensure the default settings of the software are secure and require any user to explicitly opt-in for any insecure feature.</li>
              <li><strong>Patch management:</strong> Regularly apply security patches and updates to the software to protect against newly discovered vulnerabilities.</li>
            </ul>

            <h4>6. Maintain Secure Development Environments</h4>
            <p>Ensure that the development environments are secure to avoid any breaches during the coding process:</p>
            <ul>
              <li><strong>Access controls:</strong> Limit access to the development environment to authorized personnel only.</li>
              <li><strong>Segregation of environments:</strong> Keep the development, testing, and production environments separated to prevent cross-contamination of sensitive data.</li>
              <li><strong>Secure repositories:</strong> Use secure version control systems and repositories for storing and managing source code.</li>
            </ul>

            <h4>7. Incident Response in Development</h4>
            <p>Have a plan in place for dealing with security incidents during the software development lifecycle:</p>
            <ul>
              <li><strong>Logging and monitoring:</strong> Implement logging to monitor for suspicious activity within the software. Ensure logs are secure and retained for the appropriate period.</li>
              <li><strong>Vulnerability management:</strong> Ensure that any discovered vulnerabilities are logged, analyzed, and remediated as quickly as possible.</li>
            </ul>

            <p>Secure software development is not just the responsibility of IT security personnel but of every software developer at LECO. By integrating security into every phase of the development process, we can reduce vulnerabilities and protect both our systems and our users.</p>
            <p>By following the best practices outlined in this module, LECO's IT department can develop secure, reliable software that stands strong against evolving cyber threats.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SecureSoftwareDevelopmentModule;
