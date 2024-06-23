


const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: String },
    quantity: { type: String, required: true},
    selectedColor: { type: String, required: true},
    selectedSize: { type: String, required: true},
    email: { type: String, required: true},


});


module.exports = mongoose.model('Cart', CartSchema);
