//Database singleton instance // Manage an unique instance of this DB
const Sequelize = require('sequelize');

class DbConnect {
  constructor() {
    if (!!DbConnect.instance) {
      console.log('instance')
      return DbConnect.instance;
    }

    DbConnect.instance = this;
    this.sql = new Sequelize(process.env.URLDB);
    return this;
  }
}

const db = new DbConnect();

module.exports = db;