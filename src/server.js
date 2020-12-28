const express = require('express')
const app = express()
const path = require('path')

const saveBills = require('./database/save-bills')
const  conn  = require('./database/db')

const nunjucks = require('nunjucks')

nunjucks.configure( "src/views",{
    express: app,
    noCache: true
} )

app

    .use(express.urlencoded({extended: true}))


    .get('/', async (req, resp) => {
        try {

            conn.query(`DELETE FROM billstopay WHERE id = "21"`)

            await conn.execute(`SELECT * FROM billstopay`,
            (err, results) => {
                resp.render('index.html', {results})
            
                if (err) console.log(err)
            }
            )

        } catch(e) {

            console.log(e)
        }

    })

    .post('/post', async (req, resp) => {

        const field = req.body

        try {

            console.log(field)

             saveBills(field.bill, field.value)

            resp.redirect('/')
        } catch(e) {

            console.log(e)
        }
    })



    .listen(8080)