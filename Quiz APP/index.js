const express=require('express')

const database=require('./Configs/db')
const router = require('./routers/QuizAPP.routers')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("Views",__dirname+"/views")
app.use(express.static(__dirname+"/public"))

app.use(router)
app.listen(8080,()=>{

    console.log("Server start");
    database()
})