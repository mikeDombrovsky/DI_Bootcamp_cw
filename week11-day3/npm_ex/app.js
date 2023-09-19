// const axios = require('axios');
// const slugify = require('slugify');
import axios from 'axios';


// const link = slugify('about page', '_');
// console.log(link);


export const getData = async url => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

// module.exports = { getData };
// getData('https://jsonplaceholder.typicode.com/users');

