import express from 'express';
import path from 'path';
import fs from 'fs';
import log from './lib/log.js';
import models from './lib/datasource/models.js';

import transactions from './lib/routes/transaction';
import user from './lib/routes/user.js';
import account from './lib/routes/account.js';

let port = 8080;
let app = express();

const STATIC_DIR = path.join(__dirname, 'public/assets');
app.use('/assets', express.static(STATIC_DIR));

app.use('/api/user', user);
app.use('/api/transactions', transactions);
app.use('/api/account', account);

app.use('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server.
let server = app.listen(port, () => {
    let { address } = server.address();
    log.info(`Server listening at http:\/\/${address}:${port}`);
});
