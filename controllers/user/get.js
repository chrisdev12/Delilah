const Model = require('../../models/users');
const response = require('../../network/responses');

async function all (req, res) {
  try {
    const users = await Model.findAll();
    return response.success(res, 200, users);
  } catch (error) {
    return response.error(res, 404, 'none users found');
  }
}

async function findById (req, res) {
  try {
    const user = await Model.findOne({ where: { id: req.params.id } });
    return response.success(res, 200, user);
  } catch (error) {
    return response.error(res, 404, 'none users found');
  }
}


module.exports = {
  all,
  findById
};