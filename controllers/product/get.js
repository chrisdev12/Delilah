const Model = require('../../models/products');
const response = require('../../network/responses');

async function all (req, res) {
  try {
    const products = await Model.findAll();
    return response.success(res, 200, products);
  } catch (error) {
    return response.error(res, 403, 'any products founded');
  }
}


module.exports = {all};