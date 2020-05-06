const user = require('../controllers/user/user')
const product = require('../controllers/product/product')
const order = require('../controllers/order/order')

const routes = function (server) {
  server.post('/user', user.new)
  // server.use('/product', product)
  server.get('/order', (req, res) => { 
    res.send({
      message: 'hola'
    })
  })
}

module.exports = routes