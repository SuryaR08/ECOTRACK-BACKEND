const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'BEqXbyPSdsXOIzERjDZFAxcuCMyHhEAJ', {
  host: 'monorail.proxy.rlwy.net',
  port: 33525,
  dialect: 'mysql'
});

module.exports = sequelize;
