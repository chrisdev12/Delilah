const Model = require('../../models/products');
const response = require('../../network/responses');

async function createNew(req,res) {
  try {
    const product = await Model.create(
      {
        desc: req.body.desc,
        price: req.body.price,
        status: req.body.status
      }
    );
    return response.success(res, 201, product);   
  } catch (error) {
    console.error(error);
    return response.error(res, 405, 'Error when adding the product. Remember that the description and price are required.');
  }
}

module.exports = {
  createNew,
} 