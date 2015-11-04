let userRouter = new require('express').Router();
import { getAccounts } from '../controllers/user.js';
import { authenticate } from '../middlewares/authenticate.js';
import log from '../log.js';

log.debug('inside the api');
userRouter.use( authenticate );

userRouter.get('/:id/accounts', (req, res) => {
  log.debug(req.params.id);
  getAccounts({ userId: req.params.id }).then(arr => {
    res.json(arr);
  });
});

module.exports = userRouter;
