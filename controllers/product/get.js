const Model = require('../../models/products');
const response = require('../../network/responses');

async function all (req, res) {
  try {
    const products = await Model.findAll();
    return response.success(res, 200, products);
  } catch (error) {
    return response.error(res, 403, 'any products found');
  }
}

async function findById (req, res) {
  try {
    const product = await Model.findOne({ where: { id: req.params.id } });
    if (!product) throw new Error;

    return response.success(res, 200, product);
  } catch (error) {
    return response.error(res, 403, 'No products found');
  }
}

module.exports = {
  all,
  findById
};