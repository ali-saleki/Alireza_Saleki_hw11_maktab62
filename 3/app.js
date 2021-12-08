const express = require('express')

const path = require('path')

const app = express();

const user = require('./router/user')

app.use('/user', user)

app.get('/', (req, res)=> {
    res.sendFile(path.join(
        __dirname,
        'view', 
        'index.html'
    ))
})


app.listen(3000, () => {
    console.log('server is running on port: 3000')
})