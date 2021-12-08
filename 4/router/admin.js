const express = require('express')

const router = express.Router()

const path = require('path')



router.get('/', (req, res)=>{
    res.send("Administration")
})

router.get('/getAll%20Users', (req, res)=> {
    
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'json',
        'users.json'
    ))
})

module.exports = router