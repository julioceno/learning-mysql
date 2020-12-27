const express = require('express')
const app = express()
const path = require('path')

const saveBills = require('./database/save-bills')



app

    .get('/', (req, resp) => {
        resp.sendFile(path.join(__dirname, "views", "index.html"))
    })

    .post('/post', async (req, resp) => {
       

        try {
            await saveBills('baaaa', 45)


            resp.redirect('/')
            
        } catch(e) {

            console.log(e)
        }
    })



    .listen(8080)