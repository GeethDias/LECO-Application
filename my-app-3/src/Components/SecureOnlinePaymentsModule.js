import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SecureOnlinePaymentsModule = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="p-4">
            <h1>Welcome to the Secure Online Payments Module! 💳🛡️</h1>
            <p>
              Ready to make your online payments safer than ever? Whether you’re shopping for groceries or paying bills, you need to know how to keep your transactions secure. 🚀
            </p>
            <p>In this module, we’ll cover:</p>
            <ul>
              <li>The best practices for safe online payments (because your money deserves it).</li>
              <li>How to spot phishing scams that target your payment info 🕵️‍♂️.</li>
              <li>The power of two-factor authentication (2FA) and why you should ALWAYS use it.</li>
            </ul>
            <p>What’s more? You won’t just be reading:</p>
            <ul>
              <li>Test your skills with some quick quizzes 🧩.</li>
              <li>Watch videos showing real-world payment hacks and how to avoid them 🎬.</li>
            </ul>
            <p>
              By the end, you’ll be handling your online payments like a cybersecurity ninja! 🥷 Let’s dive in!
            </p>

            <h2>Introduction</h2>
            <p>
              As Lanka Electricity Company (LECO) handles online transactions, ensuring the security of online payments is critical to protect both the company and its customers. This module provides best practices for managing secure online payments, safeguarding sensitive payment information, and complying with industry standards.
            </p>

            <h4>1. Protecting Customer Payment Data</h4>
            <p>It is essential to ensure the security and confidentiality of customers’ payment information:</p>
            <ul>
              <li><b>Encryption of payment data:</b> All sensitive payment information, including credit card details and personal information, must be encrypted during transmission and storage.</li>
              <li><b>PCI-DSS compliance:</b> LECO’s payment systems must comply with the Payment Card Industry Data Security Standard (PCI-DSS), which establishes requirements for secure payment processing.</li>
            </ul>

            <h4>2. Secure Payment Gateways</h4>
            <p>All online payments should be processed through secure, trusted payment gateways:</p>
            <ul>
              <li><b>Use of SSL/TLS:</b> Payment gateways must utilize SSL/TLS certificates to ensure secure communication between the customer’s browser and the payment processor.</li>
              <li><b>Tokenization:</b> Where possible, use tokenization to replace sensitive payment data with a unique identifier, reducing the risk of data theft.</li>
            </ul>

            <h4>3. Two-Factor Authentication (2FA)</h4>
            <p>To enhance the security of online payments, two-factor authentication (2FA) should be implemented:</p>
            <ul>
              <li><b>Authentication of payments:</b> Customers should be required to complete an additional verification step, such as entering a code sent via SMS, to confirm transactions.</li>
            </ul>

            <h4>4. Monitoring and Fraud Detection</h4>
            <p>Constant monitoring of payment transactions helps detect and prevent fraud:</p>
            <ul>
              <li><b>Real-time transaction monitoring:</b> LECO’s payment system should include tools for detecting suspicious activity or patterns indicative of fraud.</li>
              <li><b>Automatic alerts:</b> Alerts should be set up to notify the security team in case of unusual payment activity or attempts to bypass payment security measures.</li>
            </ul>

            <h4>5. Customer Awareness</h4>
            <p>Educating customers about secure payment practices is essential:</p>
            <ul>
              <li><b>Encourage strong passwords:</b> Customers should be advised to use strong, unique passwords for their payment accounts.</li>
              <li><b>Warn against phishing:</b> Remind customers to avoid clicking on suspicious links or sharing payment details through email or other unsecured channels.</li>
            </ul>

            <h4>6. Internal Security Measures</h4>
            <p>Internally, LECO must implement strict security controls for managing payment systems:</p>
            <ul>
              <li><b>Access control:</b> Only authorized personnel should have access to payment systems and customer data.</li>
              <li><b>Regular audits:</b> Conduct regular security audits and vulnerability assessments to ensure that payment systems remain secure and compliant with industry standards.</li>
            </ul>

            <p>
              Ensuring the security of online payments is essential to maintaining customer trust and protecting sensitive financial data. By following these guidelines, LECO can provide secure payment services while minimizing the risk of fraud or data breaches.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SecureOnlinePaymentsModule;
