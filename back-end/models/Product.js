// const mongoose = require('mongoose')
//
// const ProductSchema = new mongoose.Schema({
//
//     name: String,
//     price: String,
//     // image: String,
// })
//
// const ProductModel = mongoose.model('Products', ProductSchema)
// module.exports = ProductModel


const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    imagePath: { type: String }
});

module.exports = mongoose.model('Product', ProductSchema);
