let accountRouter = new require('express').Router();
import { getLatestInTransactions, getLatestOutTransactions, getLatestTransactions, getServicesOfAccount, pay } from '../controllers/account.js';
import { authenticate } from '../middlewares/authenticate.js';
import log from '../log.js';

accountRouter.use(authenticate);

accountRouter.get('/:id/transactions', (req, res) => {
  getLatestInTransactions({
    accountId: req.params.id,
  }).then(arr => {
    res.json(arr);
  });
});
