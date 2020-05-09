const Model = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userPost = {
  new: (req, res) => {

    Model.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: bcrypt.hashSync(req.body.password, 10),
      }
    ).then((user) => {
      return res.status(201).send(user);
    }).catch((err) => {
      return res.status(406).send('Error in new user register. Try with another email please.')
    });
  },

  login: async (req, res) => {

    if (!req.body.email || !req.body.password) {
      return res.status(403).send({ error: 'Request must have email and password' });  
    }
    
    const user = await Model.findOne({ where: { email: req.body.email } });
    const userLogged = user.dataValues;
      
    bcrypt.compare(req.body.password, userLogged.password, (err, valid) => {

      delete userLogged.password;
      if (valid) {
        let token = jwt.sign({
          user: userLogged
        }, 'secret-bictia', { expiresIn: 60 * 60 * 24 })

        userLogged.token = token;

        return res.status(200).send(userLogged);
      } else {
        return res.status(401).send({message: 'User or password wrong'});
      }
    });
  }
}

module.exports = userPost