const express = require('express')
const app = express()
const path = require('path')

const databaseInteractions = require('./database/database-interactions')

const nunjucks = require('nunjucks')
nunjucks.configure( "src/views",{
    express: app,
    noCache: true
} )

app

    .use(express.urlencoded({extended: true}))


    .get('/', async (req, resp) => {
        try {

            const results  = await databaseInteractions.getRows()

            resp.render('index.html', {results})
        } catch(e) {

            console.log(e)
        }

    })

    .post('/post', async (req, resp) => {

        const field = req.body
        try {
            await databaseInteractions.saveBills({ bill: field.bill, value: field.value })

            resp.redirect('/')
        } catch(e) {

            console.log(e)
        }
    })



    .listen(8080)