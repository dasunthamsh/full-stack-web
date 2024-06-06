


const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    imagePath: { type: String },
    productDescription: { type: String, required: true},
    qty: { type: Number, required: true},
    color: { type: String, required: true},
    size: { type: String, required: true},
    category: { type: String, required: true},

});

module.exports = mongoose.model('Product', ProductSchema);
