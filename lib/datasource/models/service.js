import sequelize from '../maria.js';
import Account from 'account';

let service = sequlize.define('Service',{
    id: { type: Sequlize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequlize.STRING,
    price: Sequlize.FLOAT
});

module.exports = service;
