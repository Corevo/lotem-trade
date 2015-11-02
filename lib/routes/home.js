let home = require('express').Router();


home.get('/', ( req, res ) => {
  res.send('/home');
});

module.exports = home;
