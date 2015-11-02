import Sequlize from 'sequlize';
import Maria from '../maria.js';

let sequelize = new Sequelize(config.database.connectionString);

let user = sequlize.define('User',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    personalNumber: Sequlize.INTEGER,
    name: Sequlize.STRING
});

module.exports = user;
