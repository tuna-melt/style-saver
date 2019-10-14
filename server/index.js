const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const app = express();
module.exports = app;

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file-server middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

//api routes for ajax requests
app.use('api', require('./api'));

//misc invalid url catcher
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

//sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

//endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
