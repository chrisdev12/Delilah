const express = require('express');
const router = express.Router()
const userPost = require('../../controllers/user/post');
const userGet = require('../../controllers/user/get');
const token = require('../../middlewares/auth/token');

router.get('',[token.validate,token.admin], userGet.all)
router.post('/register', userPost.register);
router.post('/login', userPost.login);

module.exports = router;