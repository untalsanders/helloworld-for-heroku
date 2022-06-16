'use strict'

const { join } = require('path')
const express = require('express')
const { twig } = require('twig')

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000
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

app.listen(PORT, HOST, () => console.log(`Server is running on http://${HOST}:${PORT}`))
