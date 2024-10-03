import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css'; // Import the scoped CSS

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [employmentId, setEmploymentId] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('HR');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const formData = { fullName, employmentId, email, department, password };

        try {
            await axios.post('/api/auth/register', formData);
            alert('Registration successful');
            window.location.href = '/login';
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Employment ID:</label>
                    <input
                        type="text"
                        value={employmentId}
                        onChange={(e) => setEmploymentId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <footer className="footer">
                <p>&copy; 2024 Copyright: IT Division, Lanka Electricity Company (Private) Limited. All Rights Reserved.</p>
                <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/ContactUs">Contact Us</a></p>
            </footer>
        </div>
    );
};

export default Register;
