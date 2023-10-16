const express = require('express');

const { getProducts, getProduct, updateProduct, addProduct } = require('../controllers/products.controller.js');

const products_router = express.Router();

products_router.get('/', getProducts);

products_router.get('/:id', getProduct);

products_router.put('/:id', updateProduct);

products_router.post('/', addProduct);

module.exports = { products_router };