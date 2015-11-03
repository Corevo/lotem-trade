import Sequelize from 'sequelize';
import sequelize from '../maria.js';
import User from './user.js';
import Account from './account.js';

userAccout = sequelize.define('user_account', {
  role: Sequelize.STRING,
});
