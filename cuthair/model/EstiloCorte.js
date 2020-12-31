const Sequelize = require('sequelize');
const Conexao = require('../database/conexao');

const estiloCorte = Conexao.define('Estilo_Corte', {
    sombrancelha: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    barba: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    imagemCabelo: {
        type: Sequelize.BLOB
    },
    maisDetalhes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
});

module.exports = estiloCorte;