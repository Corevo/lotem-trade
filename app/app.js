import express from 'express'
import path from 'path';
import fs from 'fs';

import transactions from '../lib/routes/transaction'
import home from '../lib/routes/home'

let port = 3000;
let app = express();

const STATIC_DIR = path.join(__dirname, '..', 'public');
app.use('/assets', express.static(STATIC_DIR));

app.use('/', home);
app.use('/transactions', transactions);

app.use('*', function(req, res) {
  res.redirect('/');
});

// Start the server.
let server = app.listen(port, () => {

  let { address, port } = server.address();
  console.log(`Server listening at http://${address}:${port}`);
});
