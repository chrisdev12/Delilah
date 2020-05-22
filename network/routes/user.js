const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/auth/auth');
const userPost = require('../../controllers/user/post');
const userGet = require('../../controllers/user/get');
const userPatch = require('../../controllers/user/patch');

router.post('/register', userPost.register);
router.post('/login', userPost.login);
router.use(auth.tokenValidation);
router.get('', auth.admin, userGet.all);
router.get('/:id', auth.ownership, userGet.findById);
router.patch('/:id', auth.ownership,userPatch.updateBody);
router.patch('/password/:id', auth.ownership, userPatch.updatePassword);
router.patch('/rol/:id', auth.admin, userPatch.updateRol);

module.exports = router;