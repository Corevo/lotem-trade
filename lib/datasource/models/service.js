import Sequlize from 'sequelize';
import Maria from '../maria.js';
import Account from 'account';

let sequelize = new Sequelize(config.database.connectionString);

let service = sequlize.define('Service',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    name: Sequlize.STRING,
    price: Sequlize.FLOAT
});

module.exports = service;
