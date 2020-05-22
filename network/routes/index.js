const express = require('express');
const server = express();
const cors = require('cors');
const userRoutes = require('./user');
const productRoutes = require('./product');
const orderRoutes = require('./order');
const auth = require('../../middlewares/auth/auth');

//Cors
server.use(cors({ origin: '*' }));
//Parser
server.use(express.json());

server.use('/user', userRoutes);
server.use('/product', auth.tokenValidation);
server.use('/product', productRoutes);
server.use('/order', auth.tokenValidation);
server.use('/order', orderRoutes);

module.exports = server;