const products = require('../config/products.js');

const getProducts = (req, res) => {
    
}

const getProduct = (req, res) => {
    const id = Number(req.params.id);
    const prod = products.find(product => product.id === id);
    if(!prod) return res.status(404).json({error:'not found'});

    res.status(200).json(prod);
}

const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const {name, price} = req.body;

    const prod = products.find(product => product.id === id);
    if (!prod) return res.status(404).json({ error: 'not found' });
    prod.name = name;
    prod.price = price;
    res.status(200).json(prod);

}
module.exports = {
    getProducts,
    getProduct,
    updateProduct
}