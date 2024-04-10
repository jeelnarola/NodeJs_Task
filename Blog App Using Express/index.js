const express=require('express')
const database = require('./config/database.config')
const router=require("./router/blog.router")


const app=express()


app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.set("view engine","ejs")
app.set('views',__dirname+"/view")
app.use(express.static(__dirname+"/public"))
app.use(router)

app.get('/',(req,res)=>{
    res.render("index")
})
app.listen(8080,()=>{
    console.log("Server Start..!")
    database()
})