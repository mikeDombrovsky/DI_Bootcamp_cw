//knex
const knex = require('knex');
require('dotenv').config();

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: 'trumpet.db.elephantsql.com',
//         port: 5432,
//         user: 'cqzoibys',
//         password: 'u-Q2L0RlQqTiGX45CV7k6nMM1v1uheqk',
//         database: 'cqzoibys'
//     }
// });

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
//SELECT
// db.select('*').from('products')
//     .then(rows => console.log(rows))
//     .catch(err => console.log(err));

// db.raw('select * from products')
//     .then(data => console.log(data.rows))
//     .catch(err => console.log(err));

//INSERT
// db('products')
//     .insert([
//         { name: 'iPhone', price: 800 },
//         { name: 'iPhone5', price: 700 }
//     ])
//     .returning(['id', 'price'])
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

//UPDATE
// db('products')
//     .update({ price: 555 })
//     .where({ id: 2 })
//     .returning(['id', 'price', 'name'])
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// db.raw('select * from products where id = 1')
// .then((data) => console.log('raws => '));

// db.raw('select * from products where id > ? or name = ?', [2, 'iPhone'])
//     .then(data => console.log('raws => ', data.raws));

//DELETE
db('products')
    .del()
    .where({ id: 2 })
    .returning(['id', 'price', 'name'])
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });