import React from 'react';
import '../styles/componentes/LoadingPage.css'; 

function LoadingPage() {
    return (
        <div className="trivia-container">
            <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
    );
}

export default LoadingPage;
