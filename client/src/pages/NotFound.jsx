import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 bg-cjn-secondary text-cjn-text-main">
            <h1 className="text-5xl font-bold text-cjn-primary mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="bg-cjn-primary text-cjn-text-light py-3 px-6 rounded-md text-lg font-semibold no-underline hover:bg-blue-700 transition-colors">
                Go to Home Page
            </Link>
        </div>
    );
};

export default NotFound;