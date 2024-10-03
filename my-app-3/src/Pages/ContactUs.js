import './ContactUs.css'; // Add a specific CSS file for ContactUs page styling

const ContactUs = () => {

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to reach out to us using the form below.</p>

            <div className="contact-info">
                <h3>Our Contact Details</h3>
                <p>Email: support@leco.lk</p>
                <p>Phone: +94 11 123 4567</p>
                <p>Address: 123 LECO Street, Colombo, Sri Lanka</p>
            </div>
        </div>
    );
};

export default ContactUs;
