// const { getData } = require('./app.js');
//commonJS 

import { getData } from "./app.js";
//ES6 

 getData('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data));



