const knex = require('knex');
require('dotenv').config();

const products = [
    {
        id: 1,
        name: 'product1',

    },
    {
        id: 2,
        name: 'product2',

    },
];

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

module.exports = { products, db };