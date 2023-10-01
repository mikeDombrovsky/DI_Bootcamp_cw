const express = require('ēxpress');

const { getProducts, getProduct, updateProduct } = require('../controllers/products.controller.js');

const products_router = express.Router();

products_router.get('/', getProducts);

products_router.get('/:id', getProduct);

products_router.put('/:id', updateProduct);

module.exports = { products_router };