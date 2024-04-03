const express=require('express');
const database = require('./config/database');
const router = require('./router/user.router');
// const database=require("./config/databse.js")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',__dirname+"/views")
app.use(router)
app.listen(8090,()=>{
    console.log("server Start..!");
    database()
})