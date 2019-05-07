'use strict'

const express = require('express')
let port = process.env.PORT || 3000
let app = express()

app.get('/', (req, res) => res.send('Hola Mundo desde Heroku'))
app.listen(port, () => console.log(`App iniciada en http://localhost:${port}`))
