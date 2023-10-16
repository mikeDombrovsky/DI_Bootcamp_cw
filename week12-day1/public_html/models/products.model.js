const { db } = require('../config/products.js');

const _getAllProducts = () => {
    return db('products').select('id', 'name', 'price')
        .orderBy('name');
};

const _getProduct = id => {
    return db('products').select('id', 'name', 'price')
        .where({ id });
};

const _updateProduct = (id, name, price) => {
    return db('products')
        .update({ name, price })
        .where({ id })
        .returning(['id', 'name', 'price']);
};

const _addProduct = (name, price) => {
    return db('products')
        .insert({ name, price })
        .returning(['id', 'name', 'price']);
    //      .insert({ name, price }, ['id', 'name', 'price'])//or this
};

module.exports = {
    _getAllProducts,
    _getProduct,
    _updateProduct,
    _addProduct
}