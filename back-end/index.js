

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const ProductModel = require('./models/Product');
const UserModel = require('./models/User');
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
    const { productName, price, productDescription, qty, color, size, category  } = req.body;
    const imagePath = req.file ? req.file.path : null;

    ProductModel.create({ productName, price,imagePath, productDescription, qty, color, size, category })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
});

// load all the products to tables

app.get('/products', (req, res) => {
    ProductModel.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});

// get product by id to view single product

app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    ProductModel.findById(id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
});



// get product by category

app.get('/products/category/:men', (req, res) => {
    const { category } = req.params;
    ProductModel.find({ category: 'men' })
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});


// sign up user (add user)

app.post('/signup', upload.none(), (req, res) => {
    const { firstName, lastName, email, password  } = req.body;


    UserModel.create({ firstName, lastName, email, password  })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
