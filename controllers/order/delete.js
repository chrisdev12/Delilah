const { Orders, OrdersProducts } = require('../../models/order');
const response = require('../../network/responses');

async function deleteById(req, res) {
  try {
    const orderDeleted = await Orders.destroy({ where: { id: req.params.id } });
    if (!orderDeleted) throw new Error;
    const orderProductsDeleted = await OrdersProducts.destroy({ where: { orderId: req.params.id } });
    if (!orderProductsDeleted) throw new Error;
    return response.success(res, 204);
  } catch (error) {
    console.log(error)
    return response.error(res, 404, 'None orders found/deleted');
  }
}

module.exports = {
  deleteById,
}