const DB = require('../server/config/database');
const { DataTypes } = require('sequelize');

//Db.sql is the sequalizeInstance
const Users = DB.sql.define('users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: 'user'
  },
}, {
  freezeTableName: true,
  timestamps: false
});

//avoid return the password on any response
Users.prototype.toJSON =  () => {
  console.log('entrando');
  let values = Object.assign({}, this.get());

  delete values.password;
  return values;
}

module.exports = Users;