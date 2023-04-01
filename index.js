const routes = require('./src/routes')
const config = require('./src/config.json')
const express = require('express')
const app = express()

app.use(routes)

app.listen(`${config.Porta}`, () => {

    console.log(`Servidor Iniciado MasterAPI | Inicializado - Porta : ${config.Porta}`)

})