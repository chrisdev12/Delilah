const DB = require('../server/config/database');
const { DataTypes } = require('sequelize');

//Db.sql is the sequalizeInstance
const Users = DB.sql.define('users', {
  // Model attributes are defined here
  name: {
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
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  rol: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    validate: {
      isIn: {
        args: [['user', 'admin']]
      }
    },
    defaultValue: 'user'
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

Users.prototype.toJSON = function() {
  const user = Object.assign({}, this.get());
  delete user.password;
  return user;
}; 
  
module.exports = Users;