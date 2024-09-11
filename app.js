const cors = require('cors')
const mongoDb = require('./config/mongodb')
const {configCloudinary} = require('./utils/cloudinary')

require('dotenv').config()
mongoDb.connect()
configCloudinary()

const express = require('express')
const app = express()

const userRoute= require('./routes/userRoute')
const adminRoute= require('./routes/adminRoute')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST","PUT","DELETE","PATCH"],
      credentials: true,
    })
);

app.use('/',userRoute)
app.use('/admin',adminRoute)

app.listen(3000,()=>{
    console.log("Server is runnig...")
}) 