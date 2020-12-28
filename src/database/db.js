
const mysql = require('mysql2')  

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "accounts"
})

conn.connect( (e) => {
    if (e) throw e; 
})


module.exports = conn