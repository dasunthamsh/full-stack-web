import React, { useState } from 'react';

const Cart = () => {
    // Sample data for cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Sneaker A', price: 100, quantity: 1 },
        { id: 2, name: 'Sneaker B', price: 150, quantity: 2 },
    ]);

    // Function to update item quantity
    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
    };

    // Function to remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <table className="w-full text-left">
                        <thead>
                        <tr>
                            <th className="border-b-2 p-2">Product</th>
                            <th className="border-b-2 p-2">Price</th>
                            <th className="border-b-2 p-2">Quantity</th>
                            <th className="border-b-2 p-2">Total</th>
                            <th className="border-b-2 p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td className="border-b p-2">{item.name}</td>
                                <td className="border-b p-2">${item.price}</td>
                                <td className="border-b p-2">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 p-1 border rounded"
                                        min="1"
                                    />
                                </td>
                                <td className="border-b p-2">${item.price * item.quantity}</td>
                                <td className="border-b p-2">
                                    <button onClick={() => removeItem(item.id)} className="text-red-600">Remove</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="mt-4 text-right">
                        <p className="text-xl font-bold">Total: ${totalPrice}</p>
                        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
