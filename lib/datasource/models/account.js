import Sequelize from 'sequelize';
import sequelize from '../maria.js';
import User from './user.js';
import Service from './service';
import Transaction from './transaction';

let account = sequelize.define('Account',{
    id: { type: Sequelize.INTEGER, autoIncreament: true, primaryKey: true },
    name: Sequelize.STRING,
    balance: Sequelize.FLOAT,
});

// account.hasMany(User);
// account.hasMany(Service);
account.hasMany(Transaction, {
    foreignKey: {
        name: 'outAccount',
        allowNull: false
      }
    });
// account.hasMany(Transaction, {
//     foreignKey: {
//         name: 'inAccount',
//         allowNull: false
//       }
//   });

module.exports = account;
