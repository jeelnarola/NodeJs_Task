const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    image:String,
    name:String,
    email:String,
    phone:String,
    CreateById:Number,
    status:Boolean,
    created_date:String,
    update_date:String,
})

const user=mongoose.model("user",userSchema)
module.exports=user