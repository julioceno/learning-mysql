const conn = require('./db')




async function saveBills(conta, valor) {

    return await conn.query(`
        INSERT INTO billstopay (
            bill, 
            value
        ) VALUES (
            '${conta}',
            ${valor}
            );
    `)
}

module.exports = saveBills

// saveBills()

// conn.query('SELECT * FROM billstopay', (err, rows, fields) => {
//     if(!err) {
//         console.log(`Resultado: ${rows[1].bill}`)
//     } else {
//         console.log(err)
//     }
// })

// conn.query(`DELETE FROM billstopay`)
