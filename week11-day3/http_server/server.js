const express = require('express');
const { users } = require('./config/users.js');
// const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//CRUD 
const PATH = '/api/users'


app.get(PATH, (req, res) => {
    res.json(users)
});

app.get(`${PATH}/:id`, (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if (!user) return res.status(404).json({ msg: 'user not found' });
    res.json(user);
});

app.get(`${PATH}/search`, (req, res) => {
    const { name } = req.query;
    console.log(name);
    // const filtered = users.filter(user => {
    //     return user.name.toLowerCase().includes(name.toLowerCase());
    // });
    // if (filtered.length === 0) return res.status(404).json({ msg: 'user not found' });
    res.json(filtered);
});


app.post(PATH, (req, res) => {
    const { name, email } = req.body;
    console.log(req.body);

    users.push({
        id: users.length,
        name,
        email
    });

    res.json({ msg: 'OK' });
})


app.put(`${PATH}/:id`, (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const i = users.indexOf(user => user.id == id);
    if (i === -1) return res.status(404).json({ msg: 'user not found' });

    users[i].name = name;
    users[i].email = email;
    res.json({ msg: OK })
});


app.delete(`${PATH}/:id`, (req, res) => {
    const { id } = req.params;

    const i = users.indexOf(user => user.id == id);
    if (i == -1) return res.status(404).json({ msg: 'user not found' });

    users.splice(i, 1);
   
    res.json({ msg: 'REMOVED' })
});





app.listen(3002, () => {
    console.log('running on 3002 port');
})