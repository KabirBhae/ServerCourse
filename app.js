const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');

const router = require('./routes')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)

//connect to DB
mongoose.connect(process.env.URL,()=>{
    console.log("DB connected")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})