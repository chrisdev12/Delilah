const express = require('express');
const router = express.Router()
const orderPost = require('../../controllers/order/post');

router.post('', orderPost.createNew);

module.exports = router