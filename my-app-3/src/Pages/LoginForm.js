import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginForm.css'; // Add CSS for better styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            const { token, role, userid } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            localStorage.setItem('id', userid);
            window.location.href = role === 'AdminUser' ? '/admin/dashboard' : '/Select-Department';
        } catch (error) {
            if (error.response && error.response.data.error) {
                alert(error.response.data.error); // Show specific error message from the server
            } else {
                alert('Invalid credentials');
            }
        }
    };

    return (
        <div className="login-page">
            {/* Login Form Section */}
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>

                {/* New user? Register here link */}
                <div className="register-link">
                    <p>New user? <Link to="/register">Register here</Link></p>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Copyright: IT Division, Lanka Electricity Company (Private) Limited. All Rights Reserved.</p>
                <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/contact">Contact Us</a></p>
            </footer>
        </div>
    );
};

export default Login;
