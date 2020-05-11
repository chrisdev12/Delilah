const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/auth/auth');
const userPost = require('../../controllers/user/post');
const userGet = require('../../controllers/user/get');
const userPatch = require('../../controllers/user/patch');

router.get('', [auth.tokenValidation, auth.admin], userGet.all);
router.get('/:id', [auth.tokenValidation, auth.ownership], userGet.findById);
router.post('/register', userPost.register);
router.post('/login', userPost.login);
router.patch('/:id', [auth.tokenValidation,auth.ownership],userPatch.updateBody);
router.patch('/password/:id', [auth.tokenValidation, auth.ownership], userPatch.updatePassword);
router.patch('/status/:id', [auth.tokenValidation, auth.admin], userPatch.updateRol);

module.exports = router;