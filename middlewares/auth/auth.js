const jwt = require("jsonwebtoken");
const response = require('../../network/responses');


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
    const idRequired = req.params.id;

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


module.exports = {
  create,
  tokenValidation,
  admin,
  ownership
};
