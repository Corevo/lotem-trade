import Sequelize from 'sequelize';
import config from '../../config.json';

let sequelize = new Sequelize(config.database.connectionString);

module.exports = sequelize;
