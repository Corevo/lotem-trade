let userCon = require('express').Router();
import { getAccounts } from '../controllers/user.js';
import { authenticate } from '../middlewares/authenticate.js';

userCon.use( authenticate );

userCon.get('/:id/accounts', (req, res) => {
  getAccounts(req.params.id).then(arr => {
    res.json(arr);
  });
});

module.exports = userCon;
