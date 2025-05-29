import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-cjn-primary text-cjn-text-light p-5 text-center text-sm mt-12">
            <div className="mb-3">
                <Link to="/privacy" className="text-cjn-text-light no-underline mx-4 hover:text-cjn-accent-light transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-cjn-text-light no-underline mx-4 hover:text-cjn-accent-light transition-colors">Terms of Service</Link>
                <Link to="/contact" className="text-cjn-text-light no-underline mx-4 hover:text-cjn-accent-light transition-colors">Contact Us</Link>
            </div>
            <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/cjn" target="_blank" rel="noopener noreferrer" className="text-cjn-text-light text-2xl hover:text-cjn-accent-light transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/cjn" target="_blank" rel="noopener noreferrer" className="text-cjn-text-light text-2xl hover:text-cjn-accent-light transition-colors" aria-label="Twitter"><i className="fab fa-twitter-square"></i></a>
                <a href="https://facebook.com/cjn" target="_blank" rel="noopener noreferrer" className="text-cjn-text-light text-2xl hover:text-cjn-accent-light transition-colors" aria-label="Facebook"><i className="fab fa-facebook-square"></i></a>
            </div>
            <p className="mt-2">&copy; {new Date().getFullYear()} CJN Intern Program. All rights reserved.</p>
        </footer>
    );
};

export default Footer;