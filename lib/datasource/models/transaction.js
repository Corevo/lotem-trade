import Sequlize from 'Sequlize';
let sequlize = new Sequlize(....);
import Maria from '../maria.js';
import Account from 'account';

var Transactions = sequlize.define('Transactions', {
    //TODO from and to accounts,
    amount: Sequlize.INTEGER, 
    //TODO destiny: service
    startDate: Sequlize.DATE,
    endDate: Sequlize.DATE,
    description: Sequlize.STRING
})

moudle.exports = transaction;
