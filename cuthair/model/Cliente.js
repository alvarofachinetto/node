const Sequelize = require('sequelize');
const Conexao = require('../database/conexao');

const cliente = Conexao.define('cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = cliente;