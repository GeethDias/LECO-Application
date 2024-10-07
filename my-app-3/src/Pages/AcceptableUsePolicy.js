import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';

const AcceptableUsePolicy = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <h1 className="text-center mb-4">Acceptable Usage Policy</h1>
            <h3><strong>3. Prohibited Activities</strong></h3>
            <p><strong>3.1 Illegal Activities</strong></p>
            <ul>
              <li>Engaging in activities that violate laws and regulations followed by Lanka Electricity Private Company Limited</li>
              <li>Downloading or copying training module contents available in this application is considered an illegal activity.</li>
              <li>Activities that fall under cybercrime, hacking are illegal.</li>
              <li>Sharing passwords, permitting other users to use your account or usage of another employee’s user credentials is strictly prohibited and may lead to the potential suspension of your account.</li>
              <li>Accessing the web application through personal devices that are unauthorized by the head of the engineering department is strictly prohibited.</li>
            </ul>
            <p><strong>3.2 Unlawful Content</strong></p>
            <ul>
              <li>Distributing content that commits a breach of intellectual property rights, including copyrights, trademarks, or trade secrets.</li>
              <li>Attempting to share content that promotes violence or terrorism is strictly prohibited.</li>
              <li>Distributing images or videos available on module pages.</li>
            </ul>
            <p><strong>3.3 Security Violations</strong></p>
            <ul>
              <li>Users are responsible for maintaining their account credentials for this application.</li>
              <li>Gaining unauthorized access to the web application is considered a security violation.</li>
              <li>You must respect and not attempt to bypass security, or access restrictions in place on the web application.</li>
              <li>For passwords, users should maintain at least eight characters with the combination of one or more special characters.</li>
              <li>For passwords, users must avoid using characters that are associated with names, birthdays, etc.</li>
              <li>You must report to the IT Help Desk if any of the users of this application identify security flaws of this application.</li>
            </ul>
            <p><strong>3.4 Misrepresentation</strong></p>
            <ul>
              <li>Creating false user profiles or impersonating someone else.</li>
              <li>Providing false information or any interaction with the application.</li>
            </ul>
            <p><strong>3.5 Spam and Advertising</strong></p>
            <ul>
              <li>Sharing unrequested messages, advertisements, or promotions through the application.</li>
              <li>Posting or distributing content to deceive other users or manipulate users of the application.</li>
              <li>Sharing content such as advertisements and posters that promote another business, services, or products is strictly prohibited.</li>
            </ul>
            <p><strong>3.6 Harassment and Abuse</strong></p>
            <ul>
              <li>Spreading misinformation and sharing content that causes psychological damage to other users of this application is strictly prohibited.</li>
              <li>Sharing content based on gender, race, nationality, or religion is strictly prohibited.</li>
            </ul>
            <p><strong>3.7 Application Misuse</strong></p>
            <ul>
              <li>Overloading the application intentionally with large requests can lead to denial of service.</li>
              <li>Using an application for any purpose other than its intended use.</li>
            </ul>
            <h3><strong>4. User Responsibilities</strong></h3>
            <p>The responsibilities of employees who use the web application are described in this section. It describes the appropriate behavior practices that the employees should adhere to guarantee the application is used securely, legally, and efficiently.</p>
            <p><strong>4.1 Active Participation in Awareness Modules</strong></p>
            <ul>
              <li>Workers must actively participate in each of the application's security awareness modules. This includes finishing training courses, tests, and scenario-based instruction. Employees who actively participate are better able to comprehend security procedures and are more prepared to put these ideas into practice regularly.</li>
            </ul>
            <p><strong>4.2 Accountability for Security Behavior</strong></p>
            <ul>
              <li>It is expected employees to be accountable for their security behaviors. This entails identifying potential dangers and adhering to security rules that are taught through the program, such as protecting passwords and sensitive data. Accountability guarantees that every user contributes to upholding a safe and law-abiding work environment.</li>
            </ul>
            <p><strong>4.3 Adherence to Security Policies</strong></p>
            <ul>
              <li>Employees must abide by all security policies listed in the organization. This means managing passwords, utilizing company systems securely, and preserving data according to industry best practices. Adhering to these policies can help users maintain a safe and secure environment for corporate and personal data.</li>
            </ul>
            <p><strong>4.4 Safeguarding Login Credentials</strong></p>
            <ul>
              <li>Employees must protect their login information. Passwords must comply with the security requirements specified in the organization and be kept private. They should also not be shared with anybody.</li>
            </ul>
            <p><strong>4.5 Protection of Personal and Organizational Data</strong></p>
            <ul>
              <li>Employees are responsible for making sure that company and personal data is handled securely. This entails adhering to the application's recommended practices for data access, storage, and sharing. Employees contribute to preventing data breaches and preserving the integrity of business systems by protecting sensitive information.</li>
            </ul>
            {/* Continue adding the remaining sections as needed */}
          </Card>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default AcceptableUsePolicy;
