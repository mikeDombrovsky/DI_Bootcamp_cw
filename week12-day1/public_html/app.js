const express = require('express');
const { users_router } = require('./routes/users.route.js');
const { products_router } = require('./routes/products.route.js');


const app = express();
app.use(express.json());
app.use('/users', users_router);
app.use('/products', products_router);

//middleware = request => middleware => response
const logger = (req, res, next) => {
    console.log('hi from middleware');
    next();
}

const auth = (req, res, next) => {
    const { id } = req.params;
    if(id < 0){
        res.status(401).json({error: 'not authorized'});
    }else{
         next();
    }
   
}

// app.use(logger);
app.use('/posts', [auth, logger]);//several middlewares
app.use('/users', logger);//just for exect path

app.listen(3000, () => console.log('listening on 3000'));