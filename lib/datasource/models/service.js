import Sequelize from 'sequelize'
import sequelize from '../maria.js';
import Account from './account';

let service = sequelize.define('Service',{
    id: { type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequelize.STRING,
    price: Sequelize.FLOAT
});

module.exports = service;
