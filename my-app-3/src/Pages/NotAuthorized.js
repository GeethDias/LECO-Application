import React from 'react';
import './NotAuthorized.css'; // Add this CSS file for styling

const NotAuthorized = () => {
    return (
        <div className="not-authorized-container">
            <h1>403 - Not Authorized</h1>
            <p>You do not have permission to access this page.</p>
        </div>
    );
};

export default NotAuthorized;
