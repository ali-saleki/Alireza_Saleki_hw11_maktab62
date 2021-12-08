const express = require('express');
const path = require('path');

const app = express();

const things = require('./router/things')


app.use('/things', things)

app.use('/', (req, res) => {
    res.send("Hello Web Application")
})

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
})