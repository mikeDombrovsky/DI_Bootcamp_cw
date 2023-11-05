const { products } = require('../config/products.js');
const { _getAllProducts, _getProduct, _updateProduct, _addProduct } = require('../models/products.model.js');

const getProducts = async (req, res) => {
    try {
        const data = await _getAllProducts();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'not found' })
    }
}

const getProduct = async (req, res) => {
    const id = Number(req.params.id);
    // const prod = products.find(product => product.id === id);
    // if (!prod) return res.status(404).json({ error: 'not found' });
    try {
        const prod = await _getProduct(id);
        res.status(200).json(prod);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'not found' })
    }
}

const updateProduct = async (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.body;

    try {
        const prod = await _updateProduct(id, name, price);
        res.status(200).json(prod);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'not found' })
    }
    // const prod = products.find(product => product.id === id);
    // if (!prod) return res.status(404).json({ error: 'not found' });
    // prod.name = name;
    // prod.price = price;
    // res.status(200).json(prod);
}

const addProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const prod = await _addProduct(name, price);
        // res.status(200).json(prod);
        getProducts(req, res);
    } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'not found' })
    }
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    addProduct
}