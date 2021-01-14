const express = require('express')
const { default: fetch } = require('node-fetch')
const Datastore = require('nedb')
const { Router } = require('express')
const app = express()
app.listen(3000, ()=> {
    console.log('Listening... ✌')
})

app.get('/', (req, res)=> {
    res.sendFile(__dirname+'/public/'+'index.html')
})
 
app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/'+'404.html')
})
