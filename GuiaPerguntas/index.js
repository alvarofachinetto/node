const express = require('express');
const app = express();
const body_parser = require('body-parser');
const connection = require('./database/conexao');
const pergunta = require('./database/pergunta');
const resposta = require('./database/Resposta');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso');
    }).catch((msgErro) => {
        console.log(msgErro);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.get('/', (req, res) => {
    pergunta.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then( perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    }); 
});

app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id;
    
    pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta !== undefined){
            resposta.findAll({
                where: {
                    perguntaId: pergunta.id       
                }
            }).then(respostas => {   
                res.render('pergunta',{
                    pergunta: pergunta,
                    respostas: respostas
                }) 
            });
        }else{
            res.redirect('/');
        }
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
});

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
});

app.post('/responder', (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;

    resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/'+perguntaId);
    });
})

app.listen(3000, () => console.log('Server starter!!'));