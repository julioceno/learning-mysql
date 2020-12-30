const connect = require('./db')

 async function getRows() {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM billstopay')

    return rows
}  

async function saveBills(data) {
    const conn = await connect()
        console.log(data)

    const sql = `INSERT INTO billstopay (bill, value) VALUE (?, ?);`
    const values = [data.bill, data.value]

    await conn.query(sql, values)

}    


module.exports = {
    getRows,
    saveBills
}

