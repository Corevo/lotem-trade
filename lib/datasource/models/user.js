import Sequlize from 'Sequlize';
let sequlize = new Sequlize(....);
import Maria from '../maria.js';

let User = sequlize.define('User',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    personalNumber: Sequlize.INTEGER,
    name: Sequlize.STRING
})

moudle.exports = user;
