const express = require('express')

const app = express();

const path = require('path')

const fs = require('fs')

// app.use((req, res, next)=>{
//     // console.log(req.url, req.method);
//     next();
// })

app.get('/', (req, res)=>{
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    )
    return res.sendFile(filePath)

    
})

app.get('/img.jpg', (req, res)=>{
    
    res.sendFile(path.join(
        __dirname,
        'public',
        'img.jpg'
    ))

    
})

app.get('/style.css', (req, res)=>{
    
    res.sendFile(path.join(
        __dirname,
        'public',
        'style.css'
    ))

    
})


app.get('/main.js', (req, res)=>{
    
    res.sendFile(path.join(
        __dirname,
        'public',
        'main.js'
    ))

    
})

app.listen(5000, () => {
    console.log('Server is running on port: 5000');
})