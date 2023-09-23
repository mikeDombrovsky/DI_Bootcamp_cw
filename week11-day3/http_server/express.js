const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>home</h1>')
});

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
});

app.get('*', (req, res) => {
    res.send('<h1>404</h1>');
})

app.listen(3001, ()=> {
    console.log('running on 3001 port');
})