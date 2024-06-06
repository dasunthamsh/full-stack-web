import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-10">
            <h2 className="text-3xl font-semibold">{product.productName}</h2>
            <img src={`http://localhost:3001/${product.imagePath}`} alt={product.productName} />
            <p>Price: {product.price}</p>
            <p>Description: {product.productDescription}</p>
            <p>Quantity: {product.qty}</p>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductDetail;
