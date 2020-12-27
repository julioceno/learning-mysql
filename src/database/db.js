
const mysql = require('mysql') 

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "accounts"
})

conn.connect( (e) => {
    if (e) throw e; 
})


// conn.query('DELETE FROM billstopay ')

// conn.query('SELECT * FROM billstopay', (err, rows, fields) => {
//     if(!err) {
//         console.log(`Resultado: ${fields.id}`)
//     } else {
//         console.log(err)
//     }
// })


module.exports = conn