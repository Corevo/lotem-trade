let transactions = require('express').Router();


transactions.get('/', ( req, res ) => {
  res.send('/transactions/');
});

module.exports = transactions;
