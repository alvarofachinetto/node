const Sequelize = require('sequelize');
const Conexao = require('../database/conexao');

const ServicoCorte = Conexao.define('Servico_Corte', {
    cliente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cabeleleiro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estiloCorte: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    troco: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    valorTroco: {
        type: Sequelize.DECIMAL,
        allowNull: true  
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    horario_previsto: {
        type: Sequelize.TIME,
        allowNull: false
    },
    referencia: {
        type: Sequelize.STRING,
        allowNull: true
    }
});