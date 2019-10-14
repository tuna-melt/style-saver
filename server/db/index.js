const db = require('./db');
const User = require('./User');
const Project = require('./Project');
const ScreenSize = require('./ScreenSize');
const FontScale = require('./FontScale');
const ColorScheme = require('./ColorScheme');

User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(ScreenSize);
ScreenSize.belongsTo(Project);

Project.hasMany(ColorScheme);
ColorScheme.belongsTo(Project);

ScreenSize.hasMany(FontScale);
FontScale.belongsTo(ScreenSize);

console.log('Models Created');

module.exports = {
  db,
  User,
  Project,
  ScreenSize,
  FontScale,
};
