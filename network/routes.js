// const productRoute = require('../controllers/product/router')
// const orderRoute = require('../controllers/order/router')
const userPost = require('../controllers/user/post');
const userGet = require('../controllers/user/get');
const productPost = require('../controllers/product/post');
const productPatch = require('../controllers/product/patch');
const token = require('../middlewares/auth/token');
const file = require('../middlewares/files/validate')

const routes = function (server, router) {
  const userRouter = router;
  const productRouter = router;

  server.use('/user', userRouter);
  //All products CRUD routes are protected via Token
  server.use('/product', token.validate, productRouter);

  userRouter.get('',[token.validate,token.admin], userGet.all)
  userRouter.post('/register', userPost.register);
  userRouter.post('/login', userPost.login);
  productRouter.post('', productPost.createNew);
  productRouter.patch('/:id/image', file.parser, productPatch.addImage);
  // server.use('/product', productRoute);
  // server.use('/order', orderRoute);
}

module.exports = routes