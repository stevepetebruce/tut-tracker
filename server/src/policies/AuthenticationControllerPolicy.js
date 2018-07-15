const Joi = require('joi');
// validate registration
module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
    };

    const {error, value} = Joi.validate(req.body, schema);
    if(error){
      switch(error.details[0].context.key){
        case 'email' :
          res.status(404).send({
            error: 'Please use a valid email address',
          });
          break;
        case 'password' :
          res.status(404).send({
            error: 'Password must be uppercase, lowercase or numbers and be between 8 and 32 characters in length',
          });
          break;
        default:
        res.status(404).send({
          error: 'Invalid registration information',
        });
      }
    } else if(value) {
      next();
    }
    
  }
}