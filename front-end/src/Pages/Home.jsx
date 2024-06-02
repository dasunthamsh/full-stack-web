import React from 'react';

const Home = () => {
    return (
        <div className="p-10">
            {/* Hero Section */}
            <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                <img
                    src="https://via.placeholder.com/1200x400"
                    alt="Shoes Collection"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative p-10 md:p-20 lg:p-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Discover the Best Shoes</h1>
                    <p className="mt-4 text-lg md:text-2xl">Quality, Comfort, and Style</p>
                    <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Replace with dynamic content in a real app */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Shoe" className="w-full h-48 object-cover rounded-md" />
                        <h4 className="mt-2 text-xl font-semibold">Product Name</h4>
                        <p className="mt-1 text-gray-600">$120</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/150" alt="Shoe" className="w-full h-48 object-cover rounded-md" />
                        <h4 className="mt-2 text-xl font-semibold">Product Name</h4>
                        <p className="mt-1 text-gray-600">$150</p>
                    </div>
                    {/* Add more product cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default Home;
