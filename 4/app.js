const express = require('express')

const app = express();

const admin = require('./router/admin')

const user = require('./router/user')

app.use('/admin', admin)

app.use('/user', user)

app.get('/', (req, res) => {
    res.send("Web Application")
})




app.listen(3000, () => {
    console.log('server is running on port: 3000');
})