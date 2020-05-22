const DB = require('../server/config/database');
const { DataTypes } = require('sequelize');
const Users = require('./users');
const Products = require('./products');

//Db.sql is the sequalizeInstance
const Orders = DB.sql.define('orders', {
  // Model attributes are defined here
  id_user: {
    type: DataTypes.INTEGER,
    references: 'users', 
    referencesKey: 'id_user' 
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

const OrdersProducts = DB.sql.define('orders_products', {
  // Model attributes are defined here
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

Users.hasMany(Orders);
/**
 * belongsToMany create the reference that the table requires to
 * make the many-to-many relation table: orderId and productId is created by Sequalize
 */
Orders.belongsToMany(Products, { through: 'orders_products' });
Products.belongsToMany(Orders, { through: 'orders_products' });

module.exports = {
  Orders,
  OrdersProducts
}