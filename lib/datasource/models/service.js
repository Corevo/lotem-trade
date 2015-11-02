import Sequlize from 'Sequlize';
let sequlize = new Sequlize(....);
import Maria from '../maria.js';
import Account from 'account';

let service = sequlize.define('Service',{
    id: { type: Sequlize.INTEGER, autoIncreament: true },
    name: Sequlize.STRING,
    price: Sequlize.INTEGER
});

moudle.exports = service;
