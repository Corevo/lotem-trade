import sequelize from '../maria.js';
import Service from 'service';

var transaction = sequelize.define('Transaction', {
    amount: Sequlize.FLOAT,
    startDate: Sequlize.DATE,
    endDate: Sequlize.DATE,
    description: Sequlize.STRING
});

transaction.hasOne(service);

module.exports = transaction;
