const Sequelize = require('sequelize');
const db = require('./db');

const ColorScheme = db.define('colorScheme', {
  name: { type: Sequelize.STRING, allowNull: false },
  primaryColor: Sequelize.STRING,
  secondaryColor: Sequelize.STRING,
  accentColor: Sequelize.STRING,
  baseColor: Sequelize.STRING,
});

module.exports = ColorScheme;
