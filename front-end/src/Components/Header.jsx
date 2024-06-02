import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src="logo.png" alt="Logo" className="h-8 w-8" />
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
                    <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
