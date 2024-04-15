const {Router}=require('express')
const QuizAPP = require('../models/User.Schema')

const router=Router()

router.get("/",(req,res)=>{
    res.status(200).render("index")
})


router.get("/QuizAPP",(req,res)=>{
    res.render("Quiz")
})

router.post("/QuizADD",async(req,res)=>{
    // let {questions}=req.body
    let data=await QuizAPP.create(req.body)
    res.send(data)
})

router.get("/All",async(req,res)=>{
    let data=await QuizAPP.find()
    res.send(data)
})
module.exports=router