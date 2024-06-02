import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">Shoe Store</h2>
                    <p className="mt-2">© 2024 Shoe Store. All rights reserved.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Contact Us</h3>
                    <p>Email: info@shoestore.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div>
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-gray-400">Facebook</a>
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
