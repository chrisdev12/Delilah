const DB = require('../server/config/database');
const { DataTypes } = require('sequelize');
const Users = require('./users');
const Products = require('./products');

//Db.sql is the sequalizeInstance
const Orders = DB.sql.define('orders', {
  // Model attributes are defined here
  payMethod: {
    type: DataTypes.ENUM,
    values: ['creditCard', 'cash'],
    validate: {
      isIn: {
        args: [['creditCard', 'cash']]
      }
    },
    defaultValue: 'cash'
  },
  status: {
    type: DataTypes.ENUM,
    values: ['new', 'confirmed', 'preparing', 'sending', 'cancel', 'delivered'],
    validate: {
      isIn: {
        args: [['new', 'confirmed', 'preparing', 'sending', 'cancel', 'delivered']]
      }
    },
    defaultValue: 'new'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
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

/**
 * belongsToMany create the reference that the table requires to
 * make the many-to-many relation table: orderId and productId is created by Sequalize.
 * Also created the one to many relation in Orders, adding the userId
 */
Users.hasMany(Orders);
Orders.belongsToMany(Products, { through: 'orders_products' });
Products.belongsToMany(Orders, { through: 'orders_products' });

module.exports = {
  Orders,
  OrdersProducts
}