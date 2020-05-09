// const productRoute = require('../controllers/product/router')
// const orderRoute = require('../controllers/order/router')
const userPost = require('../controllers/user/post');
const userGet = require('../controllers/user/get');
const token = require('../middlewares/auth/token');

const routes = function (server, router) {
  const userRouter = router;
  
  server.use('/user', userRouter);
  userRouter.get('',[token.validate,token.admin], userGet.all)
  userRouter.post('/register', userPost.register);
  userRouter.post('/login', userPost.login);
  // server.use('/product', productRoute);
  // server.use('/order', orderRoute);
}

module.exports = routes