const order = {

  all: function (req,res) {
    
    res.status(201).json({
      message : 'Welcome user'
    })
  }
};

module.exports = order;