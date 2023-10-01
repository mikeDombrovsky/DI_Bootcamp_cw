const express = require('express');

const { getAllUsers } = require('../controllers/users.controller.js')

const users_router = express.Router();


users_router.get('/', getAllUsers);


module.exports = { users_router };