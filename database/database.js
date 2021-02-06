const Sequilize = require('sequelize');
const mysql = require('mysql2')

const connection = new Sequilize('guiaperguntas', 'root','asdf1234',{
    host: 'localhost',
    dialect: 'mysql'
});

/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdf1234',
    database: 'guiaperguntas'
})
*/
module.exports = connection;