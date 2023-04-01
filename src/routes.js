const Rastreio = require('./APIs/Correio')
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {

    res.send('teste')

})

router.get('/api/v1/rastreio=:codigo', async (req, res) => {

    const codigo = req.params.codigo;
    const regexCorreios = /[A-Z]{2}[0-9]{9}[A-Z]{2}/;

    if(regexCorreios.test(codigo)){

        const resultadoRastreio = await Rastreio(codigo);
        res.json(resultadoRastreio)

    }else{

        res.json({"info":"Codigo Invalido","msg":"O código de Rastreamento é composto de 13 dígitos, começando com 2 letras seguidas de 9 letras e de mais 2 letras. Verifique se informou o código correto ou entre em contato com o remetente para solicitar o código correto.", "status_code":"200"})

    }

})


router.get('/*', (req, res) => {

    res.send('teste2')

})


module.exports = router