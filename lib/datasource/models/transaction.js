import Sequelize from 'sequelize'
import sequelize from '../maria.js';
import Service from './service';

var transaction = sequelize.define('Transaction', {
    id: {type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true},
    amount: Sequelize.FLOAT,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    description: Sequelize.STRING
});

transaction.hasOne(Service);

module.exports = transaction;
