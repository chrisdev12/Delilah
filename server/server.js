require ('./config/config') //Require enviroment variables
const express = require('express');
const server = express();
const router = express.Router();
const cors = require('cors');
const mainRouter = require('../network/routes');
const DB = require('./config/database');

//Basic Setup
server.options('*', cors()) 
server.use(express.json());
server.use(cors());

//Routing all endpoints with /api
mainRouter(server,router);

//Init server
DB.sql.authenticate()
  .then(() => {
    console.log('DB connected');
    server.listen(process.env.PORT, () => console.log(`Server online. Port: ${process.env.PORT}`));
  })
  .catch((err) => console.log(err));
