import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PersonalDataSecurityModule = () => {
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
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalDataSecurityModule;
