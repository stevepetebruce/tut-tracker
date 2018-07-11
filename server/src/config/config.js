const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tuttracker',
    user: process.env.DB_USER || 'tuttracker',
    password: process.env.DB_PASS || 'tuttracker',
    options:{
      operatorsAliases: Op,
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './tabtracker.sqlite',
    },
  }
}