const Model = require('../../models/products');
const response = require('../../network/responses');

async function createNew(req,res) {
  try {
    const product = await Model.create(
      {
        desc: req.body.desc,
        price: req.body.price,
      }
    );
    return response.success(res, 201, product);   
  } catch (error) {
    console.error(error);
    return response.error(res, 405, 'Error in add a new product. Remember send description and price');
  }
}

module.exports = {
  createNew,
} 