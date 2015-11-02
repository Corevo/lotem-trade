import sequelize from '../maria.js';

let user = sequlize.define('User',{
    id: { type: Sequlize.STRING, primaryKey: true },
    name: Sequlize.STRING
});

module.exports = user;
