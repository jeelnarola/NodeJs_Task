const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    Name:String,
    email:String,
    phone:String,
    image:String,
    status :Boolean,
    created_date:String,
    updated_date:String,
})

const user=mongoose.model("User",UserSchema)

module.exports=user