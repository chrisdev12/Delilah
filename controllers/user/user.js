const DB = require('../../server/config/database');
const db = new DB()
const user = {
  new: async function (req, res) {
    try {
      const query = 'INSERT INTO users (firstName, lastName, email, password, phone) VALUES ("Christian", "Bravo", "ch@gmail.com", "1q2w3e4r", "30124455")';
      const {result} = await db.sql.query(query, { raw: true });
      if (result) {
        return res.status(201).json({
          message: result
        })
      } else {
        return res.status(500)
      }    
    } catch (error) {
      throw new Error(error)
    } 
  }
}

module.exports = user;