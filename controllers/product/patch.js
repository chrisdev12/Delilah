const cloudUpload = require('../../middlewares/files/upload');
const Model = require('../../models/products');
const response = require('../../network/responses');

async function addImage(req, res) {
  try {

    const upload = await cloudUpload(req.files.path);
    if (!upload) throw new Error;
    
    await Model.update(
      { urlImage: upload.secure_url },
      { where: { id: req.params.id }}
    );
    return response.success(res, 200, upload.secure_url);
  
  } catch (error) {
    return response.error(res, 404, "Sorry. Something something's gone wrong.");
  }  
}

module.exports = { addImage };