const conn = require('./db')

 function saveBills(conta, valor) {

    return  conn.query(`
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

