const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticatinControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SeedsController = require('./policies/SeedsController');

module.exports = (app) => {
  app.post('/register', 
    AuthenticatinControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', 
    AuthenticationController.login
  );
  app.get('/entries', 
    EntriesController.getSeeds
  );
};