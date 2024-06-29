const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    products: [
        {
            productName: String,
            price: Number,
            quantity: Number
        }
    ],
    email: String,
    phoneNumber: String,
    address: String,
    totalPrice: Number,
    orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
