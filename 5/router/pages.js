const express = require('express')

const router = express.Router()

const path = require('path')

router.get('/', (req, res) => {
    res.send('Router')
})

router.get('/index1', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'view',
        'index1.html'
    ))
})

router.get('/index2', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'view',
        'index2.html'
    ))
})

router.get('/index3', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'view',
        'index3.html'
    ))
})

router.get('/style3.css', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'style',
        'style3.css'
    ))
})

router.get('/index4', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'view',
        'index4.html'
    ))
})


router.get('/style4.css', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'public',
        'style',
        'style4.css'
    ))
})


router.get('/index5', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '../',
        'view',
        'index5.html'
    ))
})



module.exports = router