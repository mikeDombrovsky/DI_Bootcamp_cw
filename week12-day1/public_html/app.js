const express = require('express');
const cors = require('cors');
const { users_router } = require('./routes/users.route.js');
const { products_router } = require('./routes/products.route.js');
const { auth } = require('./middlewares/auth.js');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', users_router);
app.use('/products', products_router);

//middleware = request => middleware => response
const logger = (req, res, next) => {
    console.log('hi from middleware');
    next();
}

// app.use(logger);//for all routers
app.use('/posts', [auth, logger]);//several middlewares
app.use('/users', logger);//just for exect path

app.listen(3000, () => console.log('listening on 3000'));