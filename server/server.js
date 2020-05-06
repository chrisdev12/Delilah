require ('./config/config') //Require enviroment variables
const express = require('express');
const server = express();
const cors = require('cors');
const router = require('../network/routes');
const DB = require('./config/database');

//Basic Setup
server.options('*', cors()) 
server.use(express.json());
server.use(cors());

//Routing
router(server);


//Init server

const db = new DB();

db.sql.authenticate()
  .then(() => {
    console.log('DB connected');
    server.listen(process.env.PORT, () => {
      console.log(`Server online. Listening port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));



// sqlDb.authenticate()
//   .then(() => {
//     console.log('Database connected');
//     server.listen(process.env.PORT, () => {
//       `Server online. Listening port: ${process.env.PORT}`
//     });
//   }).catch((err) => console.error(err));
