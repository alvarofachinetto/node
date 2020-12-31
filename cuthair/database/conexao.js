const { Sequelize } = require('sequelize');

const conecta = new Sequelize('cuthair', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conecta;