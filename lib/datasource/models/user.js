import Sequelize from 'sequelize';
import sequelize from '../maria.js';
import Account from './account';

let user = sequelize.define('User', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING
});

user.belongsToMany(Account);

module.exports = user;
