'use strict'

const express = require('express')
const app = express()
const port = process.env.NODE_PORT || 3000

app.get('/', (req, res) => res.send('Hola Mundo desde Heroku'))
app.listen(port, () => console.log(`App iniciada en http://localhost:${port}`))
