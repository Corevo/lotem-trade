import sequelize from '../maria.js';
import User from './user';
import Service from './service';
import Transaction from './transaction';

let account = sequelize.define('Account',{
    id: { type: Sequlize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequlize.STRING,
    balance: Sequlize.FLOAT,
});

account.hasMany(User);
account.hasMany(Service);
account.hasMany(Transaction, {
    foreignKey: {
        name: 'outAccount',
        allowNull: false
      }
    });
account.hasMany(Transaction, {
    foreignKey: {
        name: 'inAccount',
        allowNull: false
      }
  });

module.exports = account;
