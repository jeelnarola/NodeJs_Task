const {Router}=require('express')
const joi=require('joi')
const { index } = require('../controller/user.controller')
const user = require('../model/user.Schema')

const router=Router()

router.get('/',index)
router.post('/DataAdd',async(req,res)=>{
    
    const scema=joi.object({
        Name:joi.string().min(3).max(15).required(),
        email:joi.string().email().lowercase().required(),
        phone:joi.string().min(10).max(10).required()
    })
    let result=await scema.validate(req.body)

    let data=await user.findOne({email:result.value.email})
    if(data){
        res.status(200).json({msg:"Alredy Extis User !"})
    }
    else{
        let data=await user.create(result.value)
        res.status(200).send(result)
    }

})

router.get("/AllUser",async(req,res)=>{
    let data=await user.find()
    res.send(data)
})

router.put("/Update/:id",async(req,res)=>{
    let {id}=req.params;
    let data=await user.findByIdAndUpdate(id,req.body)
    res.send(data)
})

router.get("/Search",async(req,res)=>{
    let {search}=req.query;
    let data=await user.find({$or:[{Name:search},{email:search},{phone:search}]})
    res.send(data)
})

router.delete("/Delete",async(req,res)=>{
    let {id}=req.body
    let data=await user.findByIdAndDelete(id)
    data.save()
    res.send(data)
})
module.exports=router