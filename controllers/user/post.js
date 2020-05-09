const Model = require('../../models/users');
const bcrypt = require('bcrypt');
const token = require('../../middlewares/auth/token');
const response = require('../../network/responses');

async function register (req, res) {
  try {
    const user = await Model.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
      }
    );
    return response.success(res, 201, user);   
  } catch (error) {
    console.error(error);
    return response.error(res, 405, 'Error in new user register. Try with another email please.');
  }
}

async function login (req, res) {

  try {
    
    if (!req.body.email || !req.body.password) {
      return res.status(403).send({ error: 'Request must have email and password' });  
    }  
    const user = await Model.findOne({ where: { email: req.body.email } });
    const userLogged = user.dataValues;
    const verify = await bcrypt.compare(req.body.password, userLogged.password);
    if (!verify) throw new Error;

    //if login is correct avoid return password (here the Json instance of the model cant help ours)
    delete userLogged.password;
    userLogged.token = token.create(userLogged);   
    return response.success(res,200,userLogged);

  } catch (error) {
    console.error(error);
    return response.error(res,401,'User or password wrong');
  }
}


module.exports = {register, login}