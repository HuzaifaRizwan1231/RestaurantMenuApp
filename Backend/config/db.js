
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE 
})
// const db = mysql.createPool({
//     host: "127.0.0.1",
//     user: "root",
//     port: '3306',
//     password: "",
//     connectionLimit: 10,
//     database: "rfc-project" 
// })


module.exports = db;