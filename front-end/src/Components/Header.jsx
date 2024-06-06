import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow hidden md:block  relative  ">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-xl">Brand</span>
                </div>
                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Men</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Women</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Kids</a>
                </nav>
                {/* Login Button */}
                <div>
                    <Link to="/signup" className="text-gray-600 hover:text-gray-900"> Login </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
