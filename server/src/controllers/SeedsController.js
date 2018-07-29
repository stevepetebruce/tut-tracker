const {Seed} = require('../models');

module.exports = {
  async getSeeds (req ,res) {
    try {
      
    } catch(error) {
      res.status(500).send({
        error: 'Server error',
      })
    } 
  },
}