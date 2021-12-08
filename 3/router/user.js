const express = require('express')

const router = express.Router();

const path = require('path')


router.get('/', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'json',
        'users.json'
    ))
})

router.get('/image', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'image',
        'node-js-express-js-pros-ans-cons.png'
    ))
})

router.get('/contact', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'json',
        'contact.json'
    ))
})

router.get('/update', (req, res) => {
    res.send('Updated Succesfully')
})


module.exports = router