const express = require('express')


const app = express();

const pages = require('./router/pages')




app.use('/pages', pages)



app.get('/', (req, res)=> {
    res.send('Web Application')
})




app.listen(3000, () => {
    console.log('server is running on port: 3000')
})