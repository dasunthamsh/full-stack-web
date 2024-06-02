
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">Shoe Store</Link>
                </div>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/products" className="hover:text-gray-400">Products</Link>
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                    <Link to="/cart" className="hover:text-gray-400">Cart</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
