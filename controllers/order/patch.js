const { Orders } = require('../../models/order')
const response = require('../../network/responses');

async function updateStatus(req, res) {
  try {
    if (!req.body.status) throw new Error;
    //Unique rol values allowed
    // 'new', 'confirmed', 'preparing', 'sending', 'cancel', 'delivered'

    await Orders.update(
      { status: req.body.status },
      { where: { id: req.params.id }}
    );
    return response.success(res, 200, `'Order status updated to: ${req.body.status}`);
  
  } catch (error) {
    console.error(error);
    return response.error(res, 404, "Error. Order status was not updated");
  }  
}

module.exports = { updateStatus }