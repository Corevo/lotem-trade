import Sequelize from 'sequelize';
import sequelize from '../maria.js';
import Account from '../models/account.js';
import userAccount from '../models/userAccount.js';

let user = sequelize.define('User',{
    id: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING
});

user.belongsToMany(Account, { through: userAccount, });

module.exports = user;
