import React, {useEffect, useState} from 'react';
import axios from "axios";
import coverImage from '../Assets/cover.png'
import {Link} from "react-router-dom";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="p-10">
            {/* Hero Section */}
            <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
                <img
                    src={coverImage}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >

                    {products.map((product) => (
                        <Link to={`/product/${product._id}`}>
                            <div className="bg-white p-6 rounded-lg shadow-md" key={product._id}>
                                <img src={`http://localhost:3001/${product.imagePath}`} alt={product.productName} className="w-full h-48 object-cover rounded-md" />
                                <h4 className="mt-2 text-xl font-semibold">{product.productName}</h4>
                                <p className="mt-1 text-gray-600">Rs : {product.price}</p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Home;
