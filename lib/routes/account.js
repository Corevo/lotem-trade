let accountRouter = new require('express').Router();
import { getAccounts } from '../controllers/user.js';
import { authenticate } from '../middlewares/authenticate.js';
import log from '../log.js';

