import './LandingPage.css'; // Add CSS for better styling

const LandingPage = () => {  // Corrected component name
    return (
        <div className="login-page">
            
            {/* Header Section */}
            <header className="header">

                <div className="header-content">
                    <h1>LECO Security Training & Awareness Portal</h1>
                    <p>Welcome to LECO's platform designed to enhance the information security knowledge and awareness of all employees. Protecting our company’s digital infrastructure starts with you!</p>
                </div>
            </header>

            {/* About Section */}
            <section className="about">
                <h2>What is this Application?</h2>
                <p>
                    This application is designed for Lanka Electricity Company (LECO) employees to strengthen their understanding of information security policies and best practices. It provides comprehensive training to help employees understand security policies, common violations within LECO, and how to prevent security threats. Additionally, the platform serves as a resource to keep users updated on the latest security trends and to help ensure compliance with LECO’s security protocols.
                </p>
            </section>

            {/* Purpose Section */}
            <section className="purpose">
                <h2>Our Purpose</h2>
                <p>
                    The primary purpose of this application is to safeguard LECO’s digital assets by educating employees about the importance of cybersecurity. It aims to help employees recognize potential security threats, understand and follow LECO's security policies, and ultimately reduce the risk of data breaches through active participation in learning and compliance.
                </p>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <p>
                    This application is simple to use. Employees can log in using their LECO credentials, after which they can access training modules that are specifically tailored to their roles within the company. The platform provides engaging, interactive exercises and quizzes to ensure employees fully understand the content. Employees can also track their progress and view their compliance with LECO’s security policies through the dashboard. Moreover, the application regularly updates users on new security policies and potential threats, ensuring they stay informed.
                </p>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Use This Application?</h2>
                <p>
                    The LECO Security Training & Awareness platform is vital in ensuring employees are well-informed about the company’s information security policies. It provides interactive training, helps track compliance, and keeps employees up-to-date with emerging security threats. By using this application, employees play an active role in protecting LECO’s digital infrastructure, reducing the likelihood of security breaches and maintaining the organization’s data integrity.
                </p>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Lanka Electricity Company Private Limited (LECO). All rights reserved.</p>
                <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/contact">Contact Us</a></p>
            </footer>
        </div>
    );
};

export default LandingPage;
