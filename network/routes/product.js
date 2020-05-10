const express = require('express');
const router = express.Router()
const productPost = require('../../controllers/product/post');
const productPatch = require('../../controllers/product/patch');
const productGet = require('../../controllers/product/get');
const file = require('../../middlewares/files/validate');

router.post('', productPost.createNew);
router.patch('/:id/image', file.parser, productPatch.addImage);
router.get('',productGet.all)

module.exports = router;