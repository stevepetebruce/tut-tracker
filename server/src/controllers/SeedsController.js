const {Seed} = require('../models');
const Sequelize = require('sequelize');

module.exports = {
  async getSeeds (req ,res) {
    try {
      let seeds = null;
      const search = req.query.search;
      // find serach entry or display latest 10 entries
      if (search) {
        seeds = await Seed.findAll({
          where: {
            // sequalize to find any of these cases have content in search term
            [Sequelize.Op.or]: [
              {name: {[Sequelize.Op.like]: '%' + search + '%'}},
              {category: {[Sequelize.Op.like]: '%' + search + '%'}},
              {description: {[Sequelize.Op.like]: '%' + search + '%'}},
             ]
          }
        });
      } else {
        seeds = await Seed.findAll({
          limit: 10,
        });
      }
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