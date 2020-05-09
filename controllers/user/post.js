const DB = require('../../server/config/database');
const Model = require('../../models/users');

const userPost = {
  new: (req, res) => {
    
    Model.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password,
      }
    ).then((user) => {
      return res.status(200).send(user);
    }).catch((err) => {
      console.log(err);
      return res.status(405).send('Error in insert new record')
    });    
  },

  login: (req, res) => {
    res.status(201).json({
      message: 'logged'
    });
  }
}

module.exports = userPost