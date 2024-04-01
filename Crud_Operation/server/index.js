const express=require('express')
const cors=require('cors')
const database = require('./config/database');
const router = require('./router/user.router');

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)




app.listen(8090,()=>{
    console.log("server start...!");
    database()
})