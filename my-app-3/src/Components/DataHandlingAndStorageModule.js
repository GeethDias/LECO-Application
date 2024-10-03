import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DataHandlingAndStorageModule = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="p-4">
            <h1>Welcome to the Data Handling and Storage Module! 🗄️💾</h1>
            <p>Data is like gold these days—valuable and in need of protection! 🛡️ In this module, we’ll dive into the best practices for handling and storing data at LECO, so it stays safe and sound.</p>
            <p>What we’ll cover:</p>
            <ul>
              <li>Handling data the right way (no, sticky notes with passwords don’t count 😉).</li>
              <li>The safest ways to store sensitive information (and why cloud vs. local storage matters).</li>
              <li>How to keep data secure while you're working on it and after you're done.</li>
            </ul>
            <p>And don’t worry, it’s not just theory! You’ll find:</p>
            <ul>
              <li>Interactive quizzes to help you make smart choices on the go 🧠.</li>
              <li>Videos that show real-world examples of secure (and not-so-secure) data handling 🎥.</li>
            </ul>
            <p>By the end, you'll know exactly how to keep LECO’s data safe from prying eyes! 🕵️‍♂️ Let’s get started!</p>

            <h2>Introduction</h2>
            <p>Data is one of the most valuable assets at Lanka Electricity Company (LECO). Proper handling and storage of data are crucial to maintaining its confidentiality, integrity, and availability. This module will provide employees with essential guidelines for securely managing LECO's data.</p>

            <h4>1. Data Confidentiality</h4>
            <p>Employees who have access to sensitive data must:</p>
            <ul>
              <li>Keep data confidential: Do not disclose business or technical information to unauthorized individuals.</li>
              <li>Report data breaches: If you detect a data leak or suspect misuse, report it immediately to the IT department.</li>
            </ul>

            <h4>2. Proper Data Handling Practices</h4>
            <p>To ensure data is handled securely:</p>
            <ul>
              <li>Limit access: Only access the data you are authorized to use. Avoid accessing sensitive data unless necessary for your job.</li>
              <li>Lock workstations: Always lock your computer when stepping away to prevent unauthorized access.</li>
              <li>Use secure channels: When transmitting sensitive information, ensure it is done via secure communication methods, such as encryption.</li>
            </ul>

            <h4>3. Data Storage Guidelines</h4>
            <p>When storing data:</p>
            <ul>
              <li>Use approved systems: Store data only on approved LECO systems and avoid using unauthorized cloud storage platforms like Dropbox or Google Drive.</li>
              <li>Backup sensitive data: Ensure important data is regularly backed up in secure locations to prevent loss.</li>
              <li>Protect removable media: Handle authorized removable storage devices carefully and return them to the IT department for secure disposal when no longer in use.</li>
            </ul>

            <h4>4. Physical Security of Data</h4>
            <p>To protect physical data:</p>
            <ul>
              <li>Secure locations: Store paper copies of sensitive information in locked cabinets. Avoid leaving documents unattended in shared spaces.</li>
              <li>Limit printing of sensitive information: Use secure printing methods and collect documents promptly to prevent unauthorized access.</li>
            </ul>

            <h4>5. Incident Reporting</h4>
            <p>If you suspect or know that data has been compromised, immediately report the incident to the IT department for quick action.</p>

            <p>Following these simple data handling and storage practices ensures that LECO’s data remains safe from unauthorized access, breaches, or loss. Proper management of data is essential for both business success and maintaining trust.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DataHandlingAndStorageModule;
