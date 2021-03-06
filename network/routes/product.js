const express = require('express');
const router = express.Router()
const productPost = require('../../controllers/product/post');
const productPatch = require('../../controllers/product/patch');
const productGet = require('../../controllers/product/get');
const productDelete = require('../../controllers/product/delete');
const file = require('../../middlewares/files/validate');
const auth = require('../../middlewares/auth/auth');

router.get('', productGet.all);
router.get('/:id', productGet.findById);
router.use(auth.admin);
router.post('', productPost.createNew);
router.patch('/:id',productPatch.updateProduct);
router.patch('/:id/image', file.parser, productPatch.image);
router.delete('/:id', productDelete.deleteById);

module.exports = router;