const Sequelize = require('sequelize');
const db = require('./db');

const FontScale = db.define('fontScale', {
  scale: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  typeface: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  font: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  case: Sequelize.STRING,
  letterSpacing: Sequelize.STRING,
});

module.exports = FontScale;
