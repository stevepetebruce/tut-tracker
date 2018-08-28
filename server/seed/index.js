const config = require('../src/config/config');
const {
  sequelize,
  Seed,
  User,
} = require('../src/models');

const Promise = require('bluebird');
const seeds = require('./seeds.json');
const users = require('./users.json');

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    ),
    await Promise.all(
      seeds.map(seed => {
        Seed.create(seed)
      })
    )
});
