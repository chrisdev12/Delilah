// const productRoute = require('../controllers/product/router')
// const orderRoute = require('../controllers/order/router')
const userPost = require('../controllers/user/post');

const routes = function (server, router) {
  const userRouter = router;
  
  server.use('/user', userRouter);
  userRouter.post('/register', userPost.new);
  userRouter.post('/login', userPost.login);
  // server.use('/product', productRoute);
  // server.use('/order', orderRoute);
}

module.exports = routes