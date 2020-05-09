const jwt = require("jsonwebtoken");



function create (userLogged) {
  return jwt.sign({ user: userLogged }, 'secret-acamica', { expiresIn: 60 * 60 * 24 });
}

function validate (req, res, next) {
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


module.exports = {
  create,
  validate,
  admin
};
