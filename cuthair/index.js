const express = require('express');
const connection = require('./database/conexao');
const app = express();

connection
    .authenticate()
    .then(() => console.log('Conexão feita com sucesso'))
    .catch(() => console.error('Erro ao conectar ao banco'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3005, () => console.log('Server starter'));