const Sequelize = require('sequelize');
const conexao = require('./conexao');

const Resposta = conexao.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowedNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowedNull: false
    }
});

Resposta.sync({force: false});

module.exports = Resposta;

