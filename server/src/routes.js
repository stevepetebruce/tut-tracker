const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticatinControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app.post('/register', 
    AuthenticatinControllerPolicy.register,
    AuthenticationController.register
  )
};