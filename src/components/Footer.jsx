import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-center md:text-left">
                    &copy; 2024 Micropost - All rights reserved.
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link to="/" className="hover:text-white">About</Link>
                    <Link to="/" className="hover:text-white">Help Center</Link>
                    <Link to="/" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/" className="hover:text-white">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
