require ('./config/config') //Require enviroment variables
const server = require('../network/routes/index');
const DB = require('./config/database');


//Init server
DB.sql.authenticate()
  .then(() => {
    console.log('DB connected');
    server.listen(process.env.PORT, () => console.log(`Server online. Port: ${process.env.PORT}`));
  })
  .catch((err) => console.log(err));
