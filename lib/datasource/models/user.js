import Sequelize from 'sequelize'
import sequelize from '../maria.js';

let user = sequelize.define('User',{
    id: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING
});

module.exports = user;
