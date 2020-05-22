const express = require('express');
const router = express.Router()
const orderPost = require('../../controllers/order/post');
const orderGet = require('../../controllers/order/get');
const auth = require('../../middlewares/auth/auth');

router.post('', orderPost.createNew);
router.get('', auth.admin, orderGet.all);
router.get('/:orderId', orderGet.findById);
router.get('/all/:userId',orderGet.findByUser);

module.exports = router