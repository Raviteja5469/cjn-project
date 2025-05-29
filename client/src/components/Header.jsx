import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const Header = () => {
    return (
        <header className="bg-cjn-primary text-cjn-text-light p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <Link to="/" className="flex items-center mr-8">
                    {/* Replace with your actual logo path */}
                    <img src="/cjn-logo.png" alt="CJN Logo" className="h-10 mr-3" />
                    <span className="text-2xl font-bold text-cjn-text-light no-underline hidden sm:block">CJN</span>
                </Link>

                <nav className="flex flex-wrap gap-x-6 gap-y-2">
                    <div className="text-center">
                        <span className="block text-sm opacity-80">Total Openings:</span>
                        <span className="block text-lg font-bold">156</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm opacity-80">Interviews Scheduled:</span>
                        <span className="block text-lg font-bold">144</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm opacity-80">Offers Extended:</span>
                        <span className="block text-lg font-bold">56</span>
                    </div>
                </nav>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Link to="/" className="text-cjn-text-light text-xl hover:text-cjn-accent-light transition-colors" aria-label="Home"><i className="fas fa-home"></i></Link>
                <Link to="/about" className="text-cjn-text-light text-xl hover:text-cjn-accent-light transition-colors" aria-label="About Us"><i className="fas fa-info-circle"></i></Link>
                <Link to="/help" className="text-cjn-text-light text-xl hover:text-cjn-accent-light transition-colors" aria-label="Help"><i className="fas fa-question-circle"></i></Link>
                <Link to="/profile" className="flex items-center gap-2 border border-cjn-text-light/[0.5] py-2 px-4 rounded-full text-sm hover:bg-cjn-text-light/[0.1] transition-colors" aria-label="My Profile">
                    <i className="fas fa-user-circle"></i> My Profile
                </Link>
            </div>
        </header>
    );
};

export default Header;