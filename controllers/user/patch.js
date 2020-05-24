const Model = require('../../models/users');
const response = require('../../network/responses');
const bcrypt = require('bcrypt');

async function updateBody(req, res) {
  try {
    if (!req.body.name && !req.body.email && !req.body.phone && !req.body.address && req.body.status === undefined ) throw new Error;

    const user = await Model.findOne({ where: { id: req.params.id } });
    await Model.update(
      {
        name: req.body.name || user.name,
        email: req.body.email || user.email,
        phone: req.body.phone || user.phone,
        address: req.body.address || user.address,
        status: req.body.status ? true : false
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );

    return response.success(res, 200, 'User updated');
  
  } catch (error) {
    console.error(error);
    return response.error(res, 404, "None users found or required fields sent");
  }  
}

async function updatePassword(req, res) {
  try {
    if (!req.body.password ) throw new Error;

    const newPassword = bcrypt.hashSync(req.body.password, 10)
    await Model.update(
      { password: newPassword },
      { where: { id: req.params.id }}
    );
    return response.success(res, 200, 'User password updated');
  
  } catch (error) {
    console.error(error);
    return response.error(res, 404, "Password was not updated");
  }  
}

async function updateRol(req, res) {
  try {
    if (!req.body.rol) throw new Error;
    //Unique rol values allowed
    // if (req.body.rol != 'user' || req.body.rol != 'admin') throw new Error;

    await Model.update(
      { rol: req.body.rol },
      { where: { id: req.params.id }}
    );
    return response.success(res, 200, `'User status updated to: ${req.body.rol}`);
  
  } catch (error) {
    console.error(error);
    return response.error(res, 404, "Error. Rol was not updated");
  }  
}

module.exports = {
  updateBody,
  updatePassword,
  updateRol
}