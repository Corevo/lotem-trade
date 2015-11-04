import Sequelize from 'sequelize';
import sequelize from './maria.js';

let account, user, transaction, service;

account = sequelize.define('Account', {
    id: { type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequelize.STRING,
    balance: Sequelize.FLOAT,
});


user = sequelize.define('User', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: Sequelize.STRING
});


transaction = sequelize.define('Transaction', {
    id: {type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true},
    amount: Sequelize.FLOAT,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    description: Sequelize.STRING
});


service = sequelize.define('Service', {
    id: { type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequelize.STRING,
    price: Sequelize.FLOAT
});


account.belongsToMany(user, {through: 'userAccount'});
account.hasMany(service);
account.hasMany(transaction, {
    foreignKey: {
        name: 'outAccount',
        allowNull: false
      }
    });
account.hasMany(transaction, {
    foreignKey: {
        name: 'inAccount',
        allowNull: false
      }
  });
user.belongsToMany(account, { through: 'userAccount' });
transaction.hasOne(service);


module.exports = {
  account,
  user,
  transaction,
  service,
  };

