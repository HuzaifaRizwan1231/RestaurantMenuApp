
const mysql = require('mysql')

const db = mysql.createConnection({
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
})
// const db = mysql.createPool({
//     connectionLimit : 100,
//     waitForConnections : true,
//     queueLimit :0,
//     host     : 'myremotehost',
//     user     : '',
//     password : '',
//     database : 'mother51_moastage',
//     debug    :  true,
//     wait_timeout : 28800,
//     connect_timeout :10
// })


module.exports = db;