require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


//My routes
const bucketRoutes = require('./routes/woovly')

var port = process.env.PORT || 5050

mongoose.connect(process.env.DATABASE_LOCAL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`Connected to the database`)
})

//middlewares
app.use(bodyParser.json())
app.use(cors())

app.use('/woovly',bucketRoutes)

app.listen(port,() => {
    console.log(`Server started at port ${port}`)
})