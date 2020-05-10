const express = require('express');
const server = express();
const cors = require('cors');
const userRoutes = require('./user');
const productRoutes = require('./product');
const token = require('../../middlewares/auth/token');

//Cors
server.use(cors({ origin: '*' }));
//Parser
server.use(express.json());

server.use('/user', userRoutes);
server.use('/product', token.validate);
server.use('/product', productRoutes);

module.exports = server;