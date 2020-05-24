const response = require('../../network/responses');
const DB = require('../../server/config/database');

async function all (req, res) {
 try {
    const order = await DB.sql.query(
      `SELECT o.status as Estado, o.updatedAt as Fecha, o.id as Número, u.name as usuario, u.address as dirección, 
      GROUP_CONCAT(CONCAT(p.desc,'(',p.price,')',' x ', op.quantity)) as productos,
      GROUP_CONCAT (op.quantity) as cantidadXproducto, CONCAT( o.payMethod, ' - ' ,SUM(p.price * op.quantity)) as Pago
      FROM orders as o
      INNER JOIN users as u ON o.userId = u.id 
      INNER JOIN orders_products as op ON op.orderId = o.id
      INNER JOIN products as p ON op.productId = p.id GROUP BY o.id ` ,
      { type: DB.sql.QueryTypes.SELECT }
    );
    if (!order) throw new Error;
    return response.success(res, 200, order);
  } catch (error) {
    console.log(error)
    return response.error(res, 404, 'Sorry. None orders found');
  }
}

async function findById (req, res) {
  try {
    const order = await DB.sql.query(
      `SELECT o.status as Estado, o.updatedAt as Fecha, o.id as Número, u.name as usuario, u.address as dirección, 
      GROUP_CONCAT(CONCAT(p.desc,'(',p.price,')',' x ', op.quantity)) as productos,
      GROUP_CONCAT (op.quantity) as cantidadXproducto, CONCAT( o.payMethod, ' - ' ,SUM(p.price * op.quantity)) as Pago
      FROM orders as o
      INNER JOIN users as u ON o.userId = u.id 
      INNER JOIN orders_products as op ON op.orderId = o.id
      INNER JOIN products as p ON op.productId = p.id
      WHERE o.id = ${req.params.id} GROUP BY o.id ` ,
      { type: DB.sql.QueryTypes.SELECT }
    );
    if (!order) throw new Error;
    return response.success(res, 200, order);
  } catch (error) {
    console.log(error)
    return response.error(res, 404, 'Sorry. None orders found');
  }
}

async function findByUser (req, res) {
  try {
    const order = await DB.sql.query(
      `SELECT o.status as Estado, o.updatedAt as Fecha, o.id as Número, u.name as usuario, u.address as dirección, 
      GROUP_CONCAT(CONCAT(p.desc,'(',p.price,')',' x ', op.quantity)) as productos,
      GROUP_CONCAT (op.quantity) as cantidadXproducto, CONCAT( o.payMethod, ' - ' ,SUM(p.price * op.quantity)) as Pago
      FROM orders as o
      INNER JOIN users as u ON o.userId = u.id 
      INNER JOIN orders_products as op ON op.orderId = o.id
      INNER JOIN products as p ON op.productId = p.id
      WHERE o.userId = ${req.query.id} GROUP BY o.id `,
      { type: DB.sql.QueryTypes.SELECT }
    );
    if (!order) throw new Error;
    return response.success(res, 200, order);
  } catch (error) {
    // console.log(error)
    return response.error(res, 404, 'Sorry. None orders found');
  }
}

module.exports = {
  all,
  findById,
  findByUser
};
