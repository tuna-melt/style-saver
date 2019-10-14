const Sequelize = require('sequelize');
const db = require('./db');

const ScreenSize = db.define('screenSize', {
  width: Sequelize.STRING,
  height: Sequelize.STRING,
});

module.exports = ScreenSize;
