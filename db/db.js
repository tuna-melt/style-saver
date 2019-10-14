const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/style-saver', {
  logging: false,
});

module.exports = db;
