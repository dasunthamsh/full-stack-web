// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const ProductModel = require('./models/Product')
//
// const app = express()
// app.use(cors())
// app.use(express.json())
//
// mongoose.connect("mongodb://localhost:27017/full-stack-db") //mongodb://127.0.0.1:27017
//
// app.post('/add-product', (req, res) => {
//     ProductModel.create(req.body)
//         .then(products => res.json(products))
//         .catch(err => res.json(err))
// })
//
// app.listen(3001,() => {
//     console.log('Server is running on port 3001')
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const ProductModel = require('./models/Product');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb://localhost:27017/full-stack-db", { useNewUrlParser: true, useUnifiedTopology: true });

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


// add a product

app.post('/add-product', upload.single('image'), (req, res) => {
    const { productName, price } = req.body;
    const imagePath = req.file ? req.file.path : null;

    ProductModel.create({ productName, price, imagePath })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
});

// load all the products to tables

app.get('/products', (req, res) => {
    ProductModel.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
