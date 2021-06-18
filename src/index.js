'use strict'

const { join } = require('path')
const express = require('express')
const { twig } = require('twig')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
const app = express()

app.set('twig options', {
    allow_async: true,
    static_variables: false,
})
app.set('views', join(__dirname, 'views'))

app.use('/static', express.static(join(process.cwd(), 'public')))

app.get('/', (req, res) => {
    res.render('index.twig')
})

app.listen(port, host, () => console.log(`App iniciada en http://${host}:${port}`))
