const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticatinControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SeedsController = require('./controllers/SeedsController');

module.exports = (app) => {
  app.post('/register', 
    AuthenticatinControllerPolicy.register,
    AuthenticationController.register
  );
  app.post('/login', 
    AuthenticationController.login
  );
  app.get('/seed/:seedId', 
    SeedsController.showSeed
  );
  app.get('/entries', 
    SeedsController.getSeeds
  );
  app.post('/entries', 
    SeedsController.post
  );
  app.put('/seed/:seedId', 
    SeedsController.putSeed
  );
};