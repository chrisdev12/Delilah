const { Orders, OrdersProducts } = require('../../models/order');
const response = require('../../network/responses');

async function createNew(req,res) {
  try {
    if (!req.body.products) throw new Error

    const order = await Orders.create(
      {
        id_user: req.token.id,
      }
    );
    //Id of the other recently created
    const idOrder = order.dataValues.id;

    //Object.keys(products) Contain an array of all the id Numbers sent
      Object.keys(req.body.products).forEach(async (element) => {
      await OrdersProducts.create(
        {
          orderId: idOrder,
          productId: +element,
          quantity: products[+element]
        }
      )
    })

    return response.success(res, 201, order);   
  } catch (error) {
    console.error(error);
    return response.error(res, 405, 'Error creating an order');
  }
}

module.exports = {
  createNew,
} 