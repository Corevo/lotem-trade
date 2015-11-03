import express from 'express';
import path from 'path';
import fs from 'fs';
import transactions from './lib/routes/transaction';
import home from './lib/routes/home';

let port = 8080;
let app = express();

const STATIC_DIR = path.join(__dirname, 'public/assets');
app.use('/assets', express.static(STATIC_DIR));

app.use('/api', home);
app.use('/api/transactions', transactions);

app.use('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server.
let server = app.listen(port, () => {
    let { address } = server.address();
    console.log(`Server listening at http://${address}:${port}`);
});
