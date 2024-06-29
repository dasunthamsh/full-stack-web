

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const ProductModel = require('./models/Product');
const UserModel = require('./models/User');
const CartModel = require('./models/Cart');
const OrderModel = require('./models/Order');
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



// get Men products by category

app.get('/products/category/men', (req, res) => {
    const { category } = req.params;
    ProductModel.find({ category: 'men' })
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});

// get Women products by category


app.get('/products/category/women', (req, res) => {
    const { category } = req.params;
    ProductModel.find({ category: 'women' })
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});


// get Kids products by category

app.get('/products/category/kid', (req, res) => {
    const { category } = req.params;
    ProductModel.find({ category: 'kid' })
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


// Login user
app.post('/login', upload.none(), async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    }
});








// if user click add to bag add details to cart table

app.post('/product/:id', upload.none(), (req, res) => {
    const { productId, productName, price, quantity, selectedColor, selectedSize, email } = req.body;


    CartModel.create({ productId, productName, price, quantity, selectedColor, selectedSize, email  })
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json(err));
});



// load all the cart products to cart tables

app.get('/cart/:email', (req, res) => {
    const { email } = req.params;
    CartModel.find({ email: email })
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err));
});








// save orders to database

app.post('/cart', async (req, res) => {
    const orderDetails = req.body;
    const order = new OrderModel({
        products: orderDetails.products,
        email: orderDetails.email,
        phoneNumber: orderDetails.phoneNumber,
        address: orderDetails.address,
        totalPrice: orderDetails.products.reduce((total, item) => total + item.price * item.quantity, 0)
    });

    try {
        const newOrder = await order.save();
        // Clear the user's cart after checkout
        await CartModel.deleteMany({ userEmail: orderDetails.email });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Route to get all orders
app.get('/admin-dashboard', async (req, res) => {
    try {
        const orders = await OrderModel.find().sort({ orderDate: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
