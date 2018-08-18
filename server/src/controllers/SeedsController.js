const {Seed} = require('../models');

module.exports = {
  async getSeeds (req ,res) {
    try {
      const seeds = await Seed.findAll({
        limit: 10,
      });
      res.send(seeds);
    } catch(error) {
      res.status(500).send({
        error: 'Server error fetching',
      })
    } 
  },
  async showSeed (req ,res) {
    try {
      const seed = await Seed.findById(req.params.seedId);
      res.send(seed);
    } catch(error) {
      res.status(500).send({
        error: 'Server error fetching',
      })
    } 
  },
  async post (req ,res) {
    try {
      const seed = await Seed.create(req.body);
      res.send(seed);
    } catch(error) {
      res.status(500).send({
        error: 'Server error creating',
      })
    } 
  },
  async putSeed (req ,res) {
    try {
      const seed = await Seed.update(req.body, {
        where: {
        id: req.params.seedId,
        }
      });
      res.send(req.body);
    } catch(error) {
      res.status(500).send({
        error: 'Server error editing',
      })
    } 
  },
}