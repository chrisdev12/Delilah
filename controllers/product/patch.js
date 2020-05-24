const cloudUpload = require('../../middlewares/files/upload');
const Model = require('../../models/products');
const response = require('../../network/responses');

async function image(req, res) {
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

async function updateProduct(req, res) {
  try {
    if (!req.body.desc && !req.body.price && req.body.status === undefined) throw new Error;

    const product = await Model.findOne({ where: { id: req.params.id } });
    await Model.update(
      {
        desc: req.body.desc || product.desc,
        price: req.body.price || product.price,
        status: req.body.status ? true : false
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );

    return response.success(res, 200, 'Product updated');
  
  } catch (error) {
    console.error(error);
    return response.error(res, 404, "None products found or required fields sent");
  }  
}

module.exports = {
  image,
  updateProduct
};