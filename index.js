const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const pergunta = require('./database/Pergunta');

//Database

connection
    .authenticate()
    .then(() => {
        console.log('Concexão feita com o banco de dados')
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//Estou dizendo para o express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

//body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {

    pergunta.findAll({raw: true}).then((perguntas) => {
        console.log(perguntas);
        res.render('index',{
            perguntas: perguntas
        })
    })
  
})

app.get('/perguntar', (req, res) => {

    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {

    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('App rondando na porta 8080!');
})
