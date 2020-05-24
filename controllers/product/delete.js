const Model = require('../../models/products');
const response = require('../../network/responses');

async function deleteById(req, res) {
  try {
    const deleted = await Model.destroy({ where: { id: req.params.id } });
    if (!deleted) throw new Error;

    return response.success(res, 204);
  } catch (error) {
    console.log(error)
    return response.error(res, 404, 'None products found/deleted');
  }
}

module.exports = {
  deleteById,
}