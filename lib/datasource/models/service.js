import sequelize from '../maria.js';
import Account from 'account';

let service = sequlize.define('Service',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    name: Sequlize.STRING,
    price: Sequlize.FLOAT
});

module.exports = service;
