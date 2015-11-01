import Sequlize from 'Sequlize';
let sequlize = new Sequlize(....);
import Maria from '../maria.js';
import User from 'user';
import Service from 'service';
import Transaction from 'transaction';

let account = sequlize.define('Account',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    name: Sequlize.STRING,
    //TODO transactions,
    balance: Sequlize.INTEGER,
    //TODO partners
    //TODO services: service
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
