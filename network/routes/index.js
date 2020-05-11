const express = require('express');
const server = express();
const cors = require('cors');
const userRoutes = require('./user');
const productRoutes = require('./product');
const auth = require('../../middlewares/auth/auth');

//Cors
server.use(cors({ origin: '*' }));
//Parser
server.use(express.json());

server.use('/user', userRoutes);
server.use('/product', [auth.tokenValidation, auth.admin]);
server.use('/product', productRoutes);

module.exports = server;