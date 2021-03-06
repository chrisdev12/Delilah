const express = require('express');
const router = express.Router()
const orderPost = require('../../controllers/order/post');
const orderGet = require('../../controllers/order/get');
const orderPatch = require('../../controllers/order/patch');
const orderDelete = require('../../controllers/order/delete');
const auth = require('../../middlewares/auth/auth');

router.post('', orderPost.createNew);
router.get('', auth.admin, orderGet.all);
router.get('/user:id?',auth.ownership, orderGet.findByUser);
router.get('/:id', auth.orderOwnership, orderGet.findById);
router.patch('/:id', auth.admin, orderPatch.updateStatus);
router.delete('/:id', auth.admin, orderDelete.deleteById);

module.exports = router