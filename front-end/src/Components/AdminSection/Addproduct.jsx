

import React, { useState } from 'react';
import axios from "axios";

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('image', image);

        axios.post('http://localhost:3001/add-product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <div className="p-10">
            <h2 className="text-3xl font-semibold">Add Product</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label className="block text-gray-700">Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
