const Sequelize = require('sequelize');
const conexao = require('./conexao');

const pergunta = conexao.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

pergunta.sync({force: false}).then(() => {});

module.exports = pergunta;