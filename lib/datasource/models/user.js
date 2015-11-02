import sequelize from '../maria.js';

let user = sequlize.define('User',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    personalNumber: Sequlize.INTEGER,
    name: Sequlize.STRING
});

module.exports = user;
