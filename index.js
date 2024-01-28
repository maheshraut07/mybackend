require ('dotenv').config()
const express = require('express')  // import express in our app
const app = express()               // we have imported all the functionalities of express in the variable app
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send("maheshraut07")
})

app.get('/login', (req,res)=>{
    res.send('<h1> please login at chai aur code<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



/**
 

 to setup the node project use  = npm init 
 if we set => start = "node index.js " then we are able to start our application by using "start" keyword only

 */