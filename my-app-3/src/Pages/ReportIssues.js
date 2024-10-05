import React, { useState } from 'react';
import axios from 'axios';

const ReportIssues = ({ user }) => {
    const [issueDescription, setIssueDescription] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!issueDescription) {
            setError('Please describe the issue.');
            return;
        }

        try {
            // Send issue to the backend
            const response = await axios.post('/api/issues/report', {
                email: user.email,   // Automatically selecting logged in user's email
                description: issueDescription
            });

            if (response.data.success) {
                setMessage('Issue reported successfully');
                setIssueDescription(''); // Clear the form
            } else {
                setError('Failed to report the issue.');
            }
        } catch (err) {
            console.error('Error reporting issue:', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="report-issue-container">
            <h2>Report an Issue</h2>

            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={user.email} disabled />  {/* Automatically selected email */}
                </div>

                <div>
                    <label>Issue Description:</label>
                    <textarea
                        value={issueDescription}
                        onChange={(e) => setIssueDescription(e.target.value)}
                        placeholder="Describe the issue here"
                    ></textarea>
                </div>

                <button type="submit">Submit Issue</button>
            </form>
        </div>
    );
};

export default ReportIssues;
