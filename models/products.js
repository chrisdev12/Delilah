const DB = require('../server/config/database');
const { DataTypes } = require('sequelize');

//Db.sql is the sequalizeInstance
const Product = DB.sql.define('products', {
  // Model attributes are defined here
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Product;