import Sequlize from 'sequlize';
import Maria from '../maria.js';
import Service from 'service';

let sequelize = new Sequelize(config.database.connectionString);

var transaction = sequlize.define('Transaction', {
    //TODO from and to accounts,
    amount: Sequlize.FLOAT,
    //TODO destiny: service
    startDate: Sequlize.DATE,
    endDate: Sequlize.DATE,
    description: Sequlize.STRING
});

transaction.hasOne(service);

module.exports = transaction;
