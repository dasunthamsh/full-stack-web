import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ loggedInUser }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    const handleAddToBag = () => {
        const formData = new FormData();
        formData.append('productId', product._id);
        formData.append('productName', product.productName);
        formData.append('price', product.price);
        formData.append('quantity', quantity);
        formData.append('selectedColor', selectedColor);
        formData.append('selectedSize', selectedSize);
        formData.append('loggedInUser', loggedInUser);

        axios.post('http://localhost:3001/cart', formData)
            .then(response => {
                // Handle successful response
                console.log('Data sent to backend:', response.data);
                // Optionally, you can show a success message to the user
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data to backend:', error);
            });
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-10">
            {/* Your existing JSX code */}
            <button
                type="button"
                onClick={handleAddToBag}
                className="w-full lg:w-auto px-3 py-2 bg-black text-sm text-white rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            >
                Add to bag
            </button>
        </div>
    );
};

export default ProductDetail;
