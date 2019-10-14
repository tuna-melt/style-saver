const Sequelize = require('sequelize');
const db = require('./db');

const Project = db.define('project', {
  name: { type: Sequelize.STRING, allowNull: false },
  creationDate: Sequelize.DATE,
  primaryColor: Sequelize.STRING,
  secondaryColor: Sequelize.STRING,
  accentColor: Sequelize.STRING,
  baseColor: Sequelize.STRING,
});

module.exports = Project;
