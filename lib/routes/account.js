let accountRouter = new require('express').Router();
import { rawAccount, getLatestInTransactions, getLatestOutTransactions, getLatestTransactions, getServicesOfAccount, pay } from '../controllers/account.js';
import { authenticate } from '../middlewares/authenticate.js';
import log from '../log.js';

accountRouter.use(authenticate);

accountRouter.get('/:id/transactions', (req, res) => {
  getLatestTransactions({
    accountId: req.params.id,
  }).then(arr => {
    res.json(arr);
  });
});

accountRouter.get('/:id/services', (req, res) => {
  getServicesOfAccount({
    accountId: req.params.id,
  }).then(arr => {
    res.json(arr);
  });
});


accountRouter.get('/:id', (req, res) => {
  rawAccount({accountId: req.params.id}).then(acc => {
    res.json(acc);
  });
});

accountRouter.post('/:id/transaction/:to/for/:for', (req, res) => {
  pay({
    clientId: req.params.id,
    serviceProviderId: req.params.to,
    serviceId: req.params.for,
    description: 'fuck you',
  }).then(() => {
    res.send("hope you die");
  });
});

module.exports = accountRouter;
