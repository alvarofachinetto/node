const Sequelize = require('sequelize');

const conexao = new Sequelize('guiapergunta', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexao;