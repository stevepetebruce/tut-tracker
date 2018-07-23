const {User} = require('../models');

const jwt = require('jsonwebtoken'); // web tokens for authentication
const config = require('../config/config');

// login token
function jwtSignUser (user) {
  const oneWeek = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: oneWeek,
  })
};

module.exports = {
  // Register new user
  async register (req ,res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch(error) {
      res.status(400).send({
        error: 'Email already in use',
      })
    } 
  },
  // Login user
  async login (req, res) {
    try {
      const{email, password} = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Login information was incorrect',
        })
      };

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Login information was incorrect',
        })
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });

    } catch(error) {
      res.status(500).send({
        error: 'Login failed due to error',
      })
    } 
  }
}