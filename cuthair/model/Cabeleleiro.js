const Sequelize = require('sequelize');
const Conexao = require('../database/conexao');

const cabeleleiro = Conexao.define('Cabeleleiro', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpfCnpj: {
        type: Sequelize.STRING,
        allowNull: true
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING
    },
    estiliCorteId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = cabeleleiro;