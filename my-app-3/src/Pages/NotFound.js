import React from 'react';
import './NotFound.css';
import Footer from '../Components/Footer';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;
