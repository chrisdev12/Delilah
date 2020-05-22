const jwt = require("jsonwebtoken");
const response = require('../../network/responses');
const { Orders } = require('../../models/order')

function create (userLogged) {
  return jwt.sign({ user: userLogged }, 'secret-acamica', { expiresIn: 60 * 60 * 24 });
}

function tokenValidation (req, res, next) {
  try {
    if (!req.headers.authorization) throw new Error;    
    let token = req.headers.authorization.replace('Bearer ', '');
    const tokenAuth = jwt.verify(token, 'secret-acamica');
    req.token = tokenAuth.user;
    next();

  } catch (error) {
    return res.status(401).send({ err: "Acceso denegado, compruebe sus credenciales" });
  }
}

function admin (req, res, next) {
  try {
    if (req.token.rol === 'admin') return next()  
    throw new Error; 
    
  } catch (error) {
    return res.status(403).send({ message: "you do not have the permissions to perform this action" });
  }
}

function ownership(req,res,next) {
  try {
    const idToken = req.token.id;
    const idRequired = req.query.id || req.params.id;
    console.log(idRequired);

    if (idToken == idRequired) {
      next()
    } else {
      throw new Error
    }
  } catch (error) {
    console.log(error);
    response.error(res, 403, "you do not have the permissions to perform this action");
  }
}

async function orderOwnership(req,res,next) {
  try {
    // Verify if the user that requiere the orderInfo, is the owner of it. Each order has in the table the userId who created it
    const order = await Orders.findOne(
      {
        where: { id: req.params.id },
        attributes: ['userId']
      },
    );

    if (req.token.id === order.dataValues.userId) {
      next()
    } else {
      throw new Error
    }
  } catch (error) {
    response.error(res, 403, "you do not have the permissions to perform this action");
  }
}

module.exports = {
  create,
  tokenValidation,
  admin,
  ownership,
  orderOwnership
};
