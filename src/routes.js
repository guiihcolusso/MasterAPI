const express = require('express')
const router = express.Router();

router.get('/', (req,res) =>{

    res.send('teste')

})

router.get('/*', (req, res) => {

    res.send('teste2')
    
})


module.exports = router