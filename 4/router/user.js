const express = require('express')

const router = express.Router()

const fs = require('fs')

const path = require('path')

router.post('/getUser', (req, res)=> {
    fs.readFile(path.join(
        __dirname,
        '../',
        'public',
        'json',
        'users.json'

    ), 'utf-8', function(err, data) {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(
                    __dirname,
                    '../',
                    'public',
                    'error', 
                    '404.html'
                ), (err, data) => {
                    res.writeHead(404, { 'Content-Type': contentType })
                    res.end(data)
                })
            } else {
                res.writeHead(500);
                res.end(`Server error: ${err.code}`)
            }
            
        } else {
            data = JSON.parse(data)
            let user = data.find(user => user.username === req.body.username)
            if (!user) {
                res.status(404).send('user not found')
            } else {
                res.status(200).send({ status: 'success', data: user })
            }
        }
    })
})

module.exports = router